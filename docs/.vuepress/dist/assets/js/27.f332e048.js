(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{383:function(n,t,e){"use strict";e.r(t);var a=e(44),s=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"仿赛博朋克按钮效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#仿赛博朋克按钮效果"}},[n._v("#")]),n._v(" 仿赛博朋克按钮效果")]),n._v(" "),e("h2",{attrs:{id:"原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[n._v("#")]),n._v(" 原理")]),n._v(" "),e("p",[n._v("通过伪元素弄一个一样的，然后搞些文字阴影，再用clip-path的inset切割出部分块，hover的时候用动画切换这些块，再稍微做些移动就可以了。")]),n._v(" "),e("h2",{attrs:{id:"源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[n._v("#")]),n._v(" 源码")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n    <link href="https://fonts.font.im/css?family=Bebas+Neue&display=swap" rel="stylesheet">\n    <style>\n        body {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            min-height: 100vh;\n            background-color: #f8f005;\n        }\n\n        button,\n        button::after {\n            width: 380px;\n            height: 86px;\n            font-size: 36px;\n            font-family: \'Bebas Neue\', cursive;\n            background: linear-gradient(45deg, transparent 5%, #ff013c 5%);\n            border: none;\n            color: white;\n            letter-spacing: 3px;\n            line-height: 88px;\n            box-shadow: 6px 0px 0px #00E6F6;\n            outline: none;\n            position: relative;\n        }\n\n        button::after {\n            --slice-0: inset(50% 50% 50% 50%);\n            --slice-1: inset(80% -6px 0 0);\n            --slice-2: inset(50% -6px 30% 0);\n            --slice-3: inset(10% -6px 85% 0);\n            --slice-4: inset(40% -6px 43% 0);\n            --slice-5: inset(80% -6px 5% 0);\n\n            content: \'AVAILABLE NOW\';\n            display: block;\n            position: absolute;\n            top: 0;\n            left: 0;\n            bottom: 0;\n            background: linear-gradient(45deg, transparent 3%, #00e6f6 3%, #00e6f6 5%, #ff013c 5%);\n            text-shadow: -3px -3px 0 #f8f005, 3px 3px 0 #00e6f6;\n            clip-path: var(--slice-0);\n            transform: translate(-20px, 10px);\n        }\n        button:hover::after {\n            animation: glitch 1s linear infinite;\n            animation-timing-function: steps(2, end);\n        }\n\n        @keyframes glitch {\n            0% {\n                clip-path: var(--slice-1);\n                transform: translate(-20px, -10px);\n            }\n\n            10% {\n                clip-path: var(--slice-3);\n                transform: translate(10px, 10px);\n            }\n\n            20% {\n                clip-path: var(--slice-1);\n                transform: translate(-10px, 10px);\n            }\n\n            30% {\n                clip-path: var(--slice-3);\n                transform: translate(0px, 5px);\n            }\n\n            40% {\n                clip-path: var(--slice-2);\n                transform: translate(-5px, 0px);\n            }\n\n            50% {\n                clip-path: var(--slice-3);\n                transform: translate(5px, 0px);\n            }\n\n            60% {\n                clip-path: var(--slice-4);\n                transform: translate(5px, 10px);\n            }\n\n            70% {\n                clip-path: var(--slice-2);\n                transform: translate(-10px, 10px);\n            }\n\n            80% {\n                clip-path: var(--slice-5);\n                transform: translate(20px, -10px);\n            }\n\n            90% {\n                clip-path: var(--slice-1);\n                transform: translate(-10px, 0px);\n            }\n\n            100% {\n                clip-path: var(--slice-1);\n                transform: translate(0);\n            }\n    </style>\n</head>\n<body>\n    <button>AVAILABLE NOW</button>\n</body>\n</html>\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);