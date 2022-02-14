(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{460:function(v,_,s){"use strict";s.r(_);var t=s(70),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h1",{attrs:{id:"web端首页优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web端首页优化"}},[v._v("#")]),v._v(" web端首页优化")]),v._v(" "),s("p",[v._v("因为首页加载资源过多，加上都是使用php进行文件的拼接，有时会文件缺失导致页面报错，所以通过本地打包来解决以上问题。")]),v._v(" "),s("h2",{attrs:{id:"实现思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现思路"}},[v._v("#")]),v._v(" 实现思路")]),v._v(" "),s("p",[v._v("首页所请求的资源是根据之前的"),s("code",[v._v("project.json")]),v._v("中写的配置去寻找所有文件，大致可分为语言、基础框架、首页页面三类文件。")]),v._v(" "),s("p",[v._v("现在需要根据依赖文件"),s("code",[v._v("deps")]),v._v("去找出所有的依赖并使用gulp打包。")]),v._v(" "),s("p",[v._v("既然是前端来做，自然是选择用"),s("code",[v._v("node.js")]),v._v("来实现。")]),v._v(" "),s("p",[v._v("大致思路就是根据文件名去找实际文件路径（之前就有的架构），区分"),s("code",[v._v("js、css、deps、文件夹")]),v._v("等几种类型，去递归找到所有依赖文件并记录下来文件路径（gulp打包是输入路径数组）。（实现代码看附件staticFile.js）")]),v._v(" "),s("p",[v._v("然后通过gulp打包（要换webpack的话会影响整套流水线，所以暂时还是使用gulp）。")]),v._v(" "),s("p",[v._v("通过"),s("code",[v._v("gulp-rev")]),v._v("生成hash值做缓存控制，还需要做自动替换首页php中的文件链接，网上翻了下没发现有可以注入php文件的，于是自己动手实现了一个注入插件（"),s("strong",[v._v("这个之前已经发过创新了")]),v._v("），原理还是通过识别特殊标识符然后去替换中间的链接内容。")]),v._v(" "),s("p",[v._v("其中遇到打包后css图片路径发生变化，查看后发现都是ext框架的小图片，于是都用打包成base64。")]),v._v(" "),s("p",[v._v("具体代码逻辑可以看附件。")]),v._v(" "),s("h2",{attrs:{id:"与旧方案相比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与旧方案相比"}},[v._v("#")]),v._v(" 与旧方案相比")]),v._v(" "),s("p",[v._v("这样做的好处是在编译阶段就将文件打包好，到时直接请求获取就好了，不用php去实时拼接。")]),v._v(" "),s("p",[v._v("而且js文件，应该来说是前端来控制更方便的，现在有这技术环境了自然要改掉以前的架构。")]),v._v(" "),s("h2",{attrs:{id:"阶段总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阶段总结"}},[v._v("#")]),v._v(" 阶段总结")]),v._v(" "),s("p",[v._v("在上述的一通操作后，对首页优化来说其实没起到作用。只是解决了php来拼接导致的问题，不过因为主导权来到了前端，那么就可以开始进行优化了。")]),v._v(" "),s("h2",{attrs:{id:"去除非首页文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#去除非首页文件"}},[v._v("#")]),v._v(" 去除非首页文件")]),v._v(" "),s("p",[v._v("首先观察到"),s("code",[v._v("combine.js")]),v._v("，是用来加载首页页面文件的，足足有3M大小，过于庞大。查看"),s("code",[v._v("project.json")]),v._v("发现其中包含了非首页的文件，于是决定去除这些代码。")]),v._v(" "),s("p",[v._v("在打包时加个文件黑名单，过滤掉不需要的（为了不改动"),s("code",[v._v("project.json")]),v._v("），打包出来发现只有438KB了，极大的缩小了文件。然而许多页面却报错了。")]),v._v(" "),s("p",[v._v("主要报错类型有以下几种：")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("页面初始化及布局出错")]),v._v(" "),s("p",[v._v("这种是文件没问题但是EXT在创建时出错了")])]),v._v(" "),s("li",[s("p",[v._v("加载页面出错，请检查网络连接是否正常。")]),v._v(" "),s("p",[v._v("这种是"),s("code",[v._v("catjs.php")]),v._v("返回的文件执行时报错了")])]),v._v(" "),s("li",[s("p",[v._v("css资源找不到报错")]),v._v(" "),s("p",[v._v("这种是没有该css却在依赖里写了"),s("code",[v._v("css:true")])])])]),v._v(" "),s("h3",{attrs:{id:"前两种问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前两种问题"}},[v._v("#")]),v._v(" 前两种问题")]),v._v(" "),s("p",[v._v("都是缺少依赖文件或者依赖文件的加载顺序导致的，通过笨方法查看所有页面，逐一解决报错，最终解决了。")]),v._v(" "),s("h3",{attrs:{id:"css报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css报错"}},[v._v("#")]),v._v(" css报错")]),v._v(" "),s("p",[v._v("通过之前写的"),s("code",[v._v("staticFile.js")]),v._v("中暴露的方法直接找出写了"),s("code",[v._v("css:true")]),v._v("却没对应文件的，手动一一比对并删除"),s("code",[v._v("css:true")]),v._v("（主要是没多少个，不需要自动去删除）。")]),v._v(" "),s("h3",{attrs:{id:"combine-js优化结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#combine-js优化结果"}},[v._v("#")]),v._v(" "),s("code",[v._v("combine.js")]),v._v("优化结果")]),v._v(" "),s("p",[v._v("至此，"),s("code",[v._v("combine.js")]),v._v("的优化已经解决")]),v._v(" "),s("p",[v._v("大小变化，3.1M->448K       gzip后：810K->149K")]),v._v(" "),s("p",[v._v("体积优化了"),s("strong",[v._v("85%")]),v._v("，加载时间缩短了"),s("strong",[v._v("200ms")])]),v._v(" "),s("h3",{attrs:{id:"其余文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其余文件"}},[v._v("#")]),v._v(" 其余文件")]),v._v(" "),s("p",[v._v("再看首页加载的文件，发现有"),s("code",[v._v("jQuery")]),v._v("，"),s("code",[v._v("highCharts")]),v._v("以及各种图片。")]),v._v(" "),s("p",[v._v("于是将"),s("code",[v._v("jQuery")]),v._v("，"),s("code",[v._v("highCharts")]),v._v("合入"),s("code",[v._v("entry.js")]),v._v("，")]),v._v(" "),s("p",[v._v("小图片使用base64，")]),v._v(" "),s("p",[v._v("进一步减少首页请求数。")]),v._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),s("p",[v._v("通过上述的一系列操作，加快了首页加载速度。")]),v._v(" "),s("p",[v._v("另外文件交由前端来打包处理，为以后的大重构打下基础。")])])}),[],!1,null,null,null);_.default=e.exports}}]);