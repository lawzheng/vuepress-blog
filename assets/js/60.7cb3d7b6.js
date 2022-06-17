(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{482:function(t,v,s){"use strict";s.r(v);var _=s(70),a=Object(_.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"拓扑图实现类似xmind收缩效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拓扑图实现类似xmind收缩效果"}},[t._v("#")]),t._v(" 拓扑图实现类似xmind收缩效果")]),t._v(" "),s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("项目使用"),s("code",[t._v("G6.js")]),t._v("实现")]),t._v(" "),s("p",[t._v("由于拓扑存在各种交叉连线，不能使用提供的树图布局。")]),t._v(" "),s("p",[t._v("现在有需求，收起子节点时动态改变坐标，类似xmind的效果，这里需要手动实现。")]),t._v(" "),s("h2",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("h3",{attrs:{id:"平移全部节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#平移全部节点"}},[t._v("#")]),t._v(" 平移全部节点")]),t._v(" "),s("p",[t._v("最先想的是全部重新计算位置比较耗时，所以自己写了个收缩的算法：")]),t._v(" "),s("p",[t._v("当收缩时，在该节点左边的节点加上该节点左边减少的距离，右边同理。更改坐标后，调下"),s("code",[t._v("g6")]),t._v("的"),s("code",[t._v("refreshPositions")]),t._v("即可刷新位置了。")]),t._v(" "),s("p",[t._v("实现后发现，当有节点在收缩节点的包围盒里面时，就不知道该怎么收缩了，看了"),s("code",[t._v("xmind")]),t._v("和"),s("code",[t._v("processOn")]),t._v("，都是不会存在这种情况，所以这种平移的方式在我们的拓扑图中行不通。")]),t._v(" "),s("h3",{attrs:{id:"重新计算位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重新计算位置"}},[t._v("#")]),t._v(" 重新计算位置")]),t._v(" "),s("h4",{attrs:{id:"思路-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路-2"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("p",[t._v("在收缩后，调用"),s("code",[t._v("removeItem")]),t._v("删除所有子节点，然后再走重新计算位置。")]),t._v(" "),s("p",[t._v("这里为了不改变图的缩放比例，只去修改现有节点的x和y坐标，修改完后，调用"),s("code",[t._v("positionsAnimate")]),t._v("去更新位置，"),s("code",[t._v("positionsAnimate")]),t._v("就是动画版的"),s("code",[t._v("refreshPositions")]),t._v("。")]),t._v(" "),s("p",[t._v("同时需要调用"),s("code",[t._v("updateCombos")]),t._v("去更新combo。")]),t._v(" "),s("p",[t._v("渲染完成后，还需触发节点缩放比例对应样式的更新。")]),t._v(" "),s("h4",{attrs:{id:"保留手动拖动过的位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#保留手动拖动过的位置"}},[t._v("#")]),t._v(" 保留手动拖动过的位置")])])}),[],!1,null,null,null);v.default=a.exports}}]);