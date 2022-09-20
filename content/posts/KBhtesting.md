+++
title = "Testing"
author = ["Houjun Liu"]
draft = false
+++

How many bugs are in 1,000 lines of code?

-   Typical code: 1-10
-   Platform code: 0.1-1
-   The best---NASA: 0.01-0.1

Never _assume_ your software doesn't have bugs.


## Test-Driven Development {#test-driven-development}

Test _before_ you build!

-   Specs are already written
-   We know what the expected behavior is
-   We can write tests for the expected behavior _first_
-   All tests fail to start
-   We know we are done writing code when all tests pass

"NYI" (not-yet implemented)

```text
often, writing test exposes gaps in your specs
```


## How _NOT!_ not write tests {#how-not-not-write-tests}


### Random Sampling {#random-sampling}

-   Pick one or two inputs and show your code works on it
-   Why it doesn't work: there maybe specific inputs that break your code


### Exhaustive Testing {#exhaustive-testing}

-   Test for the domain of inputs
-   Why it doesn't work: tests run forever


## How _DO_ you write tsets {#how-do-you-write-tsets}


### Black-Box Testing {#black-box-testing}

-   Pretend the code implementation is a black box
-   All you know is what the specification; and what the input/output produces


### White-Box Testing {#white-box-testing}

-   You can see the implementation
-   You test for specific edge cases
-   Off-by-one, running time, specific inputs, etc.


### Malicious Testing {#malicious-testing}

-   What happens if a user is _trying_ to break your system
-   Sometimes, this is known as "pen-testing" or "white-hack hacking"
-   Take CS340 Compsec


## How _BIG_ are your tests {#how-big-are-your-tests}


### Unit Testing {#unit-testing}

-   Backbone of testing
-   Typically, that means one test per function
-   Tests choose representative inputs
-   ****Idempotent****: the state of the testing system should be a the beginning and end of the test (tests should revert) (setup + teardown tests)


### Subsystem Testing {#subsystem-testing}

-   Exercise multiple functions working together in a system
-   Often takes longer
-   OK to run these less frequently


### End-to-End Integration {#end-to-end-integration}

-   Exercise the entire workflow
-   May involve external libraries, hardware, etc.


### Regression Testing {#regression-testing}

-   Isolate the cause of the bug to the smallest possible test case
-   Write a test assuming the bug is fixed
-   Fix the bug
-   Add the test to your test suite


## How _MUCH_ do we run tests {#how-much-do-we-run-tests}

-   Ideally, run tests every time code is committed
-   Ideally---run tests that address the function
-   Schedule long tests