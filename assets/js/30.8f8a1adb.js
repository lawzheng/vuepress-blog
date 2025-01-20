(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{436:function(t,e,a){"use strict";a.r(e);var n=a(38),s=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"记一次vue路由改造"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#记一次vue路由改造"}},[t._v("#")]),t._v(" 记一次vue路由改造")]),t._v(" "),e("h2",{attrs:{id:"原本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原本"}},[t._v("#")]),t._v(" 原本")]),t._v(" "),e("p",[t._v("看看之前的路由")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/04/05/hJLaFmnzNds21gu.png",alt:"image.png"}})]),t._v(" "),e("p",[t._v("所有页面的路由全都注册在list中，数了下大概有800个页面了，太过冗余，下面开始动手改造吧")]),t._v(" "),e("h2",{attrs:{id:"改造"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#改造"}},[t._v("#")]),t._v(" 改造")]),t._v(" "),e("p",[t._v("建立modules文件夹")]),t._v(" "),e("p",[t._v("新建index.js，自动将目录下的所有文件引入")]),t._v(" "),e("p",[t._v("利用webpack的功能读取出所有文件")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 自动化处理文件：自动引入路由的核心文件\n */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" files "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" require"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("context")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.js$")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" configRouters "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * inject routers\n */")]),t._v("\nfiles"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./index.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  configRouters "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" configRouters"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("files")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读取出文件中的default模块")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" configRouters\n\n")])])]),e("p",[t._v("下面举个路由例子")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/**\n * 球场路由\n */\nexport default [\n  {\n    pathname: 'BatchChangeCourtStatus',\n    component: () => import('@/pages/court/BatchChangeCourtStatus')    // 球场批量订场\n  }, {\n    pathname: 'CourtSquare',\n    title: '球场列表',\n    component: () => import('@/components/base/CourtSquare')    // 球场广场列表\n  }\n]\n\n")])])]),e("p",[t._v("导出个default数组，跟index中对应起来，不然读不到")]),t._v(" "),e("p",[t._v("再在总的路由index中引入modules中的index.js")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import RouterModule from './modules'\n\n通过结构到路由列表中\n...RouterModule\n")])])]),e("p",[t._v("至此，路由分层已做好了")]),t._v(" "),e("h2",{attrs:{id:"拓展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拓展"}},[t._v("#")]),t._v(" 拓展")]),t._v(" "),e("p",[t._v("之前的路由只有个keepalive功能，下面来进行拓展一下")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const routerList = list.map(item => {\n  return {\n    path: '/' + item.pathname,\n    name: item.pathname,\n    meta: {\n      keepAlive: item.keepAlive || false,\n      title: item.title,\n      hideTopBar: item.hideTopBar,\n      requireLogin: item.requireLogin\n    },\n    component: item.component,\n    children: item.children\n  }\n})\n")])])]),e("p",[t._v("增加页面标题、隐藏项目头部引导、权限判断、隐藏微信分享功能")]),t._v(" "),e("p",[t._v("这里就要用到路由钩子了")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("router.beforeEach((to, from, next) => {\n  hideWxShare()\n  // 路由发生变化修改页面title\n  if (to.meta.title) {\n    document.title = to.meta.title\n  }\n  // 设置头部\n  store.commit('setTopBar', !to.meta.hideTopBar)\n  // 检查登录\n  const haveUid = checkUid()\n  if (to.meta.requireLogin) {\n    if (haveUid) {\n      next()\n    } else {\n      next({\n        path: '/Login',\n        query: { redirect: to.fullPath }\n      })\n      return\n    }\n  } else {\n    next()\n  }\n})\n")])])]),e("h3",{attrs:{id:"隐藏微信分享功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#隐藏微信分享功能"}},[t._v("#")]),t._v(" 隐藏微信分享功能")]),t._v(" "),e("p",[t._v("贴上代码")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/**\n * 页面未加载完成时隐藏微信分享\n */\nconst hideWxShare = () => {\n  if (_this.isWx) {\n    let hrefString = location.href\n    let data = {\n      method: 'common_common_getSignPackage',\n      url: hrefString\n    }\n    const Wx = window.jWeixin\n    _this.$axios.post('baseApiEntry', data).then(res => {\n      Wx.config({\n        // debug: true,\n        appId: res.appId,\n        nonceStr: res.nonceStr,\n        timestamp: res.timestamp,\n        signature: res.signature,\n        jsApiList: ['hideMenuItems']\n      })\n      Wx.ready(() => {\n        Wx.hideMenuItems({\n          menuList: [\n            'menuItem:share:appMessage',\n            'menuItem:share:timeline',\n            'menuItem:share:qq',\n            'menuItem:share:weiboApp',\n            'menuItem:share:favorite',\n            'menuItem:share:facebook',\n            'menuItem:share:QZone'\n          ]\n        })\n      })\n    })\n  }\n}\n")])])]),e("p",[t._v("思路就是每次进页面都跟够短请求获得appid等数据，然后在微信js桥ready情况下隐藏分享按钮")]),t._v(" "),e("p",[t._v("在需要的页面配置分享，同时打开分享按钮即可")]),t._v(" "),e("h3",{attrs:{id:"title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" title")]),t._v(" "),e("p",[t._v("页面title及隐藏头部链接简单，判断有没值，有值改变即可")]),t._v(" "),e("h3",{attrs:{id:"登录判断"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#登录判断"}},[t._v("#")]),t._v(" 登录判断")]),t._v(" "),e("p",[t._v("如果有uid则是登录了，直接next()")]),t._v(" "),e("p",[t._v("没有就跳登录页面，在登录页面监听登录事件，登录成功则重定向到传入的to.fullPath页面")]),t._v(" "),e("h3",{attrs:{id:"一个小坑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个小坑"}},[t._v("#")]),t._v(" 一个小坑")]),t._v(" "),e("p",[t._v("这里项目有一个坑，之前路由跳转是自己封装好的，在浏览器环境用的是location.href")]),t._v(" "),e("p",[t._v("导致路由守卫受到影响，会触发两次页面跳转，改成vue路由跳转方式后就好了")])])}),[],!1,null,null,null);e.default=s.exports}}]);