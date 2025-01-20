(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{488:function(a,v,_){"use strict";_.r(v);var t=_(38),s=Object(t.a)({},(function(){var a=this,v=a._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"基于g6-js封装拓扑图插件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基于g6-js封装拓扑图插件"}},[a._v("#")]),a._v(" 基于G6.js封装拓扑图插件")]),a._v(" "),v("p",[a._v("随着业务的迅速发展，以前控制器中使用"),v("code",[a._v("D3.js")]),a._v("实现的拓扑图功能渐渐地不能满足需求：")]),a._v(" "),v("ol",[v("li",[a._v("代码组织混乱，各功能未有序解耦，维护困难。")]),a._v(" "),v("li",[a._v("未插件化，不能供多个项目使用。")]),a._v(" "),v("li",[v("code",[a._v("D3.js")]),a._v("使用"),v("code",[a._v("svg")]),a._v("来实现，在数据量大时需要生成数量庞大的"),v("code",[a._v("dom")]),a._v("结构。")])]),a._v(" "),v("p",[a._v("因此，拓扑图急需一次大的升级。")]),a._v(" "),v("h2",{attrs:{id:"插件选型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#插件选型"}},[a._v("#")]),a._v(" 插件选型")]),a._v(" "),v("p",[a._v("市面上有不少拓扑图插件，例如：")]),a._v(" "),v("h3",{attrs:{id:"_1-antv-g6"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-antv-g6"}},[a._v("#")]),a._v(" 1. AntV G6")]),a._v(" "),v("p",[a._v("简介：G6 是一个图可视化引擎。它提供了图的绘制、布局、分析、交互、动画等图可视化的基础能力。\n背景：蚂蚁金服 AntV、国产\n官网：https://antv.vision/zh\n示例：https://github.com/wenyuan/cceditor")]),a._v(" "),v("ul",[v("li",[a._v("优点\n"),v("ul",[v("li",[a._v("开源免费")]),a._v(" "),v("li",[a._v("上手简单，可扩展性强")]),a._v(" "),v("li",[a._v("功能丰富，支持各种自定义操作")]),a._v(" "),v("li",[a._v("由蚂蚁金服 AntV 团队开发，从维护性和生态圈角度考虑相对有保障")]),a._v(" "),v("li",[a._v("支持自动布局（早期借助 d3-force 实现，后期已经被内部支持）")])])]),a._v(" "),v("li",[a._v("缺点\n"),v("ul",[v("li",[a._v("有时候文档和版本会脱节（可以理解，问题不大）")])])]),a._v(" "),v("li",[a._v("建议\n"),v("ul",[v("li",[a._v("大厂团队开发维护，后期有保障，大小项目都可以使用")]),a._v(" "),v("li",[a._v("可以学习里面的一些编程思想和技巧")])])])]),a._v(" "),v("h3",{attrs:{id:"_2-d3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-d3"}},[a._v("#")]),a._v(" 2. D3")]),a._v(" "),v("p",[a._v("只提供画图能力，画什么需要自己实现。")]),a._v(" "),v("h3",{attrs:{id:"_3-echarts"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-echarts"}},[a._v("#")]),a._v(" 3. ECharts")]),a._v(" "),v("p",[a._v("简介：ECharts 关系图。\n背景：百度、国产\n官网：https://www.echartsjs.com/zh/index.html")]),a._v(" "),v("ul",[v("li",[a._v("优点\n"),v("ul",[v("li",[a._v("上手非常简单")]),a._v(" "),v("li",[a._v("文档齐全")])])]),a._v(" "),v("li",[a._v("缺点\n"),v("ul",[v("li",[a._v("扩展性弱（毕竟不是专做图编辑器的，关系图只是 ECharts 中的一项）")])])]),a._v(" "),v("li",[a._v("建议\n"),v("ul",[v("li",[a._v("可以用在定制化的需求中，不需要拖拉拽等功能")])])])]),a._v(" "),v("h3",{attrs:{id:"选型总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#选型总结"}},[a._v("#")]),a._v(" 选型总结")]),a._v(" "),v("p",[a._v("除了上面提到的，还有一些国内外个人开发的插件，但普遍存在维护无保障、文档不齐全等问题。")]),a._v(" "),v("p",[a._v("另外D3之前就在用，存在的问题上面也讲过了。")]),a._v(" "),v("p",[a._v("Echarts拓展性不强，无法适应多变的需求。")]),a._v(" "),v("p",[a._v("加上深信服已经有基于"),v("code",[a._v("G6.js")]),a._v("封装了插件，可以在其基础上快速实现功能，于是最终选定使用"),v("code",[a._v("G6")]),a._v("进行开发。")]),a._v(" "),v("h2",{attrs:{id:"功能实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#功能实现"}},[a._v("#")]),a._v(" 功能实现")]),a._v(" "),v("h3",{attrs:{id:"目录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[a._v("#")]),a._v(" 目录")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("└───docs // 文档\n└───example // 示例\n└───src\n│   └───assets // 图片资源\n│   └───behavior // 行为方法\n│   └───config // 公共配置\n│   └───controller // 注册类型\n│   └───core // 插件核心代码\n│   └───event // 事件\n│   └───extends // 扩展G6\n│   └───language // 国际化\n│   └───layout // 布局\n│   └───plugin // 插件\n│   └───shapes // 自定义类型\n│   └───style // 样式\n│   └───utils // 公共方法\n│   index.js\n")])])]),v("h3",{attrs:{id:"架构图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#架构图"}},[a._v("#")]),a._v(" 架构图")]),a._v(" "),v("p",[v("img",{attrs:{src:"D:%5CUsers%5CUser%5CDesktop%5Cvuepress-blog%5Cdocs%5Cblog%5Cimages%5C%E6%8B%93%E6%89%91%E5%9B%BE%E6%9E%B6%E6%9E%84.png",alt:""}})]),a._v(" "),v("h3",{attrs:{id:"数据转换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据转换"}},[a._v("#")]),a._v(" 数据转换")]),a._v(" "),v("p",[a._v("各项目的数据格式肯定是不一致的，插件为了兼容各种数据格式，对外暴露了转换数据的方法，用户可自定义转换数据格式，将数据转成"),v("code",[a._v("G6")]),a._v("的格式。")]),a._v(" "),v("h3",{attrs:{id:"布局"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#布局"}},[a._v("#")]),a._v(" 布局")]),a._v(" "),v("h4",{attrs:{id:"树形交叉布局"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#树形交叉布局"}},[a._v("#")]),a._v(" 树形交叉布局")]),a._v(" "),v("p",[a._v("项目的树形需求主要有几个难点：")]),a._v(" "),v("ol",[v("li",[a._v("需要不同父集的子集间能相互连接（交叉连线）")]),a._v(" "),v("li",[a._v("存在不在树结构里的元素")]),a._v(" "),v("li",[a._v("存在分支拓扑，即树拓扑中存在子树拓扑")])]),a._v(" "),v("p",[v("code",[a._v("G6")]),a._v("原生支持的树形拓扑十分死板，只能展示单纯的树形结构。")]),a._v(" "),v("h5",{attrs:{id:"实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[a._v("#")]),a._v(" 实现")]),a._v(" "),v("p",[a._v("本插件通过"),v("strong",[a._v("扩展"),v("code",[a._v("dagre")]),a._v("布局，并实现展开收起功能")]),a._v("，完美实现需求。")]),a._v(" "),v("h5",{attrs:{id:"保持顺序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#保持顺序"}},[a._v("#")]),a._v(" 保持顺序")]),a._v(" "),v("p",[a._v("为了保持同层级节点的排列顺序，自动将每层中最多子节点的节点放在中间（为了美观），其余按数据传入的顺序进行排序。")]),a._v(" "),v("h5",{attrs:{id:"展开收起"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#展开收起"}},[a._v("#")]),a._v(" 展开收起")]),a._v(" "),v("p",[a._v("展开收起子节点，会自动更新节点的位置，达到类似"),v("code",[a._v("xmind")]),a._v("的伸缩位置的效果。")]),a._v(" "),v("h3",{attrs:{id:"自定义图形、事件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自定义图形、事件"}},[a._v("#")]),a._v(" 自定义图形、事件")]),a._v(" "),v("p",[a._v("插件内置了各种图形、事件。")]),a._v(" "),v("h4",{attrs:{id:"连线"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#连线"}},[a._v("#")]),a._v(" 连线")]),a._v(" "),v("p",[a._v("扩展了三阶贝塞尔曲线，可根据传入的数据，显示传输速率、繁忙度、连接方式等信息。")]),a._v(" "),v("h4",{attrs:{id:"网络设备"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络设备"}},[a._v("#")]),a._v(" 网络设备")]),a._v(" "),v("p",[a._v("内置了控制器、接入点、盒式交换机、框式交换机等设备类型，用户可直接使用，需要额外自定义的设备类型可通过配置化的方式传入，插件会自动注册成"),v("code",[a._v("G6")]),a._v("的自定义类型。")]),a._v(" "),v("p",[a._v("内置了多套尺寸的样式，随着缩放比例的变化自动切换显示。")]),a._v(" "),v("h4",{attrs:{id:"事件系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事件系统"}},[a._v("#")]),a._v(" 事件系统")]),a._v(" "),v("p",[a._v("内置了一系列事件，统一在图实例发送接收，方便外部使用。")]),a._v(" "),v("h3",{attrs:{id:"内置svg"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内置svg"}},[a._v("#")]),a._v(" 内置"),v("code",[a._v("svg")])]),a._v(" "),v("p",[a._v("内置了一系列设备图片，可像在"),v("code",[a._v("vue")]),a._v("中使用"),v("code",[a._v("svg")]),a._v("组件一样使用。")]),a._v(" "),v("h3",{attrs:{id:"差量更新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#差量更新"}},[a._v("#")]),a._v(" 差量更新")]),a._v(" "),v("p",[a._v("针对周期性自动更新数据的场景，提供了差量对比、更新的功能。")]),a._v(" "),v("h3",{attrs:{id:"坐标处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#坐标处理"}},[a._v("#")]),a._v(" 坐标处理")]),a._v(" "),v("h4",{attrs:{id:"全新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#全新"}},[a._v("#")]),a._v(" 全新")]),a._v(" "),v("p",[a._v("所有节点都没坐标，或者更新时配置了去计算坐标时，会走配置的layout的布局算法去计算位置。")]),a._v(" "),v("p",[a._v("如果感到计算速度缓慢，可以开启"),v("code",[a._v("webwork")]),a._v("功能进行加速。")]),a._v(" "),v("h4",{attrs:{id:"有新有旧"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#有新有旧"}},[a._v("#")]),a._v(" 有新有旧")]),a._v(" "),v("p",[a._v("有坐标的节点使用旧坐标，无坐标的走布局算法。")]),a._v(" "),v("h4",{attrs:{id:"全旧"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#全旧"}},[a._v("#")]),a._v(" 全旧")]),a._v(" "),v("p",[a._v("全部都有坐标，则直接使用旧坐标，不走布局算法，节省性能。")]),a._v(" "),v("h3",{attrs:{id:"文档"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[a._v("#")]),a._v(" 文档")]),a._v(" "),v("p",[a._v("一个大型的项目，不能缺少了使用文档。")]),a._v(" "),v("p",[a._v("这里使用"),v("code",[a._v("VuePress")]),a._v("作为静态网站生成器，可快速实现预览编写的"),v("code",[a._v(".md")]),a._v("格式文档。")]),a._v(" "),v("h3",{attrs:{id:"国际化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#国际化"}},[a._v("#")]),a._v(" 国际化")]),a._v(" "),v("p",[a._v("可在初始化拓扑图时，传入语言类型来控制文字显示。")]),a._v(" "),v("p",[a._v("内置了国际化方案，同时可接收使用外部的翻译转换逻辑。")]),a._v(" "),v("h3",{attrs:{id:"开发体验"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开发体验"}},[a._v("#")]),a._v(" 开发体验")]),a._v(" "),v("h4",{attrs:{id:"mock数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mock数据"}},[a._v("#")]),a._v(" mock数据")]),a._v(" "),v("p",[a._v("可配置化的生成指定层级、数量的假数据，方便测试及展示。")]),a._v(" "),v("h4",{attrs:{id:"自定义console"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自定义console"}},[a._v("#")]),a._v(" 自定义console")]),a._v(" "),v("p",[a._v("可自定义console打印的样式，等级。")]),a._v(" "),v("p",[a._v("可方便的控制打印时机。")]),a._v(" "),v("h4",{attrs:{id:"打印执行用时"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#打印执行用时"}},[a._v("#")]),a._v(" 打印执行用时")]),a._v(" "),v("p",[a._v("在关键函数调用处，都添加了执行计时，可方便的看出性能瓶颈。")]),a._v(" "),v("h3",{attrs:{id:"拓展g6-js"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#拓展g6-js"}},[a._v("#")]),a._v(" 拓展"),v("code",[a._v("G6.js")])]),a._v(" "),v("p",[a._v("对"),v("code",[a._v("G6.js")]),a._v("的原型方法进行拓展、补充。")]),a._v(" "),v("h4",{attrs:{id:"behavior"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#behavior"}},[a._v("#")]),a._v(" behavior")]),a._v(" "),v("h5",{attrs:{id:"brush-select"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#brush-select"}},[a._v("#")]),a._v(" brush-select")]),a._v(" "),v("p",[v("code",[a._v("G6")]),a._v("内置的框选操作，是不支持在combo内部去拖动的。")]),a._v(" "),v("p",[a._v("插件通过重写该行为，实现在combo中进行框选。")]),a._v(" "),v("h5",{attrs:{id:"drag-canvas"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#drag-canvas"}},[a._v("#")]),a._v(" drag-canvas")]),a._v(" "),v("p",[a._v("拖动画布的操作。")]),a._v(" "),v("p",[a._v("在大数据量时，拖动画布及其卡顿，这里借鉴了"),v("code",[a._v("vue")]),a._v("中"),v("code",[a._v("nextTick")]),a._v("的原理，将更新汇总，一段时间只执行一次，达到优化性能的目的。")]),a._v(" "),v("h5",{attrs:{id:"zoom-canvas"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#zoom-canvas"}},[a._v("#")]),a._v(" zoom-canvas")]),a._v(" "),v("p",[a._v("滚轮进行缩放时，有时会到不了给定的最大最小缩放值。")]),a._v(" "),v("p",[a._v("插件这里判断达到极值时，直接使用该值，从而解决该bug。")]),a._v(" "),v("h4",{attrs:{id:"minimap"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#minimap"}},[a._v("#")]),a._v(" "),v("code",[a._v("minimap")])]),a._v(" "),v("p",[v("code",[a._v("G6")]),a._v("有提供两种缩略图，"),v("code",[a._v("minimap")]),a._v("和"),v("code",[a._v("imageMinimap")]),a._v("。")]),a._v(" "),v("p",[a._v("区别就是"),v("code",[a._v("minimap")]),a._v("是根据graph再用canvas画一次，而"),v("code",[a._v("imageminimap")]),a._v("是将我们自己给的图片显示出来（但是需要自己监听变化并给出图片）。")]),a._v(" "),v("p",[a._v("可想而知，在大量数据的情况下，双倍渲染canvas肯定消耗更大的性能。")]),a._v(" "),v("p",[a._v("本插件通过修改"),v("code",[a._v("imageminimap")]),a._v("，实现了自动监听graph变化，同时生成图片并渲染到缩略图上。")]),a._v(" "),v("h3",{attrs:{id:"打包"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[a._v("#")]),a._v(" 打包")]),a._v(" "),v("p",[a._v("使用"),v("code",[a._v("webpack5")]),a._v("进行打包")]),a._v(" "),v("h4",{attrs:{id:"开发环境"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[a._v("#")]),a._v(" 开发环境")]),a._v(" "),v("p",[a._v("已内置两套开发环境（普通html和vue）。")]),a._v(" "),v("p",[a._v("通过"),v("code",[a._v("npm run dev")]),a._v("即可启动开发环境，自动监听样例代码和拓扑图插件代码变化，热更新页面。")]),a._v(" "),v("h4",{attrs:{id:"生产环境"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生产环境"}},[a._v("#")]),a._v(" 生产环境")]),a._v(" "),v("p",[a._v("提供"),v("code",[a._v("umd")]),a._v("，"),v("code",[a._v("esm")]),a._v("两种格式，方便使用。")]),a._v(" "),v("h3",{attrs:{id:"新手指引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#新手指引"}},[a._v("#")]),a._v(" 新手指引")]),a._v(" "),v("p",[a._v("封装了新手指引功能，可让用户快速上手功能。")]),a._v(" "),v("h2",{attrs:{id:"插件系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#插件系统"}},[a._v("#")]),a._v(" 插件系统")]),a._v(" "),v("p",[a._v("所有插件均配置化，可传入配置进行启用、重写。")]),a._v(" "),v("h3",{attrs:{id:"数据工具栏"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据工具栏"}},[a._v("#")]),a._v(" 数据工具栏")]),a._v(" "),v("h4",{attrs:{id:"刷新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#刷新"}},[a._v("#")]),a._v(" 刷新")]),a._v(" "),v("p",[a._v("自定义数据刷新时间。")]),a._v(" "),v("h4",{attrs:{id:"选取方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#选取方式"}},[a._v("#")]),a._v(" 选取方式")]),a._v(" "),v("p",[a._v("切换单选和框选模式。")]),a._v(" "),v("h4",{attrs:{id:"对齐"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对齐"}},[a._v("#")]),a._v(" 对齐")]),a._v(" "),v("p",[a._v("类似于思维导图中的对齐功能，可对选中的节点进行水平、垂直、左、右等等对齐方式。")]),a._v(" "),v("h4",{attrs:{id:"撤销"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#撤销"}},[a._v("#")]),a._v(" 撤销")]),a._v(" "),v("p",[a._v("即上一步，支持无限步。")]),a._v(" "),v("h4",{attrs:{id:"导出"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#导出"}},[a._v("#")]),a._v(" 导出")]),a._v(" "),v("p",[a._v("将拓扑图以图片形式导出。")]),a._v(" "),v("h5",{attrs:{id:"大数据量优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#大数据量优化"}},[a._v("#")]),a._v(" 大数据量优化")]),a._v(" "),v("p",[a._v("插件针对大数据场景做了优化，"),v("code",[a._v("G6")]),a._v("直出的图片在大数据时会导出失败（浏览器对canvas的最大尺寸的限制），所以我们对数据采用分批导出。")]),a._v(" "),v("h5",{attrs:{id:"清晰度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#清晰度"}},[a._v("#")]),a._v(" 清晰度")]),a._v(" "),v("p",[v("code",[a._v("G6")]),a._v("直出的图片清晰度不是很好，插件通过动态改变像素比来放大尺寸，从而提高清晰度。")]),a._v(" "),v("h4",{attrs:{id:"显示设置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#显示设置"}},[a._v("#")]),a._v(" 显示设置")]),a._v(" "),v("p",[a._v("节点上的某些元素可通过配置去控制显示。")]),a._v(" "),v("h4",{attrs:{id:"快速展开收起"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#快速展开收起"}},[a._v("#")]),a._v(" 快速展开收起")]),a._v(" "),v("p",[a._v("可对节点快速的全部展开、全部收起、按层展开、按层收起。")]),a._v(" "),v("h4",{attrs:{id:"视图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#视图"}},[a._v("#")]),a._v(" 视图")]),a._v(" "),v("p",[a._v("可保存多份坐标、显示、缩放等展示信息的视图，让用户可以快速切换到想看的设备处。")]),a._v(" "),v("h4",{attrs:{id:"搜索"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#搜索"}},[a._v("#")]),a._v(" 搜索")]),a._v(" "),v("p",[a._v("通过关键字搜索并高亮相关数据。")]),a._v(" "),v("h5",{attrs:{id:"可配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可配置"}},[a._v("#")]),a._v(" 可配置")]),a._v(" "),v("p",[a._v("可配置需要搜索的字段")]),a._v(" "),v("h5",{attrs:{id:"高亮"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#高亮"}},[a._v("#")]),a._v(" 高亮")]),a._v(" "),v("p",[a._v("对搜索到的节点进行高亮显示。")]),a._v(" "),v("p",[a._v("同时，如果节点是被收起的状态，会自动打开其父级combo。")]),a._v(" "),v("h3",{attrs:{id:"视图工具栏"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#视图工具栏"}},[a._v("#")]),a._v(" 视图工具栏")]),a._v(" "),v("p",[a._v("对图进行放大、缩小、自适应缩放、缩略图、全屏等操作。")]),a._v(" "),v("h3",{attrs:{id:"tooltip"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tooltip"}},[a._v("#")]),a._v(" "),v("code",[a._v("tooltip")])]),a._v(" "),v("p",[a._v("鼠标悬浮提示")]),a._v(" "),v("h3",{attrs:{id:"背景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[a._v("#")]),a._v(" 背景")]),a._v(" "),v("p",[a._v("可配置画布的背景颜色、图片等。")]),a._v(" "),v("h3",{attrs:{id:"右键菜单"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#右键菜单"}},[a._v("#")]),a._v(" 右键菜单")]),a._v(" "),v("p",[a._v("可配置右键元素时显示菜单。")]),a._v(" "),v("h3",{attrs:{id:"命令系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#命令系统"}},[a._v("#")]),a._v(" 命令系统")]),a._v(" "),v("p",[a._v("操作动作都写入命令系统，在"),v("code",[a._v("dom")]),a._v("元素上添加命令名即可实现动作。")]),a._v(" "),v("p",[a._v("并可配置命令快捷键。")]),a._v(" "),v("h3",{attrs:{id:"图例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图例"}},[a._v("#")]),a._v(" 图例")]),a._v(" "),v("p",[a._v("设备图片示例，可动态传入数据进行显示。")]),a._v(" "),v("h4",{attrs:{id:"自动注册类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自动注册类型"}},[a._v("#")]),a._v(" 自动注册类型")]),a._v(" "),v("p",[a._v("图例自然包含所有的类型，所以当开启图例时，会自动根据配置项去注册节点类型。")]),a._v(" "),v("h4",{attrs:{id:"筛选"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#筛选"}},[a._v("#")]),a._v(" 筛选")]),a._v(" "),v("p",[a._v("可通过点击类型去筛选数据。")]),a._v(" "),v("p",[a._v("可与搜索功能组合进行筛选。")]),a._v(" "),v("h3",{attrs:{id:"loading"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#loading"}},[a._v("#")]),a._v(" loading")]),a._v(" "),v("p",[a._v("画布未渲染完成时，可配置显示loading动画。")]),a._v(" "),v("h3",{attrs:{id:"对齐辅助线"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对齐辅助线"}},[a._v("#")]),a._v(" 对齐辅助线")]),a._v(" "),v("p",[v("code",[a._v("G6")]),a._v("的"),v("code",[a._v("snapLine")]),a._v("插件只有显示辅助线的功能。")]),a._v(" "),v("p",[a._v("插件对其进行扩展，添加了移动到附近节点时会进行吸附对齐的功能。")]),a._v(" "),v("h2",{attrs:{id:"扩展性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#扩展性"}},[a._v("#")]),a._v(" 扩展性")]),a._v(" "),v("p",[a._v("插件、设备样式等均已配置化，可传入数据进行重写，十分方便的完成换肤、拓展等自定义需求。")]),a._v(" "),v("h2",{attrs:{id:"兼容性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#兼容性"}},[a._v("#")]),a._v(" 兼容性")]),a._v(" "),v("p",[a._v("现代浏览器完美兼容。")]),a._v(" "),v("p",[a._v("ie10环境，内部使用polyfill兼容。")])])}),[],!1,null,null,null);v.default=s.exports}}]);