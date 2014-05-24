# silent

> Be a silent, static blog

See live demo: [here](http://fritx.github.io/silent)

## Features

### Easy: Writing in Markdown

Or you can use any other renderer instead

All you need to do is rewriting at most **2** functions

### Flexible: Special Page Mastering

> Everything is a page

Everything is under one folder

### Lightweight: You Can't Imagine

> 1 html, 1 ico, 1 css and 1 js, totally **5K** (excluding jquery & marked)

See what, here's a sample of the folders, and nothing else:

- blog/
  - p/ (your own things, free to handle)
    - posts/
      - my-js-book/
        - index.md
        - part-1.md
        - part-2.md
      - what-a-funny-day.md
      - why-i-use-js.md
    - sidebar.md
    - aboutme.md
    - avatar.jpg
  - vendor/ (built-in stuffs)
    - ...
  - favicon.ico
  - index.html

## Usage

> Fast and easy

1. Install from npm: `npm install -g silent`

1. Generate a sample blog: `silent [path/to/blog]`

1. Start mastering your pages around the `p/` folder

## Screenshots

<img src="https://raw.githubusercontent.com/fritx/silent/master/blog/p/projects/silent/Screenshot_from_2014-05-08_01-43-18.png" width="140">
&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://raw.githubusercontent.com/fritx/silent/master/blog/p/projects/silent/Screenshot_from_2014-05-08_01-56-27.png" width="270">

<img src="https://raw.githubusercontent.com/fritx/silent/master/blog/p/projects/silent/Screenshot_from_2014-05-08_01-48-37.png" width="360">

<img src="https://raw.githubusercontent.com/fritx/silent/master/blog/p/projects/silent/Screenshot_from_2014-05-08_01-50-42.png" width="360">

## People Using Silent

> Thank you!

- [huang's Blog](http://huangruichang.github.io)
- [Jason's Blog](http://jacsonlee.github.io/Blog)
- [Jayden's Blog](http://iamjayden.github.io)
- [Fritx's Blog](http://fritx.github.io/blog)

## Change Log

- v0.0.9-2 (05/24)
  1. fix empty resolved href by `.`
  1. optional `disqus()` and `comments()`
  1. better access for `config()` and `start()`

- v0.0.9-1 (05/22)
  1. remove space caused by `\n` in `<p>`
  1. add path resolve against `../` or `./`
  1. not reload on default page not found

- v0.0.8 (05/20)
  1. add optional disqus support
  1. flag data-loaded for local saved page
  1. use percentage for `font-size` instead of px
  1. make sure target is a directory (cli)

- v0.0.7 (05/12)
  1. try font "Microsoft YaHei" for chinese on windows
  1. add image holder for shared links (apps like wechat)

## Note

*Current style is heavily learnt from [hyde](https://github.com/mdo/hyde) and Github*

*Favicon is copied from [Underscore](https://github.com/jashkenas/underscore)*

These may change in the future
