(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{439:function(e,n,t){"use strict";t.r(n);var r=t(38),s=Object(r.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"搭建前端监控系统"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#搭建前端监控系统"}},[e._v("#")]),e._v(" 搭建前端监控系统")]),e._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),n("p",[e._v("有两种做法")]),e._v(" "),n("ol",[n("li",[e._v("使用开源项目，例如sentry，fundebug等。优点是方便，接入即可，缺点是需要银子。")]),e._v(" "),n("li",[e._v("自己搭建。通过监听、劫持各种事件，处理信息后上报。")])]),e._v(" "),n("p",[e._v("sentry可以自己搭建环境就不用收费，那么先来讲讲sentry在vue中的使用。")]),e._v(" "),n("h2",{attrs:{id:"sentry"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sentry"}},[e._v("#")]),e._v(" sentry")]),e._v(" "),n("p",[e._v("绝大部分内容来自掘金作者：夜_游神")]),e._v(" "),n("p",[e._v("https://juejin.im/post/5eeaebf2f265da02a87f00bf")]),e._v(" "),n("h3",{attrs:{id:"注册账户"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注册账户"}},[e._v("#")]),e._v(" 注册账户")]),e._v(" "),n("ul",[n("li",[e._v("首先注册一个账户（测试玩玩可以用自己的，公司项目还是用公司邮箱吧），注册时组织千万别乱填，这玩意很重要，后面很多地方都需要")]),e._v(" "),n("li",[e._v("注册账户完成后注册项目")])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/18/172c5aa474342c14?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),e._v(" "),n("p",[e._v("项目名称也不能乱写后面也有用的，选择自己的语言（vue居然还要搜索，我大VUE为何沦落至此？）")]),e._v(" "),n("p",[e._v("注册完项目后你就做好了前置准备了")]),e._v(" "),n("h3",{attrs:{id:"引入项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引入项目"}},[e._v("#")]),e._v(" 引入项目")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/18/172c5b0953e90bf3?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/18/172c5b0020df4ccf?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cnpm install @sentry/browser\n\ncnpm install @sentry/integrations\n\n//在main.js中引入\nimport Vue from 'vue'import * as Sentry from '@sentry/browser';\nimport { Vue as VueIntegration } from '@sentry/integrations';\n\nSentry.init({\n    dsn: 'https://32ad19d9b80448f593f1df2833256d23@o406425.ingest.sentry.io/5273959',\n    integrations: [new VueIntegration({Vue, attachProps: true})],\n })\n")])])]),n("p",[e._v("这时简单制造个报错，即可在控制台看到sentry的接口上报")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/18/172c5b0f3cd53f94?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/18/172c5b10c0582f02?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),e._v(" "),n("p",[e._v("高兴之余仔细一看，这特瞄的都报的啥错？完全看不懂啊？因为正式环境的代码都是进行了丑化，没有.map文件就是报错了你也不知道具体位置。这知道和没知道简直没有区别啊")]),e._v(" "),n("p",[e._v("这时候我们就要进入第二步，将.map文件上传到服务器")]),e._v(" "),n("h3",{attrs:{id:"上传sourcemap"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#上传sourcemap"}},[e._v("#")]),e._v(" 上传sourceMap")]),e._v(" "),n("p",[e._v("一：")]),e._v(" "),n("p",[e._v("因为公司项目还是vue-cli2，这里就是自己研究的")]),e._v(" "),n("p",[e._v("打开package.json，看build命令，调的是build/build.js")]),e._v(" "),n("p",[e._v("进到build.js中看到配置是从config/index,js及webpack.prod.conf中取得")]),e._v(" "),n("p",[e._v("进config/index,js，发现productionSourceMap，置true即可")]),e._v(" "),n("p",[e._v("来到webpack.prod.conf中，因之前换成了ParallelUglifyPlugin插件进行打包，在其配置中开启sourcemap")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("new ParallelUglifyPlugin({\n  cacheDir: '.cache/',   // 设置缓存路径，不改动的调用缓存，第二次及后面build时提速\n  uglifyJS:{\n    output: {\n      // 最紧凑的输出\n      beautify: false,\n      // 删除所有的注释\n      comments: false,\n    },\n    // 在UglifyJs删除没有用到的代码时不输出警告\n    warnings: false,\n    compress: {\n      // 删除所有的 `console` 语句，可以兼容ie浏览器\n      // drop_console: true,\n      // 内嵌定义了但是只用到一次的变量\n      collapse_vars: true,\n      // 提取出出现多次但是没有定义成变量去引用的静态值\n      reduce_vars: true,\n    }\n  },\n  sourceMap: true\n}),\n")])])]),n("p",[e._v("往下看，还有webpackConfig得改")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var webpackConfig = merge(baseWebpackConfig, {\n  module: {\n    rules: utils.styleLoaders({\n      sourceMap: true,\n      extract: true\n    })\n  },\n  devtool: config.build.productionSourceMap ? '#source-map' : false,\n  output: {\n    path: config.build.assetsRoot,\n    filename: utils.assetsPath(`js/[name].[chunkhash].js`),\n    chunkFilename: utils.assetsPath(`js/[id].[chunkhash].js`)\n  },\n  plugins: plugins\n})\n")])])]),n("p",[e._v("此处devtool不开启貌似就打包不了map，开启了浏览器又报找不到map文件的warning（map没上传的服务器），应该可以通过限制ip访问解决map泄露问题。")]),e._v(" "),n("p",[e._v("好，npm run build看看是否有map文件生成了。")]),e._v(" "),n("p",[e._v("二：")]),e._v(" "),n("p",[e._v("将打包的文件自动上传的sentry服务器，这时候我们需要一个webpack插件@sentry/webpack-plugin 首先就是安装插件")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cnpm i @sentry/webpack-plugin --save-dev\n")])])]),n("p",[e._v("然后在根节点处创建文件.sentryclirc（标准配置文件的命名方式）")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[auth]\ntoken=token          // 无需引号\n\n[defaults]\nurl = https://sentry.io\norg = 前面提到的组织名\nproject = 前面提到的项目名\n")])])]),n("p",[e._v("token获取方式")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/18/172c5b1733b192b7?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),e._v(" "),n("p",[e._v("如果没有token就注册一个")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/18/172c5b22ab6e0c00?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),e._v(" "),n("p",[e._v("在config文件夹中新建一个"),n("code",[e._v("sentry.env.js")]),e._v("，带上RELEASE_VERSION，用来标记上传的版本号")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('const release = "test@1.0.0";\nprocess.env.RELEASE_VERSION = release;\nmodule.exports = {\n  NODE_ENV: \'"sentry"\',\n  RELEASE_VERSION: `"${release}"`\n}\n\n')])])]),n("p",[e._v("注意写法，试了"),n("code",[e._v("'\"test@1.0.0\"'")]),e._v("不行，不知道为啥")]),e._v(" "),n("p",[e._v("换成上面的即可")]),e._v(" "),n("p",[e._v("然后在webpack.prod.conf中引入插件")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const SentryCliPlugin = require('@sentry/webpack-plugin')\n\nconfigureWebpack:{\n    plugins:[\n        new SentryCliPlugin({\n            include: \"./dist/\", // 作用的文件夹，如果只想js报错就./dist/js\n            release: process.env.RELEASE_VERSION, // 一致的版本号\n            configFile: \"sentry.properties\", // 不用改\n            ignore: ['node_modules', 'webpack.config.js'],\n            urlPrefix: \"~/\",//这里指的你项目需要观测的文件如果你的项目有publicPath这里加上就对了\n         })\n    ]\n}\n")])])]),n("p",[e._v("在插件初始化的地方也要加上版本号 所以main.js也要改成")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Sentry.init({\n  dsn: 'XXX',\n  integrations: [new VueIntegration({Vue, attachProps: true})],\n  release: process.env.RELEASE_VERSION\n});\n")])])]),n("p",[e._v("这时打包，需要上传，时间比较久")]),e._v(" "),n("p",[e._v("成功后去sentry上看看")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/18/172c5b34ea92ba96?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),e._v(" "),n("p",[e._v("这里我们看到这就是我们之前定义的项目名称，点击项目名称")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/18/172c5b37ee0ae520?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),e._v(" "),n("p",[e._v("这时候我们部署上去（这里测试可以在本地跑个服务，做个简单的报错比如abdc(),就会报abcd不是方法），报个错看看")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/18/172c5b3b55d5eca3?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/18/172c5b3c7700821f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),e._v(" "),n("p",[e._v("可以看到报错的源代码了，真香~")]),e._v(" "),n("p",[e._v("上传了sourseMap后还存在一些问题，比如开发调试的时候，报错也会被收集，那么多错，我看的岂不是头都大了，同时开发时报错不会再显示，就会为开发造成困扰，这次我们着重解决这些问题。")]),e._v(" "),n("h3",{attrs:{id:"正式环境与测试环境区分"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#正式环境与测试环境区分"}},[e._v("#")]),e._v(" 正式环境与测试环境区分")]),e._v(" "),n("p",[e._v("先在package.json加条新命令")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('"build--sentry": "cross-env NODE_ENV=sentry node -max_old_space_size=4096 build/build.js",\n')])])]),n("p"),e._v(" "),n("p",[e._v("在main.js中sentry初始化时区分环境，如果不是正式环境就不在初始化就好;")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("process.env.NODE_ENV === 'sentry' && Sentry.init({\n  dsn: 'https://787297c8c01b45d2a6325edcc3c88275@o413596.ingest.sentry.io/5300418',\n  integrations: [new VueIntegration({Vue, attachProps: true})],\n  release: process.env.RELEASE_VERSION,\n  logErrors: false // 设置为true,错误不但会发给平台，也会在页面正常显示，方便调试（文档有）\n})\n")])])]),n("p",[e._v("同时在打包的时候，比如在测试环境，我不需要sourseMap，也不需要把代码上传到服务器（免得服务器上代码太乱），所以在webpack上也要最对应的修改：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("if(process.env.NODE_ENV === 'sentry') {\n  const SentryCliPlugin = require('@sentry/webpack-plugin')\n  plugins.push(\n    new SentryCliPlugin({\n      include: './dist/', // 作用的文件夹，如果只想js报错就./dist/js\n      release: process.env.RELEASE_VERSION, // 一致的版本号\n      configFile: 'sentry.properties', // 不用改\n      ignore: ['node_modules', 'webpack.config.js'],\n      urlPrefix: '~/share/green/',// 去掉根目录的文件路径，不写找不到map文件\n    })\n  )\n}\n")])])]),n("p",[e._v("其中plugins为webpackConfig中的plugins，提成数组，不然没法动态加")]),e._v(" "),n("p",[e._v("同时将上文中开启sourcemap的地方都改为process.env.NODE_ENV === 'sentry'")]),e._v(" "),n("p",[e._v("每次打包后还有个问题，就是map文件不需要上传到服务器，需要删除，手动又太麻烦，有webpack的插件可以只打包js，剔除map，但是还要自己解压一边，很麻烦，于是写了个命令行，直接删除")]),e._v(" "),n("p",[e._v("新建记事本，写上下面代码后，后缀改为cmd即可")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("del /f /s /q .\\dist\\*.map\n")])])]),n("p",[e._v("至此已经可以在线上使用了")]),e._v(" "),n("h3",{attrs:{id:"搭建自己的sentry服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#搭建自己的sentry服务器"}},[e._v("#")]),e._v(" 搭建自己的sentry服务器")]),e._v(" "),n("p",[e._v("待续")]),e._v(" "),n("h2",{attrs:{id:"搭建自己的前端监控"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#搭建自己的前端监控"}},[e._v("#")]),e._v(" 搭建自己的前端监控")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export default function errorHandler (Vue) {\n  const error = (e) => {\n    console.log(22222222, e, navigator.userAgent)\n  }\n  window.onerror = (msg, url, lineNo, columnNo, e) => {\n    if (msg === 'Script error.' || !url || e.type === '__skynet_wrapper__') return\n    error(e)\n  }\n  window.addEventListener('unhandledrejection', (e) => {\n    if (isObject(e.reason)) {\n      error(e.reason)\n    } else {\n      error(e.reason)\n    }\n  })\n  // const originAddEventListener = EventTarget.prototype.addEventListener\n  // EventTarget.prototype.addEventListener = (type, listener, options) => {\n  //   const wrappedListener = (...args) => {\n  //     try {\n  //       return listener.apply(this, args)\n  //     } catch (err) {\n  //       throw err\n  //     }\n  //   }\n  //   return originAddEventListener.call(this, type, wrappedListener, options)\n  // }\n  let vuePlugin = function (_Vue) {\n    if (!_Vue || !_Vue.config) {\n      return\n    }\n    const _oldOnError = _Vue.config.errorHandler\n    _Vue.config.errorHandler = function (errMsg, vm, info) {\n      error(errMsg)\n      if (typeof console !== 'undefined' && typeof console.error === 'function') {\n        console.error(errMsg)\n      }\n      if (typeof _oldOnError === 'function') {\n        _oldOnError.call(this, errMsg, vm, info)\n      }\n    }\n  }\n  vuePlugin(Vue)\n  const captureBreadcrumb = function (obj) {\n    console.log('obj', obj)\n  }\n  const _breadcrumbEventHandler = (evtName) => {\n    let _lastCapturedEvent = ''\n    return function (evt) {\n      if (_lastCapturedEvent === evt) {\n        return\n      }\n      _lastCapturedEvent = evt\n      let target\n      try {\n        target = htmlTreeAsString(evt.target)\n      } catch (e) {\n        target = '<unknown>'\n      }\n      captureBreadcrumb({\n        category: `ui.${evtName}`,\n        message: target\n      })\n    }\n  }\n  function htmlTreeAsString (target) {\n    console.log('target', target)\n    return target.outerHTML\n  }\n  window.addEventListener('click', _breadcrumbEventHandler('click', false))\n  // setTimeout(() => {\n  //   const p = new Promise((resolve, reject) => reject('出错了'))\n  //   p.then(null)\n  // }, 1000)\n\n  const nativeAjaxSend = XMLHttpRequest.prototype.send // 首先将原生的方法保存。\n  const nativeAjaxOpen = XMLHttpRequest.prototype.open\n\n  XMLHttpRequest.prototype.open = function (mothod, url, ...args) { // 劫持open方法，是为了拿到请求的url\n    const xhrInstance = this\n    xhrInstance._url = url\n    nativeAjaxOpen.apply(this, [mothod, url].concat(args))\n  }\n\n  XMLHttpRequest.prototype.send = function (...args) { // 对于ajax请求的监控，主要是在send方法里处理。\n    const oldCb = this.onreadystatechange\n    // const oldErrorCb = this.onerror\n    const xhrInstance = this\n\n    xhrInstance.addEventListener('error', function (e) { // 这里捕获到的error是一个ProgressEvent。e.target 的值为 XMLHttpRequest的实例。当网络错误(ajax并没有发出去)或者发生跨域的时候，会触发XMLHttpRequest的error, 此时，e.target.status 的值为:0，e.target.statusText 的值为:''\n      const errorObj = {\n        error_msg: 'ajax filed',\n        error_stack: JSON.stringify({\n          status: e.target.status,\n          statusText: e.target.statusText\n        }),\n        error_native: e\n      }\n\n      /* 接下来可以对errorObj进行统一处理 */\n      captureBreadcrumb({\n        type: 'http',\n        category: `xhr`,\n        message: errorObj\n      })\n    })\n\n    xhrInstance.addEventListener('abort', function (e) { // 主动取消ajax的情况需要标注，否则可能会产生误报\n      if (e.type === 'abort') {\n        xhrInstance._isAbort = true\n      }\n    })\n\n    this.onreadystatechange = function (...innerArgs) {\n      if (xhrInstance.readyState === 4) {\n        if (!xhrInstance._isAbort && xhrInstance.status !== 200) { // 请求不成功时，拿到错误信息\n          const errorObj = {\n            error_msg: JSON.stringify({\n              code: xhrInstance.status,\n              msg: xhrInstance.statusText,\n              url: xhrInstance._url\n            }),\n            error_stack: '',\n            error_native: xhrInstance\n          }\n\n          /* 接下来可以对errorObj进行统一处理 */\n          captureBreadcrumb({\n            type: 'http',\n            category: `xhr`,\n            message: errorObj\n          })\n        }\n      }\n      oldCb && oldCb.apply(this, innerArgs)\n    }\n    nativeAjaxSend.apply(this, args)\n  }\n\n  function _captureUrlChange (lastHref, currentHref) {\n    console.log('hrefChange', lastHref, currentHref)\n  }\n  const oldOnPopState = window.onpopstate\n  let lastHref = ''\n  window.onpopstate = function (...args) {\n    let currentHref = location.href\n    _captureUrlChange(lastHref, currentHref)\n    lastHref = currentHref\n    if (oldOnPopState) {\n      oldOnPopState.apply(this, args)\n      oldOnPopState.apply(this, args)\n    }\n  }\n  // const consoleList = ['info', 'warn', 'error']\n  // let wrapConsoleMethod = (level, callback) => {\n  //   const nativeConsole = window.console[level]\n  //   window.console[level] = (...args) => {\n  //     callback && callback(level, args)\n  //     nativeConsole.apply(this, args)\n  //   }\n  // }\n  // let consoleMethodCallback = function (level, ...args) {\n  //   captureBreadcrumb({\n  //     message: args,\n  //     level: level,\n  //     category: 'console'\n  //   })\n  // }\n  // consoleList.forEach((level) => {\n  //   wrapConsoleMethod(level, consoleMethodCallback)\n  // })\n}\nfunction isObject (value) {\n  const type = typeof value\n  return value != null && (type === 'object' || type === 'function')\n}\n// function isFunction (value) {\n//   const type = typeof value\n//   return value != null && type === 'function'\n// }\n\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);