(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{368:function(e,t,n){"use strict";n.r(t);var a=n(44),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"图片预览组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图片预览组件"}},[e._v("#")]),e._v(" 图片预览组件")]),e._v(" "),n("h2",{attrs:{id:"介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),n("p",[e._v("项目里有预览图片的需求，但是以前的不支持放大缩小，百度找到一款")]),e._v(" "),n("p",[n("strong",[e._v("v-viewer")])]),e._v(" "),n("p",[e._v("附上GitHub链接")]),e._v(" "),n("p",[e._v("https://github.com/fengyuanchen/viewerjs")]),e._v(" "),n("h2",{attrs:{id:"使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),n("p",[e._v("安装")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm install viewerjs\n")])])]),n("p",[e._v("全局注册")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import Viewer from 'v-viewer'\nimport 'viewerjs/dist/viewer.css'\n\nVue.use(Viewer, {\n  defaultOptions: {\n    zIndex: 99\n  }\n})\n")])])]),n("p",[e._v("在需要的预览的图片外包一层viewer组件，点击图片时即可触发预览（不用自己写点击事件）")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<viewer :images="images">\n\t<img v-for="(src, index) in images" :src="src">\n</viewer>\n')])])]),n("h2",{attrs:{id:"封装成全局组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#封装成全局组件"}},[e._v("#")]),e._v(" 封装成全局组件")]),e._v(" "),n("p",[e._v("像前面说的那样使用，及其不方便，于是动了封装的念头，下面贴上源码")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('\x3c!-- 图片预览组件 --\x3e\n\x3c!-- Create by luozheng on 2020/04/03 --\x3e\n<style lang="less" scoped>\n</style>\n\n<template>\n  <div style="display: none">\n    <viewer\n      :options="options"\n      :images="imagePreview.list"\n      @inited="init"\n      ref="viewer"\n    >\n      <img v-for="(src, index) in imagePreview.list" :src="src" :key="src + index">\n    </viewer>\n  </div>\n</template>\n\n<script>\n  import {mapState} from \'vuex\'\n  export default {\n    name: \'LyImagePreview\',\n    data () {\n      return {\n        options: {\n          toolbar: false,\n          initialViewIndex: 0,\n          title: false,\n          navbar: false\n        },\n        $viewer: {}\n      }\n    },\n    props: {\n    },\n    computed: {\n      time () {\n        return this.imagePreview.time\n      },\n      ...mapState([\'imagePreview\'])\n    },\n    watch: {\n      time () {\n        this.show()\n      }\n    },\n    mounted () {\n    },\n    methods: {\n      init (viewer) {\n        this.$viewer = viewer\n      },\n      show () {\n        this.$viewer.index = this.imagePreview.index\n        this.$viewer.show()\n      }\n    }\n  }\n<\/script>\n')])])]),n("ol",[n("li",[n("p",[e._v("先在app.vue中注册成为全局组件")])]),e._v(" "),n("li",[n("p",[e._v("在main.js中添加全局方法")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Vue.prototype.showImagePreview = opt => {                       // 调用图片预览\n  store.commit('setImagePreview', {\n    time: +new Date(),\n    list: opt.list,\n    index: opt.index\n  })\n}\n")])])]),n("p",[e._v("在vuex中添加数据")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("state\nimagePreview: {\n  list: [],\n  index: 0,\n  time: 0\n},\n\nmutations\nsetImagePreview: (state, val) => {\n  state.imagePreview.list = val.list\n  state.imagePreview.index = val.index\n  state.imagePreview.time = val.time\n},\n")])])])]),e._v(" "),n("li",[n("p",[e._v("预览组件通过监听time值变化来显示")]),e._v(" "),n("p",[e._v("这里用时间戳来控制也是逼不得已的事，找了半小时没找到对应的隐藏事件，翻了下源码也没看到，所以出此下策")]),e._v(" "),n("p",[e._v("使用方法")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("this.showImagePreview({\n  list: imageList,\n  index: index\n})\n\nlist为图片数组['src', 'src']\nindex为点击图片在数组中的索引\n\n")])])])])]),e._v(" "),n("h2",{attrs:{id:"后记"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[e._v("#")]),e._v(" 后记")]),e._v(" "),n("p",[e._v("这里要专门说下索引这个事")]),e._v(" "),n("p",[e._v("直接通过this.$viewer.index = this.imagePreview.index即可达到效果")]),e._v(" "),n("p",[e._v("看文档的options有个initialViewIndex属性，但动态改变会有问题")]),e._v(" "),n("p",[e._v("通过computed计算出属性的话要点两下才能触发预览（不知道为啥）")]),e._v(" "),n("p",[e._v("直接修改data中的options的话，预览都出不来了")]),e._v(" "),n("p",[e._v("后来通过打印this.$viewer，发现有个index属性，试了下没想到成功了")]),e._v(" "),n("p",[e._v("ok，就这么多，希望对大家有帮助")])])}),[],!1,null,null,null);t.default=s.exports}}]);