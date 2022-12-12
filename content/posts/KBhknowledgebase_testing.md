+++
title = "knowledgebase testing page"
author = ["Houjun Liu"]
draft = false
+++

[knowledgebase testing]({{< relref "KBhknowledgebase_testing.md" >}}) is a space to test the knowledgebase! Other utility and maintained pages include [random]({{< relref "KBhrandom.md" >}}) and [Index]({{< relref "KBhindex.md" >}}).


## Generate a Valid Token! {#generate-a-valid-token}


<input id="code" placeholder="s_0000_0x03"></input> <button id="generate">Generate</button>

<script>
    function sumDigits(n) {
        let sum = 0;
        while (n) {
            digit = n % 10;
            sum += digit;
            n = (n - digit) / 10;
        }
        return sum;
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }


    $("#generate").click(() => {
        let digits = getRandomInt(1000, 9999);
        let sumVal = sumDigits(digits);
        let mod18_str = (sumVal % 50117).toString(16);
        $("#code").val(`s_${digits}_${mod18_str}`);
    })
</script>