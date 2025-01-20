(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{470:function(s,t,a){"use strict";a.r(t);var e=a(38),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"自动寻找未翻译文字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动寻找未翻译文字"}},[s._v("#")]),s._v(" 自动寻找未翻译文字")]),s._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("项目中有中英文语言需求，存在很多漏翻译的，一个一个去发现不现实，于是通过node.js去自动找出所有未翻译的语言。")]),s._v(" "),t("h2",{attrs:{id:"架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[s._v("#")]),s._v(" 架构")]),s._v(" "),t("h3",{attrs:{id:"入口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#入口"}},[s._v("#")]),s._v(" 入口")]),s._v(" "),t("p",[s._v("通过bat脚本跑node")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("node check_cn_in_en.js \nnode find_omit.js\npause\n")])])]),t("h3",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("p",[s._v("将需要配置的例如：入口文件、出口文件、需忽略文件等单独使用json文件进行配置。")]),s._v(" "),t("h3",{attrs:{id:"lib"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lib"}},[s._v("#")]),s._v(" lib")]),s._v(" "),t("p",[s._v("一些工具函数")]),s._v(" "),t("h2",{attrs:{id:"主函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主函数"}},[s._v("#")]),s._v(" 主函数")]),s._v(" "),t("h3",{attrs:{id:"找出已翻译但含中文的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#找出已翻译但含中文的"}},[s._v("#")]),s._v(" 找出已翻译但含中文的")]),s._v(" "),t("p",[s._v("项目的翻译都在一个文件中，只需遍历这文件内容即可。")]),s._v(" "),t("p",[s._v("1、获取配置文件")]),s._v(" "),t("p",[s._v("2、正则")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 匹配中文")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CN_REG")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("[\\u4e00-\\u9fa5]")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 匹配每行的内容 "UDP": "UDP"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LINE_REG")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v('".*?"\\s*:\\s*"(.*)"')]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),s._v("\n")])])]),t("p",[s._v("3、跑起来")]),s._v(" "),t("p",[s._v("通过"),t("code",[s._v("fs.readFileSync(filePath, { encoding: 'utf-8' });")]),s._v("读出文件内容")]),s._v(" "),t("p",[s._v("通过"),t("code",[s._v("split(/\\r?\\n/)")]),s._v("分割出每行代码")]),s._v(" "),t("p",[s._v("再循环通过中文的正则匹配，记录")]),s._v(" "),t("p",[s._v("最后通过")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("fs.writeFile(OUT_FILE, out.join('\\n\\n'), err => {\n\tif(err)console.log(err);\n});\n")])])]),t("p",[s._v("写成文件")]),s._v(" "),t("h3",{attrs:{id:"找出代码文件中未翻译的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#找出代码文件中未翻译的"}},[s._v("#")]),s._v(" 找出代码文件中未翻译的")]),s._v(" "),t("p",[s._v("1、获取配置，需要寻找的代码文件（夹）")]),s._v(" "),t("p",[s._v("2、 删除之前的记录")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("const fs = require('fs');\n\nfunction delDir(path){\n    let files = [];\n    if(fs.existsSync(path)){\n        files = fs.readdirSync(path);\n        files.forEach((file, index) => {\n            let curPath = path + \"/\" + file;\n            if(fs.statSync(curPath).isDirectory()){\n                delDir(curPath); //递归删除文件夹\n            } else {\n                fs.unlinkSync(curPath); //删除文件\n            }\n        });\n        fs.rmdirSync(path);\n    }\n}\n\nmodule.exports = delDir;\n")])])]),t("p",[s._v("3、根据入口，判断是文件夹就递归读，是文件就走主逻辑")]),s._v(" "),t("p",[s._v("4、主逻辑")]),s._v(" "),t("p",[s._v("读文件")]),s._v(" "),t("p",[s._v("通过正则去除注释代码")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//去掉注释代码 //、/**/ 两种")]),s._v("\ncontent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("^\\s*(\\/\\/.*).*$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("mg")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ncontent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\/\\*(.|\\r|\\n)*?\\*\\/")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("mg")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("通过正则找出需要翻译的文字")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// _("翻译")')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" reg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("_\\(('|\")(.+?)(?:\\1\\)|\\1,)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("记录需要翻译的文字、该文字所在文件路径")]),s._v(" "),t("p",[s._v("5、获取已翻译文件列表")]),s._v(" "),t("p",[s._v("6、查找没有翻译的")]),s._v(" "),t("p",[s._v("7、打印出来")])])}),[],!1,null,null,null);t.default=r.exports}}]);