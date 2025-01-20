(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{441:function(t,a,e){"use strict";e.r(a);var n=e(38),s=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_2020-09-20-面试总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2020-09-20-面试总结"}},[t._v("#")]),t._v(" 2020/09/20 面试总结")]),t._v(" "),a("p",[t._v("在公司呆久了，出去面试见识见识世面")]),t._v(" "),a("p",[t._v("一共面了两家公司，分别讲讲。")]),t._v(" "),a("h2",{attrs:{id:"上午"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上午"}},[t._v("#")]),t._v(" 上午")]),t._v(" "),a("h3",{attrs:{id:"斐波那契"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#斐波那契"}},[t._v("#")]),t._v(" 斐波那契")]),t._v(" "),a("h4",{attrs:{id:"方法一-普通递归"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一-普通递归"}},[t._v("#")]),t._v(" 方法一：普通递归")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fibonacci")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fibonacci")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fibonacci")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1901.197998046875")]),t._v(" ms\n")])])]),a("p",[t._v("缺点：存在重复计算，容易爆栈")]),t._v(" "),a("h4",{attrs:{id:"方法二-改进递归-作为函数参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二-改进递归-作为函数参数"}},[t._v("#")]),t._v(" 方法二：改进递归，作为函数参数")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function fibonacci(n) {\n\tfunction fib(n, v1, v2) {\n\t\tif (n === 1) {\n\t\t\treturn v1\n\t\t} else if (n === 2) {\n\t\t\treturn v2\n\t\t} else {\n\t\t\treturn fib(n - 1, v2, v1 + v2)\n\t\t}\n\t} \n\treturn fib(n, 1, 1)\n}\n\nf: 7.71484375 ms\n")])])]),a("h4",{attrs:{id:"方法三-改进递归-用数组记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法三-改进递归-用数组记录"}},[t._v("#")]),t._v(" 方法三：改进递归，用数组记录")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function fibonacci(n) {\n\tlet memo = [0, 1]\n\tfunction fib(n) {\n\t\tif (memo[n] === undefined) {\n\t\t\tmemo[n] = fib(n - 1) + fib(n - 2)\n\t\t}\n\t\treturn memo[n]\n\t}\n\treturn fib(n)\n}\n\nf: 14.156005859375 ms\n")])])]),a("h4",{attrs:{id:"方法四-for循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法四-for循环"}},[t._v("#")]),t._v(" 方法四： for循环")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function fibonacci(n) {\n\tlet n1 = 1, n2 = 1\n\tfor (let i = 2; i < n; i++) {\n\t\t[n1, n2] = [n2, n1 + n2]\n\t}\n\treturn n2\n}\n\nf: 5.817138671875 ms\n")])])]),a("h4",{attrs:{id:"运行耗时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行耗时"}},[t._v("#")]),t._v(" 运行耗时")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("let x = 1\nconsole.time('f') \nwhile (x < 10000) {\n    fibonacci(20)\n    x++\n}\nconsole.timeEnd('f') \n")])])]),a("p",[t._v("普通递归>改进递归>for循环")]),t._v(" "),a("h3",{attrs:{id:"左右布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#左右布局"}},[t._v("#")]),t._v(" 左右布局")]),t._v(" "),a("h4",{attrs:{id:"float-margin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#float-margin"}},[t._v("#")]),t._v(" float+margin")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".left {\n    float: left;\n    width: 200px;\n    height: 100%;\n    background-color: red;\n}\n.right {\n    margin-left: 200px;\n    background-color: blue;\n}\n")])])]),a("h4",{attrs:{id:"float-overflow-hidden"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#float-overflow-hidden"}},[t._v("#")]),t._v(" float + overflow:hidden")]),t._v(" "),a("p",[t._v("利用overflow:hidden形成BFC，因为BFC不会与float box重叠。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".left {\n    float: left;\n    width: 200px;\n    height: 100%;\n    background-color: red;\n}\n.right {\n    overflow:hidden;\n    background-color: blue;\n}\n12345678910\n")])])]),a("h4",{attrs:{id:"css3-float-calc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css3-float-calc"}},[t._v("#")]),t._v(" CSS3 float + calc")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".left {\n    float: left;\n    width: 200px;\n    height: 100%;\n    background-color: red;\n}\n.right {\n    float: left;\n    width: calc(100% - 200px);\n    height: 100%;\n    background-color: blue;\n}\n123456789101112\n")])])]),a("h4",{attrs:{id:"弹性布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#弹性布局"}},[t._v("#")]),t._v(" 弹性布局")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".parent {\n\tdisplay: flex;\n}\n.left {\n    width: 200px;\n    height: 100%;\n    background-color: red;\n}\n.right {\n    display: flex;\n    flex: 1;\n    height: 100%;\n    background-color: blue;\n}\n\n")])])]),a("h4",{attrs:{id:"定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定位"}},[t._v("#")]),t._v(" 定位")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("当然，使用absolute定位也是可以的，通过left调整位置就可以了。\n")])])]),a("h3",{attrs:{id:"表单设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单设计"}},[t._v("#")]),t._v(" 表单设计")]),t._v(" "),a("p",[t._v("不知道怎么写，写了个vue的常规操作")]),t._v(" "),a("h3",{attrs:{id:"从输入url到显示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从输入url到显示"}},[t._v("#")]),t._v(" 从输入Url到显示")]),t._v(" "),a("p",[t._v("常规操作")]),t._v(" "),a("p",[t._v("http需详细了解")]),t._v(" "),a("h3",{attrs:{id:"有效括号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有效括号"}},[t._v("#")]),t._v(" 有效括号")]),t._v(" "),a("p",[t._v("leetcode常规操作")]),t._v(" "),a("h3",{attrs:{id:"两个数组求是否是子集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两个数组求是否是子集"}},[t._v("#")]),t._v(" 两个数组求是否是子集")]),t._v(" "),a("h3",{attrs:{id:"vue-父子组件的生命周期顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-父子组件的生命周期顺序"}},[t._v("#")]),t._v(" vue 父子组件的生命周期顺序")]),t._v(" "),a("p",[a("strong",[t._v("1. 加载渲染过程")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("同步引入时生命周期顺序为：\n父组件的beforeCreate、created、beforeMount --\x3e 所有子组件的beforeCreate、created、beforeMount --\x3e 所有子组件的mounted --\x3e 父组件的mounted\n总结：父组件先创建，然后子组件创建；子组件先挂载，然后父组件挂载\n"),a("em",[t._v("若有孙组件呢？")]),t._v("\n父组件先beforeCreate => created => beforeMount , 然后子组件开始beforeCreate => created => beforeMount ，然后孙组件beforeCreate => created => beforeMount => mounted，孙组件挂载完成了，子组件mounted，父组件再mounted")])]),t._v(" "),a("li",[a("p",[t._v("异步引入时生命周期顺序为：\n父组件的beforeCreate、created、beforeMount、mounted --\x3e 子组件的beforeCreate、created、beforeMount、mounted")]),t._v(" "),a("p",[t._v("总结：父组件创建，父组件挂载；子组件创建，子组件挂载。")])])]),t._v(" "),a("p",[a("strong",[t._v("2. 子组件更新过程")]),t._v("\n父beforeUpdate->子beforeUpdate->子updated->父updated")]),t._v(" "),a("p",[a("strong",[t._v("3.父组件更新过程")]),t._v("\n父beforeUpdate->父updated")]),t._v(" "),a("p",[a("strong",[t._v("4.销毁过程")]),t._v("\n父beforeDestroy->子beforeDestroy->子destroyed->父destroyed")]),t._v(" "),a("h2",{attrs:{id:"下午"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下午"}},[t._v("#")]),t._v(" 下午")]),t._v(" "),a("p",[t._v("问的很简单，没问什么技术问题，考了两道逻辑题，一道都没答出来。。。")]),t._v(" "),a("ol",[a("li",[t._v("5L水，3L水，求4L水")]),t._v(" "),a("li",[t._v("黑帽子白帽子，求黑帽子")])])])}),[],!1,null,null,null);a.default=s.exports}}]);