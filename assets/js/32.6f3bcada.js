(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{438:function(s,t,a){"use strict";a.r(t);var e=a(38),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vue首屏优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue首屏优化"}},[s._v("#")]),s._v(" vue首屏优化")]),s._v(" "),t("h2",{attrs:{id:"看打包结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#看打包结果"}},[s._v("#")]),s._v(" 看打包结果")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm run build --report\n")])])]),t("p",[s._v("可在图形化界面分析哪些包过大")]),s._v(" "),t("h2",{attrs:{id:"优化方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化方法"}},[s._v("#")]),s._v(" 优化方法")]),s._v(" "),t("p",[s._v("1.webpack.base.conf.js")]),s._v(" "),t("p",[s._v("将不常用的包从vendor.js中抽离")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("externals: {\n  // 不打包进vendor，都用cdn加载  2020/05/05 lz\n  'vue': 'Vue',\n  'vue-router': 'VueRouter',\n  'vuex': 'Vuex',\n  'axios': 'axios',\n  'ali-oss': 'Oss'\n}\n\nkey值为import name from 'package' 中的package\nvalue值为该js中导出到window对象上的名字\n\n")])])]),t("p",[s._v("注意：")]),s._v(" "),t("p",[s._v("import xxx from 'xxx'使用方法不用变")]),s._v(" "),t("p",[s._v("2.index.html")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<script src="xxx/vue.min.2.6.10.js"><\/script>\n<script src="xxx/vue-router.2.3.1.js"><\/script>\n<script src="xxx/vuex.min.3.1.1.js"><\/script>\n<script src="xxx/axios.0.16.1.js"><\/script>\n<script src="xxx/aliyun-oss-sdk-6.1.1.min.js"><\/script>\n')])])]),t("p",[s._v("在自家cdn中引入，gzip压缩，小很多")])])}),[],!1,null,null,null);t.default=r.exports}}]);