(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{450:function(t,n,e){"use strict";e.r(n);var a=e(70),i=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ext仿vue-mixin效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ext仿vue-mixin效果"}},[t._v("#")]),t._v(" ext仿vue mixin效果")]),t._v(" "),e("p",[t._v("最近在做ext项目时，发现给页面加同一功能时总是需要复制粘贴同一份代码，ext自带的只有继承，用继承来实现挺麻烦的，所以想到了用vue中的mixin来实现需求。")]),t._v(" "),e("h2",{attrs:{id:"实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),e("p",[t._v("参考了页面结构后，总结出几种类型：")]),t._v(" "),e("ol",[e("li",[t._v("生命周期（函数形式）")]),t._v(" "),e("li",[t._v("actions（对象形式，需递归合并）")]),t._v(" "),e("li",[t._v("其他（直接合并）")])]),t._v(" "),e("p",[t._v("那么来动手实现吧")]),t._v(" "),e("p",[t._v("源代码如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/**\n * 仿Vue mixin 做混入操作\n * 有冲突的以main为主\n * @param main\n * @param second\n */\nSF.mixin = function (main, second) {\n\tfor (var key in second) {\n\t\tif (second.hasOwnProperty(key)) {\n\t\t\tif (key === 'onInit' || key === 'initMgr') {\n\t\t\t\t// merge function\n\t\t\t\tif (main.hasOwnProperty(key)) {\n\t\t\t\t\t// 为了兼容单独mgr的写法，有才去合并\n\t\t\t\t\tmain[key] = mergeFunction(main[key], second[key]);\n\t\t\t\t}\n\t\t\t} else if (key === 'actions') {\n\t\t\t\t// merge object\n\t\t\t\tSF.mixin(main[key], second[key]);\n\t\t\t} else {\n\t\t\t\t// cover\n\t\t\t\tif (!main.hasOwnProperty(key)) {\n\t\t\t\t\tmain[key] = second[key];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n};\n/**\n * 合并两个函数，不做替换，依次执行\n * @param mainFunction\n * @param secondFunction\n * @returns {function(...[*]=)}\n */\nvar mergeFunction = function (mainFunction, secondFunction) {\n\treturn function () {\n\t\tmainFunction.call(this);\n\t\tsecondFunction.call(this);\n\t};\n};\n")])])]),e("p",[t._v("因为所涉及的页面比较少，所以实现上也是很简单。")]),t._v(" "),e("p",[t._v("函数形式的就返回个新函数，其中调用需合并的函数，注意需要改变this指向。")]),t._v(" "),e("p",[t._v("actions就需要将两个对象合并在一起，这里直接递归调用，再走普通形式即可。")]),t._v(" "),e("p",[t._v("普通数据的话，如果主合并对象存在该属性，则以主的为准，不存在时再将被复制对象复制给主对象。")]),t._v(" "),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),e("p",[t._v("下面来看下怎么用吧")]),t._v(" "),e("p",[t._v("将公共部分的代码写在一个对象中，再按常规操作导出")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var moveNumberPlugin = {\n\tonInit: xxx,\n\tactions: xxx\n}\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Ext.ns('B.commonUtils');\nB.commonUtils.moveNumberPlugin = moveNumberPlugin;\n")])])]),e("p",[t._v("在需要的页面调用")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SF.mixin(main, moveNumberPlugin)\n")])])]),e("p",[t._v("即可完成合并")]),t._v(" "),e("p",[t._v("因为是直接对对象操作，所以不需要再赋值给主对象")]),t._v(" "),e("h2",{attrs:{id:"不足"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不足"}},[t._v("#")]),t._v(" 不足")]),t._v(" "),e("p",[t._v("这里需要"),e("code",[t._v("SF.mixin()")]),t._v("一下，跟vue中写法还是不一样的。")]),t._v(" "),e("p",[t._v("原因主要是按照vue的写法的话，需要改动ext的源码，考虑到需要耗费的时间，还是直接用这种方式简单些。")])])}),[],!1,null,null,null);n.default=i.exports}}]);