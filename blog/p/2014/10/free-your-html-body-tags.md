# Free your html/body tags

*2014-10-23*

Today my leader asked me why the topbar on mobile [Qiushibaike](https://qiushibaike.com) covered page contents, while it should not.

<img width="300" src="QQ图片20141022210533.jpg">
&nbsp;&nbsp;
<img width="300" src="QQ图片20141022210537.jpg">

I quickly looked into the problem, with the git log showed no big deals, I suddenly found it was a line of css that had been unexpectedly overwriten.

<img width="300" src="QQ图片20141022214120.jpg">

Finally, leader pointed out it was an external script, probably advertisement stuff, that produced such nonsense css code which overwrites. A quick solution though, is to add an `!important` flag.

With complaint of those evil external scripts, we had also noticed our abuse on `<body>` tag. These tags should not be **over-depended** any more, while they are usually of easy accesses.

So, free your html and body tags! Make sure you have a `.container` stuff or someting.
