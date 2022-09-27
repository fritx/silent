/**
 * Created by fritx on 5/7/14.
 */

;(function () {

  'use strict'

  var pageExt, pageBase
  var sidebarPage, defaultPage
  var mainPage, mainTitle

  function load(sel, stack, isMain, callback) {
    if (typeof stack === 'string') {
      if (/\/$/.test(stack)) {
        stack = [stack + 'index', stack + 'README', stack.replace(/\/$/, '')]
      } else {
        stack = [stack, stack + '/index']
      }
    }

    var page = stack.shift()
    isMain = isMain || false

    var url = pageBase + page + pageExt
    $.ajax({
      url: url,
      error: function (err) {
        if (stack.length) {
          return load(sel, stack, isMain, callback)
        }
        onNotFound(err)
      },
      success: function (data) {
        render(data, function (err, html) {
          if (err) {
            return console.error('render err', err)
          }
          var $el = $(sel)
          $el.hide().html(html)
          postProcess($el, url)

          $el.show().attr('data-loaded', true)
          if (isMain) onMainRendered()
          if (callback) callback()
        })
      }
    })
  }

  function postProcess($el, url) {
    var dir = url.replace(new RegExp('[^\\/]*$', 'g'), '')

    $el.find('[src]').each(function () {
      var $el = $(this)
      $el.attr('src', function (x, old) {
        if ($el.attr('data-noop') != null) {
          return old
        }
        if (isAbsolute(old)) {
          return old
        }
        return resolve(dir + old)
      })
    })

    $el.find('[href]').each(function () {
      var $el = $(this)
      $el.attr('href', function (x, old) {
        if (isAbsolute(old)) {
          $el.attr('target', '_blank')
          return old
        }
        if (/^\?/.test(old)) {
          // supports in-site ?-search
          return old
        }
        var prefixed = resolve(dir + old)
        var hashRegex = new RegExp('#.*')
        var hash = (function (match) {
          return match && match[0] || ''
        })(old.match(hashRegex))
        var dehashed = prefixed.replace(hashRegex, '')

        var extRegex = new RegExp(slashes(pageExt) + '$')
        if (extRegex.test(dehashed) || /\/$/.test(dehashed)) {
          return (
            '?' +
            dehashed
              .replace(new RegExp('^' + slashes(pageBase)), '')
              .replace(extRegex, '') +
            hash
          )
        }
        if (new RegExp('^\\.\\/').test(old)) {
          // ./ heading for new tag
          $el.attr('target', '_blank')
        }
        return prefixed
      })
    })

    $el.find('p').each(function () {
      var $el = $(this)
      $el.html(function (x, old) {
        return old.replace(/\n+/g, '')
      })
    })

    $el.find('pre code').each(function (i, el) {
      hljs.highlightBlock(el)
    })
  }

  function onMainRendered() {
    mainTitle = $('#main-page').find('h1, h2, h3, h4, h5, h6').first().text().trim()
    var navTitle = autoTitleFavicon(mainTitle)
    document.title = navTitle

    // supports mermaid diagrams
    // https://mermaid-js.github.io/mermaid/#/usage?id=calling-mermaidinit
    mermaid.parseError = function (err, hash) {
      console.error('mermaid.parseError', err, hash)
    }
    mermaid.init()

    comments()
    shares()
  }

  function onNotFound() {
    if ($('#main-page').attr('data-loaded') != null) {
      // onMainRendered()
    } else if (location.search) {
      location.href = '.'
    }
  }

  function slashes(str) {
    return str.replace(/([.?*+^$!:\[\]\\(){}|-])/g, '\\$1')
  }

  function isAbsolute(url) {
    return !url.indexOf('//') || !!~url.indexOf('://')
  }

  function resolve(path) {
    // path = path.replace(/\/+$/, '') // ignore trailing slash
    var segs = path.split('/')
    var buf = []
    for (var i = 0; i < segs.length; i++) {
      var seg = segs[i]
      if (seg === '.') continue
      var last = buf[buf.length - 1]
      if (seg === '..' && last && last !== '..') {
        buf.pop()
        continue
      }
      buf.push(seg)
    }
    return buf.join('/') || '.'
  }

  function htmlEntityEncode(str) {
    var dom = document.createElement('div')
    dom.textContent = str
    return dom.innerHTML
  }

  // How to detect if the OS is in dark mode in browsers?
  // https://stackoverflow.com/questions/50840168/how-to-detect-if-the-os-is-in-dark-mode-in-browsers
  // https://caniuse.com/?search=prefers-color-scheme
  // https://caniuse.com/?search=matchMedia
  var isDarkMode = false
  var darkModeChangeHandlers = []
  if (typeof window.matchMedia === 'function') {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDarkMode = true
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      isDarkMode = !!e.matches
      darkModeChangeHandlers.forEach(function (handler) {
        handler()
      })
    })
  }

  // How to detect emoji using javascript
  // https://stackoverflow.com/questions/18862256/how-to-detect-emoji-using-javascript
  // +modification title-favicon bugfix: recognize emoji `✋🏻`
  var emojiPrefixRegex = /^(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])+/
  var anyPrefixRegex = /^(?:(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])+|.)/

  // Use emoji as favicon in websites
  // https://stackoverflow.com/questions/59431371/use-emoji-as-favicon-in-websites
  var lastFavicon = ''
  function setFavicon(s) {
    try {
      var canvas = document.createElement('canvas')
      canvas.height = 32
      canvas.width = 32
      var ctx = canvas.getContext('2d')
      var isEmoji = emojiPrefixRegex.test(s)
      ctx.font = isEmoji ? '28px serif' : '32px serif'
      ctx.fillStyle = isDarkMode ? 'orange' : '#336699' // for text color
      ctx.textAlign = 'center'
      ctx.fillText(s, 16, 24)
      var link = document.querySelector('link[rel=icon]')
      var hasLinkAlready = !!link
      if (!hasLinkAlready) {
        link = document.createElement('link')
        link.setAttribute('rel', 'icon')
      }
      link.setAttribute('href', canvas.toDataURL())
      if (!hasLinkAlready) {
        var parent = document.querySelector('head') || document.documentElement
        parent.appendChild(link)
      }
      lastFavicon = s
      return true // success flag
    } catch (err) {
      // ignore
      // keep it save in case of browser compatibility issues
      console.error('setFavicon', err)
    }
  }
  darkModeChangeHandlers.push(function () {
    setFavicon(lastFavicon)
  })

  function autoTitleFavicon(mainTitle, emojiOnly) {
    var regex = emojiOnly ? emojiPrefixRegex : anyPrefixRegex
    var navTitle = mainTitle
    var matched = mainTitle.match(regex)
    if (matched) {
      var prefix = matched[0]
      var success = setFavicon(prefix)
      if (success && emojiPrefixRegex.test(mainTitle)) {
        navTitle = mainTitle.replace(regex, '').trim() // replace only if emoji
      }
    }
    return navTitle
  }

  // opt.1 disqus
  // https://disqus.com/admin/install/platforms/universalcode/
  function disqus(shortName, title, id) {
    window.disqus_shortname = shortName
    window.disqus_title = title
    window.disqus_identifier = id
    window.disqus_url = location.href
    $('<div>').attr({ id: 'disqus_thread' }).appendTo('#comment-system')
    $('<script>').attr({
      src: 'https://' + shortName + '.disqus.com/embed.js',
      'data-timestamp': +new Date(),
      async: true
    }).appendTo('head')
  }
  // opt.2 cusdis
  // https://cusdis.com/doc#/advanced/sdk?id=js-sdk
  function cusdis(host, appId, title, id) {
    $('<div>').attr({
      id: 'cusdis_thread',
      'data-host': host,
      'data-app-id': appId,
      'data-page-id': id,
      'data-page-url': location.href,
      'data-page-title': title
    }).appendTo('#comment-system')
    $('<script>').attr({
      src: 'https://cusdis.com/js/cusdis.umd.js',
      async: true
    }).appendTo('head')
  }

  config()
  start()

  function render(data, callback) {
    //// Optional template renderer
    marked(data, callback)
  }

  function comments() {
    //// Optional comment system
    // opt.1 disqus (not recommended in China due to the GFW)
    // var dqsShortName = 'silent-blog'
    // disqus(dqsShortName, mainTitle, mainPage)

    // opt.2 cusdis
    // var cdsHost = 'https://cusdis.com'
    // var cdsAppId = '3ab3a14f-bcb2-4a6f-b984-742a15463f80'
    // cusdis(cdsHost, cdsAppId, mainTitle, mainPage)

    // opt.3 giscus
    // giscus logic should be added directly to html
    // to make it work instead, see index.html
  }

  function shares() {
    //// Optional share system
  }

  function start() {
    var seg = location.search.slice(1).replace(/&.*$/g, '')

    // fucking wechat again
    // like /?graduation-thanks=
    // or /?graduation-thanks=/ (SublimeServer)
    seg = seg.replace(/=[\/\\]*$/, '')

    // fucking wechat pending
    // like /?from=singlemessage&isappinstalled=0
    if (/=/.test(seg)) seg = null
    mainPage = resolve(seg || defaultPage)

    load('#sidebar-page', sidebarPage)
    load('#main-page', mainPage, true)
  }

  function config() {
    var renderer = new marked.Renderer()

    // 实现trello的 超链接效果 自动识别github issues
    var _link = renderer.link
    renderer.link = function (href, title, text) {
      if (text === href) {
        var tx = ''

        var mat = href.match(
          /github\.com\/(.+)\/(.+)\/(issues|pull)\/(\d+)(#(.+))?/
        )
        if (mat) {
          // tx = mat[1] +'/'+ mat[2] +': Issue #'+ mat[4] // trello
          tx = mat[1] + '/' + mat[2] + '#' + mat[4] // github
          if (mat[6]) tx += ' (comment)'
        } else if (
          (mat = href.match(/github\.com\/(.+)\/(.+)\/commit\/([0-9a-f]+)/))
        ) {
          // tx = mat[1] +'/'+ mat[2] +': '+ mat[3].slice(0, 7) // trello
          tx = mat[1] + '/' + mat[2] + '@' + mat[3].slice(0, 7) // github
        } else if (
          (mat = href.match(/github\.com\/(.+)\/(.+)\/blob\/([^/]+)\/(.+)/))
        ) {
          tx = mat[1] + '/' + mat[2] + ' - ' + mat[4]
        } else if ((mat = href.match(/github\.com\/(.+)\/([^/]+)/))) {
          tx = mat[1] + '/' + mat[2]
        }

        if (tx) {
          var $a = $('<a>').text(tx).attr({
            class: 'known-service-link',
            href: href,
            title: title
          })
          var $icon = $('<img>').attr({
            'data-noop': '',
            class: 'known-service-icon',
            src: 'vendor/github.png'
          })
          $a.prepend($icon)
          return $a.prop('outerHTML')
        }
      }

      return _link.call(renderer, href, title, text)
    }

    // supports mermaid diagrams
    // http://mermaid-js.github.io/mermaid/#/usage?id=example-of-a-marked-renderer
    // NOTICE: should handle XSS security?
    var _code = renderer.code
    renderer.code = function (code, language) {
      if (language === 'mermaid') {
        var id = String(Math.random()).slice(2)
        var safeHtml = htmlEntityEncode(code)
        return '<div class="mermaid" id="mermaid-' + id + '">' + safeHtml + '</div>'
      }
      return _code.apply(this, arguments)
    }

    marked.setOptions({
      renderer: renderer,
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    })

    pageExt = '.md'
    pageBase = 'p/'
    // add a trailing slash if it is an index.md of a directory
    sidebarPage = 'sidebar'
    defaultPage = 'projects'
  }
})()
