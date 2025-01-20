(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{448:function(t,e,a){"use strict";a.r(e);var r=a(38),n=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"谈下网站水印"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#谈下网站水印"}},[t._v("#")]),t._v(" 谈下网站水印")]),t._v(" "),e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),e("p",[t._v("通常网站为了安全，会加上水印，下面来谈谈前端添加水印的方法")]),t._v(" "),e("h2",{attrs:{id:"方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),e("ol",[e("li",[t._v("直接通过div将水印平铺到整个页面，缺点是麻烦，生成了过多的dom")]),t._v(" "),e("li",[t._v("用canvas画出来再导出成base64，通过背景图平铺到整个页面")])]),t._v(" "),e("p",[t._v("其中主要的属性是"),e("code",[t._v("pointer-events: none;")]),t._v("，加了才能让事件透过这一层水印。")]),t._v(" "),e("p",[t._v("公司目前的水印都是可以直接看见的，可以再加一层透明度极低的水印，让人无法肉眼看见，但可以通过ps处理后显示出来。")]),t._v(" "),e("h2",{attrs:{id:"防止去水印"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防止去水印"}},[t._v("#")]),t._v(" 防止去水印")]),t._v(" "),e("p",[t._v("水印加好了，但是在控制台轻易就可以删掉，这得做些防范措施。")]),t._v(" "),e("ol",[e("li",[t._v("可以结合上一篇文章，将控制台先禁止打开。")]),t._v(" "),e("li",[t._v("利用"),e("code",[t._v("MutationObserver")]),t._v("这个api来检测水印dom的变化。")])]),t._v(" "),e("p",[t._v("下面直接贴源码")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var watermakr = null\nfunction createWaterMark () {\n\twatermakr = document.createElement('div');\n\twatermakr.style = 'pointer-events: none;top: 0;left: 0;position: fixed;z-index: 11111;width: 100%;height: 100%;background: url(水印图);\n    document.body.appendChild(watermakr);\n}\ncreateWaterMark()\n// 观察器的配置（需要观察什么变动）\nvar config = { attributes: true, childList: true, subtree: true };\n// 当观察到变动时执行的回调函数\nvar callback = function (mutationsList, observer) {\n    // Use traditional 'for loops' for IE 11\n    for (let mutation of mutationsList) {\n        mutation.removedNodes.forEach(function (item) {\n            if (item === watermakr) {\n                createWaterMark()\n            }\n        })\n        if (mutation.type === 'attributes') {\n            document.body.removeChild(watermakr);\n            break;\n        }\n    }\n};\n// 监听元素\nvar targetNode = document.body;\n// 创建一个观察器实例并传入回调函数\nvar observer = new MutationObserver(callback);\n// 以上述配置开始观察目标节点\nobserver.observe(targetNode, config);\n")])])]),e("p",[t._v("通过"),e("code",[t._v("MutationObserver")]),t._v("监听了水印dom的删除和样式更改事件，一旦变化就删除旧的水印并重新生成水印，达到防删除的目的。")]),t._v(" "),e("h2",{attrs:{id:"更高级的手段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更高级的手段"}},[t._v("#")]),t._v(" 更高级的手段")]),t._v(" "),e("p",[t._v("上述的防去水印还是有办法删除的，比如复制一个body，监听事件就失效了，那么有没更好的办法，答案是有的。")]),t._v(" "),e("p",[t._v("加水印原理是对图片的rgb值稍做修改，在不改变图片显示的情况下藏入水印信息。单纯这样改的话图片水印的抗干扰性是很差的，随便旋转一下可能就会丢失，可以通过"),e("strong",[t._v("傅里叶变换")]),t._v("，更改每个块对应的频域空间最低频率分量隐藏信息，提高抗干扰性，这里涉及的专业知识还是很高的，于是找了开源库CryptoStego。")]),t._v(" "),e("p",[t._v("https://github.com/zeruniverse/CryptoStego")]),t._v(" "),e("p",[t._v("通过该库可以方便的将文字加密进图片中，达到隐藏水印的目的。")]),t._v(" "),e("p",[t._v("通过前端来做的话感觉没什么必要，在加载的资源列表中可以轻易的获取到原图的链接，最好是在后端存储的时候就把水印做了，当然，后端各种语言肯定也有对应的开源库的，实在不行也有提供该服务的服务商可以选择。")])])}),[],!1,null,null,null);e.default=n.exports}}]);