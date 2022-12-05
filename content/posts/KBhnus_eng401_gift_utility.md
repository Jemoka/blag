+++
title = "NUS-ENG401 Gift Utility"
author = ["Houjun Liu"]
draft = false
layout = "blank"
+++

## Welcome! {#welcome}

The device of birth—or birthright station—plays a large part of all four of the senior carrion seminar's texts. In _I, Tituba_, the author granted Tituba renewed empowerment through her birth; in _Black Shack Alley_, Jose’s birth in the Alley forced him to leverage the racially unequal devices of the French regime to gain social advancement; Sophie’s trauma in _Breath, Eyes, Memory_ is propagated by her violent conception—which resulted in her mother’s forced testing upon her; Nnu Ego's family in _Joys of Motherhood_ was loving, yet with conservative values which forced a crippling sense of motherly duty that almost drove her to death. Birth, and challenging the station assigned at birth, is a fundamental value pervasive through the texts.

This game aims to explore some of the dynamics in the book, while exploring some aspects of Haitian, Martinican, or Nigerian culture.

To play the game, here are what you need to know--

-   The game works like a CTF: through the game, you are hunting for game tokens that look like this: **s_[numbers]_[numbersletters]**
-   You can validate whether or not the token is correct with the tool provided below
-   Before the start of the game, you are given a "path" number; this number determines your path through the game, you can generate the number with the tool provided below


## Validate a Token! {#validate-a-token}


<input id="token" placeholder="s_0000_0e"></input> <button id="validate">Validate</button>

<div id="result" style="font-size: 13px">please enter a token</div>

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

    $("#validate").click(() => {
        let invalid = "invalid token, sorry!";
        let valid = "valid token, congrats!";
        let value = $("#token").val().split("_");
        if (value[0] != "s") {
            $("#result").html(invalid);
        } else if (!isNaN(value[1])) {
            let sumVal = sumDigits(parseInt(value[1]));
            let mod18_str = (sumVal % 50117).toString(16);
            if (value[2] == mod18_str) $("#result").html(valid);
            else $("#result").html(invalid);
        }
    })
</script>


## The Game {#the-game}


## Generate a Valid Token! {#generate-a-valid-token}

TODO remove this when production


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