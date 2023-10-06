+++
title = "string"
author = ["Houjun Liu"]
draft = false
+++

In C, [string]({{< relref "KBhstring.md" >}}) is an array of [char]({{< relref "KBhchar.md" >}})s. C strings don't track their length; each C string always end in an null-terminating character: `\0`. This is represents the zero byte.

There's a built in function `strlen` which checks the length of a string without the null-terminating character. This function is `O(n)`!!!


## passing strings around {#passing-strings-around}

Strings are passed as a pointer to their first character.

```C
void foo(char *str) {
    // do string things
}

char string[6]; // THIS IS A STRING OF LENGTH 5!!!! (beacuse there's a null terminator)
foo(string); // pass the syntax sugar pointer
foo(&string[0]); // pass the actual first pointer
```

you won't know whether or not this is the address to a string or a pointer to a single character; so good practice to call it `something_str` if you'd like a string.


## character manipulation checker {#character-manipulation-checker}

```C
#include <ctype.h>

int main() {
    isalpha(ch);
    islower(ch);
    ...
}
```

{{< figure src="/ox-hugo/2023-10-06_11-08-28_screenshot.png" >}}


## string manipulations {#string-manipulations}

```C
#include <string.h>
```

{{< figure src="/ox-hugo/2023-10-06_11-17-37_screenshot.png" >}}


### strcmp {#strcmp}

When you comparing [string]({{< relref "KBhstring.md" >}})s, you can't use == or &lt; or &gt;. Instead:

```C
#include <string.h>

int main() {
    int cmp = strcmp(str1, str2);

    if (cmp == 0) {
        // if str1 is equal to str2
    } else if (cmp < 0) {
        // if str1 comes before str2 lexographically
    } else {
        // if str2 comes before str1 lexographically
    }

}
```


### strcpy {#strcpy}

Copying strings, dangerously, because buffer [overflow]({{< relref "KBhbinary_number_system.md#overflow" >}})s are fun.

{{< figure src="/ox-hugo/2023-10-06_11-22-58_screenshot.png" >}}
