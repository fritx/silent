# Why I don't write a semi

*2015-01-07*

I've been asked for several times why I don't write down a semicolon, after each statement in my JavaScript.

Most of the time it doesn't even worth a word to answer. In other words, I can't find any reason to do that anymore.

Yes, in languages like Java even PHP, semicolons are required. But in JavaScript, they are **optional**.

The below are the reasons why I finally switched to the no-semicolon style:

1. It saves effort

  Why do I bother myself to type while I don't have to?

1. Code becomes clear

  Semicolons are such irrelevant stuff. Also, a newline already indicates a break.

1. It is **npm** Coding Style

  See *Semicolons* Section [here](https://docs.npmjs.com/misc/coding-style) for more

1. It is reliable and applied

  Not like that unreliable as argued somewhere, actually it's been applied in some popular projects, from backend to frontend such as [npm/npm](https://github.com/npm/npm), [request/request](https://github.com/request/request), [madrobby/zepto](https://github.com/madrobby/zepto), [yyx990803/vue](https://github.com/yyx990803/vue).

No-semicolon style does not mean "no semicolon at all", instead, it means "write only when required". Do not forget to prepend a semicolon for those lines with leading `(`, `[`, `/`, `+`, `-`.

Here is [another article](https://mislav.net/2010/05/semicolons/), by Mislav, stuff in Github.
