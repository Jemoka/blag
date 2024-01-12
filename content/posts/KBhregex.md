+++
title = "regex"
author = ["Houjun Liu"]
draft = false
+++

regular expressions

did you know you can do matching inline too matching equivalent statements: `test (\w+) \1`; non-capture group `(?:test)`


## lookaheads {#lookaheads}

-   (?= pattern) true if pattern matches, but doesn't touch the character pointer
-   (?! pattern) true if pattern doesn't match
-   ^beginning of line
-   end of line$
