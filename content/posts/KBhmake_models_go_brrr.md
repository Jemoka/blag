+++
title = "Make Models Go Brrr: Model Parallel Whisper"
author = ["Houjun Liu"]
tags = ["fireside"]
draft = false
+++

Happy Monday friends.

The deliverable of the week was to make the a ASR model for Batchalign. Essentially, most copies of Whisper is pretty bad at Language Sample Analysis (LSA), because they mostly don't work in terms trying to actually capture the things that people doing LSA want to capture (disfluencies, stuttering, etc.). OpenAI even acknowledged in the paper that they filtered out the disfluencies from their gold transcript to prevent Whisper from writing down too much of them.

And so... We roll up our sleeves and do it ourselves.


## A **Large** Language Model {#a-large-language-model}

I didn't want to perform Low-Rank Approximation (LoRA) to heavily when training this model. Folks fine tuning [LLaMA]({{< relref "KBhllama.md" >}}) will note that the preferred parameters were [essentially asked the user to make the model matricies Rank 8](https://deci.ai/blog/fine-tune-llama-2-with-lora-for-question-answering/), across the entire model.

When trying this in earlier experiments, we failed dramatically as the LoRA'd model failed to converge when we hit any smaller rank below 10. However, if we tried to, say, do it above 10, I would OOM.

I will note: its not like we don't have compute. For this project, I fortunately am able to provision any number of V100 32GB as I see reasonable to train this model. Nevertheless, a lovey dovey parameter heavy 1.5 Billion parameter model is still a sight to behold (and cram into one such GPUs).

Hence, the most important impetus for making this work without aggressive LoRA and degraded performance is some kind of model parallel training scheme.


## One Model, Multiple Cards {#one-model-multiple-cards}

{{< figure src="/ox-hugo/2023-10-23_10-21-34_screenshot.png" >}}

{{< figure src="/ox-hugo/2023-10-23_10-21-40_screenshot.png" >}}

Alr then.

After investigation, [DeepSpeed](https://deepspeed.readthedocs.io/en/stable/zero3.html) seemed pretty promising for a few reasons. The third iteration of its algorithm (Zero-3) has three different main offerings:

1.  Model parameter sharding (sharding the weights of the model across devices)
2.  Optimizer state sharding
3.  **Model/Parameter state offload**

The last one caught my eye. Essentially, as long as your chip has the ability to perform a single forward pass, it can train a model under Zero-3. This is because the system is designed, on request, to offload the weights of your model into CPU or NVMe if you want---and only pull it into the main device for the actual step of forward/backwards passes.

The thing about DeepSpeed is that its configured in a very non-consistent way, and once you DeepSpeed onto your training script you can't really go back.

Apparently [Huggingface Accelerate](https://github.com/huggingface/accelerate) integrates with it.

deepspeed
<https://www.reddit.com/r/Oobabooga/comments/13etobg/using_deepspeed_requires_lots_of_manual_tweaking/>

change that assert statement :point_up:

also set model on train mode

fp16 doesn't work if you do your own tensor creation within the train loop. your dataloader must return the tensors you put into the model if you want fp16

some mysterious problem with accelerator.gather for loss reporting?

~~never got lora to work~~ you have to call `model.train()` apparently and not use fp16

```nil
  File "/jet/home/hliuk/.conda/envs/chat-whisper/lib/python3.10/site-packages/torch/nn/modules/conv.py", line 309, in _conv_forward
    return F.conv1d(input, weight, bias, self.stride,
RuntimeError: weight should have at least three dimensions
```

get_accelerator().empty_cache()

Never got adam_cpu to complie, so used without zero2 cpu optimizer offload

"q_proj", "v_proj", "out_proj"

lora saving is hard; if you lora too hard it doesn't converge
