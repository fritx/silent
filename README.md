# silent 2.0

<a href="https://fritx.github.io/silent/"><img width="76" height="20" src="https://fritx.github.io/silent/p/projects/website-badge.svg"></a>&nbsp;&nbsp;<a href="https://github.com/fritx/silent"><img src="https://fritx.github.io/silent/p/projects/github-badge.svg" width="85" height="20"></a>&nbsp;&nbsp;<a href="https://gitter.im/fritx"><img src="https://fritx.github.io/silent/p/projects/gitter-badge.svg" width="99" height="20"></a>&nbsp;&nbsp;<a href="https://www.npmjs.com/package/silent"><img height="20" src="https://img.shields.io/npm/dm/silent.svg"></a>

<img src="https://fritx.github.io/silent/p/projects/silent/pic/si1ent.png">

> Be a silent, static blog

for silent 1.0, check [this](https://github.com/fritx/silent/tree/1x) out

## 🎉🎉 silent's 10th Anniversary

SilentPress: a CMS alternative to VitePress and WordPress. 200+LOC written in Go.<br>
https://github.com/fritx/silentpress

-- for the 10th-anniversary of *silent*. silent and its simplicity was a once a culture, a spirit, and a memory of ____<br>
#silent #10YearsAnniversary #simplicity #opensource

## Features

### Old-school & Clean

- [x] no MVVM frameworks (no vue, react, etc)
- [x] no CCS frameworks
- [ ] no jquery

### Static & Portable

- [x] no node_modules (no dependencies, etc)
- [x] no build systems (no gulp, webpack, etc)
- [x] no extra build commands (no npm-run-build or -generate)
- [x] no CI/CD required (github-actions can be optional)
- [x] source code is all it needs to run
- [x] npm-create tooling

### Writing, Focus and Visualization

- [x] markdown
- [x] [mermaid](https://mermaid-js.github.io/mermaid/) diagrams

### Extendable & Integration

- [x] analytics: google, baidu, etc
- [x] comment system: [disqus](https://disqus.com) +[cusdis](https://cusdis.com) +[giscus](https://giscus.app), etc
- [ ] backend permission api

### Funny & Fancy & Performance

- [x] prefer history.pushState api
- [x] progress bar on top
- [x] auto favicon (extracted from title)
- [x] favicon dark mode
- [ ] page-level dark mode

<img width="400" src="https://fritx.github.io/silent/p/projects/silent_2.0/WechatIMG533.png">

<img width="500" src="https://fritx.github.io/silent/p/projects/silent_2.0/WX20220927-173925.png">

### Security & Stability

- [x] responsive design
- [x] prefer es5 and guarded with eslint
- [ ] fallback on browser compatibility break
- [ ] IE 6+ support (needs polyfill, etc)

<img width="160" src="https://fritx.github.io/silent/p/2016/08/屏幕快照 2016-08-02 下午6.35.12.png">

<img width="300" src="https://fritx.github.io/silent/p/2016/08/屏幕快照 2016-08-02 下午5.46.40.png">

## Usage

```sh
# create it
npm create silent <dest>
# or
npm i -g silent
silent create <dest>

# e.g.
npm create silent ~/t/my-blog
# >>>
# copying /Users/fritx/.nvm/versions/node/v16.14.0/lib/node_modules/silent/blog
#  => /Users/fritx/t/my-blog
# silent-create completed

# serve it
cd ~/t/my-blog
npx serve . -p 3000
# >>>
# Serving! http://localhost:3000

# deploy to your github pages?
cd ~/t/my-blog
git init
git remote add origin git@github.com:fritx/silent.git
npx gh-pages -d .
# >>>
# Published. https://fritx.github.io/silent/
```

## Browser Compatibility

Status: no IE

- [ ] no IE https://caniuse.com/?search=arr%20includes
- [ ] no IE https://caniuse.com/?search=str%20includes
- [ ] no IE https://caniuse.com/?search=builtin%20object%20assign
- [ ] IE10+ https://caniuse.com/?search=console
- [x] IE10+ https://caniuse.com/?search=pushstate
- [ ] IE9+ https://caniuse.com/?search=date.now
- [ ] IE9+ https://caniuse.com/?search=object.keys
- [ ] IE9+ https://caniuse.com/?search=arr%20foreach
- [ ] IE9+ https://caniuse.com/?search=querySelector
- [ ] IE9+ https://caniuse.com/?search=css3%20selectors
- [x] IE8+ https://caniuse.com/?search=scrollintoview

mermaid:

- [x] no IE / Safari 15.4+ https://caniuse.com/?search=structuredClone
- [ ] no IE https://caniuse.com/?search=arrow%20function

auto title favicon:

- [x] no IE https://caniuse.com/?search=prefers-color-scheme
- [x] IE10+ https://caniuse.com/?search=matchMedia
- [ ] IE9+ https://caniuse.com/?search=canvas

if using giscus:

- [ ] no IE https://caniuse.com/?search=ResizeObserver
- [ ] IE8+ https://caniuse.com/?search=postmessage
- [ ] IE8+ https://caniuse.com/?search=localstorage

## Silent Fans

> Thank you!

- [ZhanZengyu's Blog](https://zhanzengyu.github.io/blog/)
- [Meizhuo's Blog](https://meizhuo.github.io/blog/)
- [Amen's Blog](https://linzx89757.github.io/blog/)
- [Jayin's Blog](https://v1.jayinton.com/blog/)
- [Derek's Blog](https://derekgame2013.github.io/blog/)
- [Huang's Blog](https://huangruichang.github.io)
- [Jason's Blog](https://jacsonlee.github.io/Blog/)
- [Jayden's Blog](https://iamjayden.github.io)
- [Fritx' Blog](https://blog.fritx.me/)

## More..

> Rather than a framework or library, silent is more like a spirit - a culture. (says Huang)

- [The 10th Anniversary of *silent*...](https://x.com/fz_ux55200/status/1786274684541321639)
- [SilentPress: CMS Alternative to VitePress and WordPress. 200LOC in Go](https://news.ycombinator.com/item?id=40234012)
- [Silent One Year Old](https://fritx.github.io/silent/?2015/05/silent-one-year-old)
- ~~[Silent T-Shirt](http://udz.com/silent)~~

<img width="360" src="https://fritx.github.io/silent/p/projects/silent/pic/tshirt-x360.png">
