(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{446:function(e,a,t){"use strict";t.r(a);var s=t(38),r=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"gulp-本地调试增加代理及热更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gulp-本地调试增加代理及热更新"}},[e._v("#")]),e._v(" gulp 本地调试增加代理及热更新")]),e._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[e._v("#")]),e._v(" 背景")]),e._v(" "),a("p",[e._v("胖模式项目技术栈为backbone.js+gulp，之前调试都是用nginx将接口代理到环境上，每次改完代码得手动刷新，而且会回到首页，得手动切换到正在调试的tab页才行，过程繁琐。")]),e._v(" "),a("p",[e._v("于是用gulp搭了个本地服务器，有代理接口、热更新、刷新留在本页面三个功能。")]),e._v(" "),a("h2",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[e._v("#")]),e._v(" 实现")]),e._v(" "),a("h3",{attrs:{id:"热更新及接口代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#热更新及接口代理"}},[e._v("#")]),e._v(" 热更新及接口代理")]),e._v(" "),a("p",[e._v("这里使用"),a("code",[e._v("gulp-webserver")]),e._v("来实现热更新")]),e._v(" "),a("p",[e._v("使用"),a("code",[e._v("http-proxy-middleware")]),e._v("中间件来代理接口")]),e._v(" "),a("p",[e._v("安装：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm i gulp-webserver http-proxy-middleware -D\n")])])]),a("p",[e._v("使用：")]),e._v(" "),a("p",[e._v("专门写个"),a("code",[e._v("dev.config.js")]),e._v("来记录端口号和接口转发网址")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/**\n * 设置本地服务配置\n * @type {{port: number, proxyTarget: string}}\n * proxyTarget： 需代理到的路径\n * port： 本地启动的端口\n */\nmodule.exports = {\n    proxyTarget: 'https://200.200.95.89',\n    port: 8889\n}\n\n")])])]),a("p",[e._v("dev环境的gulp设置"),a("code",[e._v("gulp-dev.js")])]),e._v(" "),a("p",[e._v("这里使用根目录作为监听范围，使得目录内的所有文件更改都会触发刷新")]),e._v(" "),a("p",[e._v("代理那里必须加上"),a("code",[e._v("secure: false")]),e._v("，不然代理会报错500")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const webserver = require('gulp-webserver');\nconst proxy = require('http-proxy-middleware')\n\nconst devConfig = require('./dev.config')\n\ngulp.task('webserver', function () {\n    gulp.src('./')\n        .pipe(webserver({\n            host: 'localhost',\n            port: devConfig.port,\n            livereload: true,\n            open: './index.html',\n            directoryListing: {\n                enable: true,\n                path: './'\n            },\n            middleware: [\n                proxy.createProxyMiddleware('/cgi-bin/', { //创建反向代理\n                    target: devConfig.proxyTarget,\n                    changeOrigin: true,\n                    secure: false\n                })\n            ]\n        }))\n});\n")])])]),a("p",[e._v("再在"),a("code",[e._v("package.json")]),e._v("中写个命令")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"dev": "node node_modules/gulp/bin/gulp.js dev --gulpfile gulp-dev.js"\n')])])]),a("p",[e._v("好了，"),a("code",[e._v("npm run dev")]),e._v("即可跑起来了")]),e._v(" "),a("h3",{attrs:{id:"刷新保留本页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刷新保留本页面"}},[e._v("#")]),e._v(" 刷新保留本页面")]),e._v(" "),a("p",[e._v("跑起来后发现，一更改触发刷新会回到首页去了，这很影响效率，下面就来解决它。")]),e._v(" "),a("p",[e._v("找到构建菜单的js："),a("code",[e._v("build-menu.js")])]),e._v(" "),a("p",[e._v("记录一个常量，用来做本地存储的key")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 用于本地存储点击的页面名的key\nvar DEBUG_URL_KEY = 'debugUrl';\n")])])]),a("p",[e._v("构建菜单的时候")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 判断是本地环境，默认为是debug环境 挂在window下，方便别的地方要是要用也能获取到\nAPF.isDebug = location.hostname === 'localhost'\n")])])]),a("p",[e._v("在菜单的点击事件中添加页面名缓存记录")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("if (APF.isDebug) {\n\tlocalStorage.setItem(DEBUG_URL_KEY, menuItem.trigger)\n}\n")])])]),a("p",[e._v("构建完菜单")]),e._v(" "),a("p",[e._v("从localStorage里取上一次缓存的页面名，并打开")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("if (APF.isDebug) {\n\tAPF.trigger(localStorage.getItem(DEBUG_URL_KEY))\n}\n")])])]),a("p",[e._v("这样在代码改变，触发热更新后，会从缓存中取出上一次的页面名并打开，从而实现了类似webpack的HRM热模块更新效果。")]),e._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("p",[e._v("通过上面的一系列手段，大大的提升了胖模式下的开发速度，让开发人员专心于开发，减少对搭建环境的关注。")])])}),[],!1,null,null,null);a.default=r.exports}}]);