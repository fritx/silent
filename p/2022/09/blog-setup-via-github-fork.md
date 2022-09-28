# 🚀 Blog Setup via Github Fork

*2022/09/27*

> We chose [silent](../../projects/silent_2.0/), a static blog template, for example

1. Go to silent homepage: https://github.com/fritx/silent

2. Click `Fork` at the top right corner

  <img width=400 src=WX20220927-134112.png>

3. Rename the repo, a brief name `blog` is recommended

  The repo name is important 'cause it is part of the final **BLOG URL** you're gonna get, like

  ```plain
  https://<username>.github.io/<repo>/
  ```

  e.g., https://h5lium.github.io/blog/

4. Don't forget to turn off the checkbox `Copy the xxx branch only`

  <img width=800 src=WX20220927-134431.png>

5. Click `Create fork` at the bottom

6. (Important) Select both `gh-pages` and `/ (root)` in `Project Settings -> Pages`

  <img src=WX20220927-160316.png>

  ... and **YOU'RE DONE!** 🎉 Try `https://<username>.github.io/<repo>/` in a few seconds.

  e.g., https://h5lium.github.io/blog/

7. (Optional) Switch the default branch to `gh-pages` in `Project Settings -> Branches`

  <img width=600 src=WX20220927-155434.png>

8. Update the `About` section, replace the description and link with your own ones

  ... so that everyone can give it a try! 🌏

  <img width=600 src=WX20220927-222427.png>

## ... but How do I add a post?

1. First of all, you need to understand a bit of **Markdown**, and its syntax

  See examples in https://en.wikipedia.org/wiki/Markdown

1. Head to the `p/` directory, where all the blog contents are listed

  e.g., https://github.com/h5lium/blog/tree/gh-pages/p

  <img width=600 src=WX20220927-164233.png>

2. Create a post by clicking `Add file`, for example, `p/2022/09/my-first-post.md` with some contents:

  ```diff
   <!-- p/2022/09/my-first-post.md -->

  +# 😁 My First Post
  +
  +> Hello World!
  +
  +bla bla bla...
  ```

3. Open one of the index pages, for example, `p/posts.md`, and click the ✏️ (edit button)

  ... and then add a corresponding link and a digest, like: (a relative path is required)

  ```diff
   <!-- p/posts.md -->

   # 🌈 My Posts

  +## [My First Post](2022/09/my-first-post.md)
  +
  +> Hello World!
  
   ## [Blog Setup via Github Fork](2022/09/blog-setup-via-github-fork.md)
   ...
  ```

  <img width=600 src=WX20220927-164651.png>

  ... now a new post gets published! 🚀

**References:**

- [1分钟快速构建你的博客](https://v1.jayinton.com/silentor/?p=docs/getting-start/main.md)
- [silentor, a friendly fork of silent](https://v1.jayinton.com/silentor/)
- https://github.com/Jayin/silentor
- https://github.com/fritx/silent
- [silent 2.0](../../projects/silent_2.0/)
- [silent 1.0-legacy](../../projects/silent/)
- [silent talk](../../2016/08/silent-talk.md)
