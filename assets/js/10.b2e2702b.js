(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{431:function(n,t,i){"use strict";i.r(t);var e=i(70),a=Object(e.a)({},(function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[i("h1",{attrs:{id:"彩带"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#彩带"}},[n._v("#")]),n._v(" 彩带")]),n._v(" "),i("h2",{attrs:{id:"出处"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#出处"}},[n._v("#")]),n._v(" 出处")]),n._v(" "),i("p",[i("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-3b1906c98643f07605dbb66412af76b8_hd.png",alt:"img"}})]),n._v(" "),i("p",[n._v("听说最初是尤大佬写在博客的")]),n._v(" "),i("p",[n._v("这里直接贴代码了")]),n._v(" "),i("h2",{attrs:{id:"源码"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[n._v("#")]),n._v(" 源码")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v("<canvas></canvas>\n\n<script>\n    document.addEventListener('touchmove', function (e) {\n        e.preventDefault()\n    })\n    var c = document.getElementsByTagName('canvas')[0],\n        x = c.getContext('2d'),\n        pr = window.devicePixelRatio || 1,\n        w = window.innerWidth,\n        h = window.innerHeight,\n        f = 90,\n        q,\n        m = Math,\n        r = 0,\n        u = m.PI*2,\n        v = m.cos,\n        z = m.random\n    c.width = w*pr\n    c.height = h*pr\n    x.scale(pr, pr)\n    x.globalAlpha = 0.6\n    function i(){\n        x.clearRect(0,0,w,h)\n        q=[{x:0,y:h*.7+f},{x:0,y:h*.7-f}]\n        while(q[1].x<w+f) d(q[0], q[1])\n    }\n    function d(i,j){   \n        x.beginPath()\n        x.moveTo(i.x, i.y)\n        x.lineTo(j.x, j.y)\n        var k = j.x + (z()*2-0.25)*f,\n            n = y(j.y)\n        x.lineTo(k, n)\n        x.closePath()\n        r-=u/-50\n        x.fillStyle = '#'+(v(r)*127+128<<16 | v(r+u/3)*127+128<<8 | v(r+u/3*2)*127+128).toString(16)\n        x.fill()\n        q[0] = q[1]\n        q[1] = {x:k,y:n}\n    }\n    function y(p){\n        var t = p + (z()*2-1.1)*f\n        return (t>h||t<0) ? y(p) : t\n    }\n    document.onclick = i\n    document.ontouchstart = i\n    i()\n<\/script>\n")])])]),i("h2",{attrs:{id:"三角形绘制"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#三角形绘制"}},[n._v("#")]),n._v(" 三角形绘制")]),n._v(" "),i("p",[n._v("三角形绘制算法步骤如下：")]),n._v(" "),i("ol",[i("li",[n._v("设置左起第一个三角形的两个点坐标为：q0 (0,h*.7+f), q1(0,h*.7-f)，h为窗口高度，f为初始距离90")]),n._v(" "),i("li",[n._v("若q1.x < w+f，取三角形的第三点为q2 (q1.x + (Math.random()*2 - 0.25)*f,q1.y + (Math.random()*2 - 1.1)*f)，q2.y如果超过了窗口大小则重新取，直到满足条件为止；否则，结束绘制")]),n._v(" "),i("li",[n._v("绘制三角形")]),n._v(" "),i("li",[n._v("设置q0 = q1, q1 = q2，重复上述步骤")])]),n._v(" "),i("p",[n._v("算法分析：")]),n._v(" "),i("ul",[i("li",[n._v("主要是第4步使得每个相连的三角形都有一条共同的边，所以相连")]),n._v(" "),i("li",[n._v("最初两个点的y值，以及第三点的取法都是经验值")]),n._v(" "),i("li",[n._v("q1到q2的x方向增幅为(Math.random()*2 - 0.25)*f，Math.random()"),i("em",[n._v("2 - 0.25等于[-0.25, 1.75)，也就是说三角形的整体走势在x方向上是向右的，偶尔会向左，大小在[0, 1.75")]),n._v("f)的范围间随机")]),n._v(" "),i("li",[n._v("q1到q2的y方向增幅为(Math.random()*2 - 1.1)"),i("em",[n._v("f，(Math.random()"),i("em",[n._v("2 - 1.1)等于[-1.1, 0.9)，也就是说三角形的整体走势在y方向上更多的概率是向上走的，大小在[0, 1.1")]),n._v("f)范围间随机。设置为1.1，我觉得本意是让三角形条能更多地经过内容区。设置为1.3的话，太靠上，不可；设置为1的话，由于左边起点为0.7")]),n._v("h，内容区在0.5左右，总体还是太靠下了。尝试了下1.2的效果也还可以")])]),n._v(" "),i("h2",{attrs:{id:"取色算法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#取色算法"}},[n._v("#")]),n._v(" 取色算法")]),n._v(" "),i("p",[n._v("颜色的取值也是重头戏，看下他是如何取到这么漂亮的颜色的。关键的一条颜色赋值代码如下：")]),n._v(" "),i("div",{staticClass:"language-text extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v("'#'+(v(r)*127+128<<16 | v(r+u/3)*127+128<<8 | v(r+u/3*2)*127+128).toString(16)\n\n其中v = Math.cos，u = 2*Math.PI; r = 0，r = r + Math.PI/25\n")])])]),i("p",[n._v("有个转化，(R,G,B)转成十六进制的颜色值可以用(R << 16 | G << 8 | B).toString(16)。也就是说，上面的颜色取值相当于：")]),n._v(" "),i("div",{staticClass:"language-text extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v("R = cos(r)*127+128;\nG = cos(r+2*PI/3)*127+128;  \nB = cos(r+4*PI/3)*127+128);\n")])])]),i("p",[n._v("那么r的取值范围是什么呢？按着每次迭代Math.PI/25的增幅，这决定于屏幕能绘制多少个三角形。上面分析过，三角形在x方向上的增幅为[-0.25"),i("em",[n._v("f, 1.75")]),n._v("f)，那么平均的增幅为0.75"),i("em",[n._v("f即67.5。假设取一般台式机屏幕的宽度为1440，那么平均可以绘制1440/67.5（20.5）个三角形。 所以，r的取值范围为[0, Math.PI")]),n._v("4/5)。每点击一次屏幕，继续绘制下一组三角形，r继续增加。由于余弦函数是周期函数，彩条的颜色也会周期性地出现重复。直接画出图像：")]),n._v(" "),i("p",[i("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-99b28f1525b5039733c653a2ca86c3e2_hd.jpg",alt:"img"}})]),n._v(" "),i("p",[n._v("这样就很直观得看到三色的走势，仔细观察页面上的进度条，真的会出现周期性的颜色。")]),n._v(" "),i("p",[n._v("突然，我明白了为什么颜色这么设置了。当然这不是唯一的取色方法。")]),n._v(" "),i("h2",{attrs:{id:"高级版"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#高级版"}},[n._v("#")]),n._v(" 高级版")]),n._v(" "),i("p",[n._v("在cnblog看到有渐变效果的，找了找加载文件，发现了")]),n._v(" "),i("p",[n._v("下面贴下源码")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v('"object" == typeof window && (window.Ribbons = function () {\n    var t = window\n        , i = document.body\n        , n = document.documentElement\n        , o = function () {\n            if (1 === arguments.length) {\n                if (Array.isArray(arguments[0])) {\n                    var t = Math.round(o(0, arguments[0].length - 1));\n                    return arguments[0][t]\n                }\n                return o(0, arguments[0])\n            }\n            return 2 === arguments.length ? Math.random() * (arguments[1] - arguments[0]) + arguments[0] : 0\n        }\n        , s = function (o) {\n            var s = Math.max(0, t.innerWidth || n.clientWidth || i.clientWidth || 0)\n                , h = Math.max(0, t.innerHeight || n.clientHeight || i.clientHeight || 0)\n                , e = Math.max(0, t.pageXOffset || n.scrollLeft || i.scrollLeft || 0) - (n.clientLeft || 0)\n                , a = Math.max(0, t.pageYOffset || n.scrollTop || i.scrollTop || 0) - (n.clientTop || 0);\n            return {\n                width: s,\n                height: h,\n                ratio: s / h,\n                centerx: s / 2,\n                centery: h / 2,\n                scrollx: e,\n                scrolly: a\n            }\n        }\n        , h = function (t, i) {\n            this.x = 0,\n            this.y = 0,\n            this.set(t, i)\n        };\n    h.prototype = {\n        constructor: h,\n        set: function (t, i) {\n            this.x = t || 0,\n            this.y = i || 0\n        },\n        copy: function (t) {\n            return this.x = t.x || 0,\n                this.y = t.y || 0,\n                this\n        },\n        multiply: function (t, i) {\n            return this.x *= t || 1,\n                this.y *= i || 1,\n                this\n        },\n        divide: function (t, i) {\n            return this.x /= t || 1,\n                this.y /= i || 1,\n                this\n        },\n        add: function (t, i) {\n            return this.x += t || 0,\n                this.y += i || 0,\n                this\n        },\n        subtract: function (t, i) {\n            return this.x -= t || 0,\n                this.y -= i || 0,\n                this\n        },\n        clampX: function (t, i) {\n            return this.x = Math.max(t, Math.min(this.x, i)),\n                this\n        },\n        clampY: function (t, i) {\n            return this.y = Math.max(t, Math.min(this.y, i)),\n                this\n        },\n        flipX: function () {\n            return this.x *= -1,\n                this\n        },\n        flipY: function () {\n            return this.y *= -1,\n                this\n        }\n    };\n    var e = function (t) {\n        this._canvas = null,\n            this._context = null,\n            this._sto = null,\n            this._width = 0,\n            this._height = 0,\n            this._scroll = 0,\n            this._ribbons = [],\n            this._options = {\n                colorSaturation: "80%",\n                colorBrightness: "60%",\n                colorAlpha: .65,\n                colorCycleSpeed: 6,\n                verticalPosition: "center",\n                horizontalSpeed: 150,\n                ribbonCount: 3,\n                strokeSize: 0,\n                parallaxAmount: -.5,\n                animateSections: !0\n            },\n            this._onDraw = this._onDraw.bind(this),\n            this._onResize = this._onResize.bind(this),\n            this._onScroll = this._onScroll.bind(this),\n            this.setOptions(t),\n            this.init()\n    };\n    return e.prototype = {\n        constructor: e,\n        setOptions: function (t) {\n            if ("object" == typeof t)\n                for (var i in t)\n                    t.hasOwnProperty(i) && (this._options[i] = t[i])\n        },\n        init: function () {\n            try {\n                this._canvas = document.createElement("canvas"),\n                    this._canvas.style.display = "block",\n                    this._canvas.style.position = "fixed",\n                    this._canvas.style.margin = "0",\n                    this._canvas.style.padding = "0",\n                    this._canvas.style.border = "0",\n                    this._canvas.style.outline = "0",\n                    this._canvas.style.left = "0",\n                    this._canvas.style.top = "0",\n                    this._canvas.style.width = "100%",\n                    this._canvas.style.height = "100%",\n                    this._canvas.style["z-index"] = "-1",\n                    this._canvas.id = "bgCanvas",\n                    this._onResize(),\n                    this._context = this._canvas.getContext("2d"),\n                    this._context.clearRect(0, 0, this._width, this._height),\n                    this._context.globalAlpha = this._options.colorAlpha,\n                    window.addEventListener("resize", this._onResize),\n                    window.addEventListener("scroll", this._onScroll),\n                    document.body.appendChild(this._canvas)\n            } catch (t) {\n                return void console.warn("Canvas Context Error: " + t.toString())\n            }\n            this._onDraw()\n        },\n        addRibbon: function () {\n            var t = Math.round(o(1, 9)) > 5 ? "right" : "left"\n                , i = 1e3\n                , n = this._width + 200\n                , s = 0\n                , e = 0\n                , a = "right" === t ? -200 : n\n                , r = Math.round(o(0, this._height));\n            /^(top|min)$/i.test(this._options.verticalPosition) ? r = 200 : /^(middle|center)$/i.test(this._options.verticalPosition) ? r = this._height / 2 : /^(bottom|max)$/i.test(this._options.verticalPosition) && (r = this._height - 200);\n            for (var l = [], c = new h(a, r), _ = new h(a, r), p = null, d = Math.round(o(0, 360)), u = 0; !(i <= 0);) {\n                if (i-- ,\n                    s = Math.round((1 * Math.random() - .2) * this._options.horizontalSpeed),\n                    e = Math.round((1 * Math.random() - .5) * (.25 * this._height)),\n                    (p = new h).copy(_),\n                    "right" === t) {\n                    if (p.add(s, e),\n                        _.x >= n)\n                        break\n                } else if ("left" === t && (p.subtract(s, e),\n                    _.x <= -200))\n                    break;\n                l.push({\n                    point1: new h(c.x, c.y),\n                    point2: new h(_.x, _.y),\n                    point3: p,\n                    color: d,\n                    delay: u,\n                    dir: t,\n                    alpha: 0,\n                    phase: 0\n                }),\n                    c.copy(_),\n                    _.copy(p),\n                    u += 4,\n                    d += this._options.colorCycleSpeed\n            }\n            this._ribbons.push(l)\n        },\n        _drawRibbonSection: function (t) {\n            if (t) {\n                if (t.phase >= 1 && t.alpha <= 0)\n                    return !0;\n                if (t.delay <= 0) {\n                    if (t.phase += .02,\n                        t.alpha = 1 * Math.sin(t.phase),\n                        t.alpha = t.alpha <= 0 ? 0 : t.alpha,\n                        t.alpha = t.alpha >= 1 ? 1 : t.alpha,\n                        this._options.animateSections) {\n                        var i = .1 * Math.sin(1 + t.phase * Math.PI / 2);\n                        "right" === t.dir ? (t.point1.add(i, 0),\n                            t.point2.add(i, 0),\n                            t.point3.add(i, 0)) : (t.point1.subtract(i, 0),\n                                t.point2.subtract(i, 0),\n                                t.point3.subtract(i, 0)),\n                            t.point1.add(0, i),\n                            t.point2.add(0, i),\n                            t.point3.add(0, i)\n                    }\n                } else\n                    t.delay -= .5;\n                var n = this._options.colorSaturation\n                    , o = this._options.colorBrightness\n                    , s = "hsla(" + t.color + ", " + n + ", " + o + ", " + t.alpha + " )";\n                this._context.save(),\n                    0 !== this._options.parallaxAmount && this._context.translate(0, this._scroll * this._options.parallaxAmount),\n                    this._context.beginPath(),\n                    this._context.moveTo(t.point1.x, t.point1.y),\n                    this._context.lineTo(t.point2.x, t.point2.y),\n                    this._context.lineTo(t.point3.x, t.point3.y),\n                    this._context.fillStyle = s,\n                    this._context.fill(),\n                    this._options.strokeSize > 0 && (this._context.lineWidth = this._options.strokeSize,\n                        this._context.strokeStyle = s,\n                        this._context.lineCap = "round",\n                        this._context.stroke()),\n                    this._context.restore()\n            }\n            return !1\n        },\n        _onDraw: function () {\n            for (var t = 0, i = this._ribbons.length; t < i; ++t)\n                this._ribbons[t] || this._ribbons.splice(t, 1);\n            this._context.clearRect(0, 0, this._width, this._height);\n            for (var n = 0; n < this._ribbons.length; ++n) {\n                for (var o = this._ribbons[n], s = o.length, h = 0, e = 0; e < s; ++e)\n                    this._drawRibbonSection(o[e]) && h++;\n                h >= s && (this._ribbons[n] = null)\n            }\n            this._ribbons.length < this._options.ribbonCount && this.addRibbon(),\n                requestAnimationFrame(this._onDraw)\n        },\n        _onResize: function (t) {\n            var i = s();\n            this._width = i.width,\n                this._height = i.height,\n                this._canvas && (this._canvas.width = this._width,\n                    this._canvas.height = this._height,\n                    this._context && (this._context.globalAlpha = this._options.colorAlpha))\n        },\n        _onScroll: function (t) {\n            var i = s();\n            this._scroll = i.scrolly\n        }\n    },\n        e\n}()),\n    new Ribbons();\n')])])]),i("h1",{attrs:{id:"大白"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#大白"}},[n._v("#")]),n._v(" 大白")]),n._v(" "),i("h2",{attrs:{id:"html"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[n._v("#")]),n._v(" html")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v('<div id="bigwhite">\n    \x3c!--头部--\x3e\n    <div id="head">\n        <div id="eye"></div>\n        <div id="eye2"></div>\n        <div id="mouth"></div>\n    </div>\n    \x3c!--躯干--\x3e\n    <div id="torso">\n        <div id="heart"></div>\n    </div>\n    <div id="belly">\n        <div id="cover"></div>\n        \x3c!--和躯干连接处--\x3e\n    </div>\n    \x3c!--左臂--\x3e\n    <div id="left-arm">\n        <div id="l-bigfinger"></div>\n        <div id="l-smallfinger"></div>\n    </div>\n    \x3c!--右臂--\x3e\n    <div id="right-arm">\n        <div id="r-bigfinger"></div>\n        <div id="r-smallfinger"></div>\n    </div>\n    \x3c!--左腿--\x3e\n    <div id="left-leg"></div>\n    \x3c!--右腿--\x3e\n    <div id="right-leg"></div>\n</div>\n')])])]),i("h2",{attrs:{id:"css"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[n._v("#")]),n._v(" css")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v("#bigwhite {\n    margin: 0 auto;\n    height: 600px;\n    /*隐藏溢出*/\n    overflow: hidden;\n}\n#head {\n    height: 64px;\n    width: 100px;\n    /*画圆*/\n    border-radius: 50%;\n    background: #fff;\n    margin: 0 auto;\n    margin-bottom: -20px;\n    border-bottom: 5px solid #e0e0e0;\n    /*元素的堆叠顺序*/\n    z-index: 100;\n    position: relative;\n}\n#eye,\n#eye2 {\n    width: 11px;\n    height: 13px;\n    background: #282828;\n    border-radius: 50%;\n    position: relative;\n    top: 30px;\n    left: 27px;\n    /*旋转元素*/\n    transform: rotate(8deg);\n}\n#eye2 {\n    /*对称旋转*/\n    transform: rotate(-8deg);\n    left: 69px;\n    top: 17px;\n}\n#mouth {\n    width: 38px;\n    height: 1.7px;\n    background: #282828;\n    position: relative;\n    top: 10px;\n    left: 34px;\n}\n#torso,\n#belly {\n    margin: 0 auto;\n    height: 200px;\n    width: 180px;\n    background: #fff;\n    border-radius: 47%;\n    border: 5px solid #e0e0e0;\n    border-top: none;\n    z-index: 1;\n}\n#belly {\n    height: 300px;\n    width: 245px;\n    margin-top: -140px;\n    z-index: 5;\n}\n#heart {\n    width: 25px;\n    height: 25px;\n    border-radius: 50px;\n    position: relative;\n    /*添加阴影*/\n    box-shadow: 2px 5px 2px #ccc inset;\n    right: -115px;\n    top: 40px;\n    z-index: 111;\n    border: 1px solid #ccc;\n}\n#left-arm,\n#right-arm {\n    height: 270px;\n    width: 120px;\n    border-radius: 50%;\n    background: #fff;\n    margin: 0 auto;\n    position: relative;\n    top: -350px;\n    left: -100px;\n    transform: rotate(200deg);\n    z-index: -1;\n}\n#right-arm {\n    transform: rotate(-200deg);\n    left: 100px;\n    top: -620px;\n}\n#l-bigfinger,\n#r-bigfinger {\n    height: 50px;\n    width: 20px;\n    border-radius: 50%;\n    background: #fff;\n    position: relative;\n    top: -35px;\n    left: 39px;\n    transform: rotate(-50deg);\n}\n#r-bigfinger {\n    left: 63px;\n    transform: rotate(50deg);\n}\n#l-smallfinger,\n#r-smallfinger {\n    height: 35px;\n    width: 15px;\n    border-radius: 50%;\n    background: #fff;\n    position: relative;\n    top: -70px;\n    left: 25px;\n    transform: rotate(-40deg);\n}\n#r-smallfinger {\n    background: #fff;\n    transform: rotate(40deg);\n    top: -70px;\n    left: 80px;\n}\n#left-leg,\n#right-leg {\n    height: 170px;\n    width: 90px;\n    border-radius: 40% 30% 10px 45%;\n    background: #fff;\n    position: relative;\n    top: -640px;\n    left: -45px;\n    transform: rotate(-1deg);\n    margin: 0 auto;\n    z-index: -2;\n}\n#right-leg {\n    border-radius: 40% 30% 45% 10px;\n    position: relative;\n    margin: 0 auto;\n    top: -810px;\n    left: 50px;\n    transform: rotate(1deg);\n}\n")])])]),i("h2",{attrs:{id:"原理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[n._v("#")]),n._v(" 原理")]),n._v(" "),i("p",[n._v("实现起来并不难，主要用到border-radius")]),n._v(" "),i("p",[n._v("这里有个平时没注意到的知识点")]),n._v(" "),i("div",{staticClass:"language-css extra-class"},[i("pre",{pre:!0,attrs:{class:"language-css"}},[i("code",[i("span",{pre:!0,attrs:{class:"token property"}},[n._v("box-shadow")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" 2px 5px 2px #ccc inset"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\nx偏移量 | y偏移量 | 阴影模糊半径 | 阴影颜色 | 阴影方向\ninset 向内\n")])])]),i("h1",{attrs:{id:"canvas验证码"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#canvas验证码"}},[n._v("#")]),n._v(" canvas验证码")]),n._v(" "),i("h2",{attrs:{id:"html-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#html-2"}},[n._v("#")]),n._v(" html")]),n._v(" "),i("p",[i("canvas",{attrs:{width:"120",height:"40",id:"c1"}})]),n._v(" "),i("h2",{attrs:{id:"js"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[n._v("#")]),n._v(" js")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v('// 随机数\nfunction rn(min, max) {\n  return parseInt(Math.random() * (max - min) + min);\n}\n// 随机颜色\nfunction rc(min, max) {\n  var r = rn(min, max);\n  var g = rn(min, max);\n  var b = rn(min, max);\n  return `rgb(${r},${g},${b})`;\n}\n// 背景颜色,颜色要浅一点\nvar w = 120;\nvar h = 40;\nvar ctx = c1.getContext("2d");\nctx.fillStyle = rc(180, 230);\nctx.fillRect(0, 0, w, h);\n// 随机字符串\nvar pool = "ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890";\nfor (var i = 0; i < 4; i++) {\n  var c = pool[rn(0, pool.length)]; //随机的字\n  var fs = rn(18, 40); //字体的大小\n  var deg = rn(-30, 30); //字体的旋转角度\n  ctx.font = fs + "px Simhei";\n  ctx.textBaseline = "top";\n  ctx.fillStyle = rc(80, 150);\n  ctx.save();\n  ctx.translate(30 * i + 15, 15);\n  ctx.rotate((deg * Math.PI) / 180);\n  ctx.fillText(c, -15 + 5, -15);\n  ctx.restore();\n}\n// 随机5条干扰线,干扰线的颜色要浅一点\nfor (var i = 0; i < 5; i++) {\n  ctx.beginPath();\n  ctx.moveTo(rn(0, w), rn(0, h));\n  ctx.lineTo(rn(0, w), rn(0, h));\n  ctx.strokeStyle = rc(180, 230);\n  ctx.closePath();\n  ctx.stroke();\n}\n// 随机产生40个干扰的小点\nfor (var i = 0; i < 40; i++) {\n  ctx.beginPath();\n  ctx.arc(rn(0, w), rn(0, h), 1, 0, 2 * Math.PI);\n  ctx.closePath();\n  ctx.fillStyle = rc(150, 200);\n  ctx.fill();\n}\n')])])]),i("h1",{attrs:{id:"抖音logo"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#抖音logo"}},[n._v("#")]),n._v(" 抖音logo")]),n._v(" "),i("h2",{attrs:{id:"分析"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[n._v("#")]),n._v(" 分析")]),n._v(" "),i("p",[n._v("抖音 logo 是两个音符 ♪ 叠加、混合而成的。这个音符可以拆分为三个部分:")]),n._v(" "),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/LNrWl4n5XILPsMDzicdJ60JLPeApyeqUPIEzOT95s50X3kVzHlAa29d8N6dghemSC6kwZOlricWM5ZuQSNd7y8wA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"img"}})]),n._v(" "),i("p",[n._v("2和3用border（某些边透明）加圆角50%即可实现")]),n._v(" "),i("p",[n._v("音符合成用到了一个属性")]),n._v(" "),i("p",[n._v("mix-blend-mode")]),n._v(" "),i("p",[n._v("这里用mix-blend-mode: lighten实现")]),n._v(" "),i("p",[n._v("文档可查，这里不深入研究了，都是些ps概念，看不懂")]),n._v(" "),i("h2",{attrs:{id:"code"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[n._v("#")]),n._v(" code")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v('<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n    <style>\n        body {\n            background: #000;\n            overflow: hidden;\n        }\n\n        .g-container {\n            position: relative;\n            width: 200px;\n            margin: 100px auto;\n            filter: contrast(150%) brightness(110%);\n        }\n\n        .j {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 47px;\n            height: 218px;\n            z-index: 1;\n            background: #24f6f0;\n\n\n        }\n\n        .j::before {\n            content: "";\n            position: absolute;\n            width: 100px;\n            height: 100px;\n            border: 47px solid #24f6f0;\n            border-top: 47px solid transparent;\n            border-radius: 50%;\n            top: 121px;\n            left: -147px;\n            transform: rotate(45deg);\n        }\n\n        .j::after {\n            content: "";\n            position: absolute;\n            width: 140px;\n            height: 140px;\n            border: 40px solid #24f6f0;\n            border-right: 40px solid transparent;\n            border-top: 40px solid transparent;\n            border-left: 40px solid transparent;\n            top: -110px;\n            right: -183px;\n            border-radius: 100%;\n            transform: rotate(45deg);\n            z-index: -10;\n        }\n\n        .j:last-child {\n            left: 10px;\n            top: 10px;\n            background: #fe2d52;\n            z-index: 100;\n            mix-blend-mode: lighten;\n            animation: moveLeft 10s infinite;\n        }\n\n        .j:last-child::before {\n            border: 47px solid #fe2d52;\n            border-top: 47px solid transparent;\n        }\n\n        .j:last-child::after {\n            border: 40px solid #fe2d52;\n            border-right: 40px solid transparent;\n            border-top: 40px solid transparent;\n            border-left: 40px solid transparent;\n        }\n\n        @keyframes moveLeft {\n            0% {\n                transform: translate(200px);\n            }\n\n            50% {\n                transform: translate(0px);\n            }\n\n            100% {\n                transform: translate(0px);\n            }\n        }\n    </style>\n</head>\n\n<body>\n    <div class="g-container">\n        <div class="j"></div>\n        <div class="j"></div>\n    </div>\n</body>\n\n</html>\n')])])]),i("h1",{attrs:{id:"波浪百分比"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#波浪百分比"}},[n._v("#")]),n._v(" 波浪百分比")]),n._v(" "),i("h2",{attrs:{id:"分析-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#分析-2"}},[n._v("#")]),n._v(" 分析")]),n._v(" "),i("p",[n._v("这里我简单说明一下关键点：")]),n._v(" "),i("ul",[i("li",[n._v("利用 "),i("code",[n._v("border-radius")]),n._v(" 生成椭圆")]),n._v(" "),i("li",[n._v("让椭圆旋转起来")]),n._v(" "),i("li",[n._v("并不是利用旋转的椭圆本身生成波浪效果，而是利用它去切割背景，产生波浪的效果。")])]),n._v(" "),i("h2",{attrs:{id:"code-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#code-2"}},[n._v("#")]),n._v(" code")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v('<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n    <style>\n        .container {\n            position: absolute;\n            width: 200px;\n            height: 200px;\n            padding: 5px;\n            border: 5px solid rgb(0, 102, 204);\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            border-radius: 50%;\n            overflow: hidden;\n        }\n\n        .wave {\n            position: relative;\n            width: 200px;\n            height: 200px;\n            background-color: rgb(51, 102, 204);\n            border-radius: 50%;\n\n        }\n\n        .wave::before,\n        .wave::after {\n            content: "";\n            position: absolute;\n            width: 400px;\n            height: 400px;\n            top: 0;\n            left: 50%;\n            background-color: rgba(255, 255, 255, 0.4);\n            border-radius: 45%;\n            transform: translate(-50%, -70%) rotate(0);\n            animation: rotate 6s linear infinite;\n            z-index: 10;\n        }\n\n        .wave::after {\n            border-radius: 47%;\n            background-color: rgba(255, 255, 255, 0.9);\n            transform: translate(-50%, -70%) rotate(0);\n            animation: rotate 10s linear -5s infinite;\n            z-index: 20;\n        }\n\n        @keyframes rotate {\n            50% {\n                transform: translate(-50%, -73%) rotate(180deg);\n            }\n\n            100% {\n                transform: translate(-50%, -70%) rotate(360deg);\n            }\n        }\n    </style>\n</head>\n\n<body>\n    <div class="container">\n        <div class="wave"></div>\n    </div>\n</body>\n\n</html>\n')])])]),i("h1",{attrs:{id:"充电效果"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#充电效果"}},[n._v("#")]),n._v(" 充电效果")]),n._v(" "),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_gif/LNrWl4n5XIKZ9ic7Cuns6fmWpnI0LfxtLR863uXrJ4amLHWvVs0S8tRautVI4mVkiabfc8QcI1JQcr1NvjYquqeg/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1",alt:"img"}})]),n._v(" "),i("h2",{attrs:{id:"分析-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#分析-3"}},[n._v("#")]),n._v(" 分析")]),n._v(" "),i("ul",[i("li",[i("p",[n._v("画一个电池")])]),n._v(" "),i("li",[i("p",[n._v("增加阴影及颜色的变化（使用 "),i("code",[n._v("filter: hue-rotate()")]),n._v(" 对渐变色彩进行色彩过渡变换动画）")])]),n._v(" "),i("li",[i("p",[n._v("添加波浪，这里用一张动图说明（结合上个"),i("code",[n._v("波浪百分比")]),n._v("，相信你很快就明白了）")]),n._v(" "),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_gif/LNrWl4n5XILPsMDzicdJ60JLPeApyeqUPibc8E4e7cg9yXaFpjDwje0JVdvLdYKJgXsClrGquo8TvmebjEaRTAyw/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1",alt:"img"}})])])]),n._v(" "),i("h2",{attrs:{id:"code-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#code-3"}},[n._v("#")]),n._v(" code")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v('<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n    <style>\n        html,\n        body {\n            width: 100%;\n            height: 100%;\n            display: flex;\n            background: #e4e4e4;\n        }\n\n        .container {\n            position: relative;\n            width: 140px;\n            margin: auto;\n        }\n\n        .header {\n            position: absolute;\n            width: 26px;\n            height: 10px;\n            left: 50%;\n            top: 0;\n            transform: translate(-50%, -10px);\n            border-radius: 5px 5px 0 0;\n            background: rgba(255, 255, 255, 0.88);\n        }\n\n        .battery-copy {\n            position: absolute;\n            top: 0;\n            left: 0;\n            height: 220px;\n            width: 140px;\n            border-radius: 15px 15px 5px 5px;\n            overflow: hidden;\n        }\n\n        .battery {\n            position: relative;\n            height: 220px;\n            box-sizing: border-box;\n            border-radius: 15px 15px 5px 5px;\n            box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.22);\n            background: #fff;\n            z-index: 1;\n        }\n\n        .battery::after {\n            content: "";\n            position: absolute;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            top: 80%;\n            background: linear-gradient(to bottom,\n                    #7abcff 0%,\n                    #00bcd4 44%,\n                    #2196f3 100%);\n            border-radius: 0px 0px 5px 5px;\n            box-shadow: 0 14px 28px rgba(33, 150, 243, 0),\n                0 10px 10px rgba(9, 188, 215, 0.08);\n            animation: charging 10s linear infinite;\n            filter: hue-rotate(90deg);\n        }\n\n        .g-wave {\n            position: absolute;\n            width: 300px;\n            height: 300px;\n            background: rgba(255, 255, 255, 0.8);\n            border-radius: 45% 47% 44% 42%;\n            bottom: 25px;\n            left: 50%;\n            transform: translate(-50%, 0);\n            z-index: 1;\n            animation: move 10s linear infinite;\n        }\n\n        .g-wave:nth-child(2) {\n            border-radius: 38% 46% 43% 47%;\n            transform: translate(-50%, 0) rotate(-135deg);\n        }\n\n        .g-wave:nth-child(3) {\n            border-radius: 42% 46% 37% 40%;\n            transform: translate(-50%, 0) rotate(135deg);\n        }\n\n        @keyframes charging {\n            50% {\n                box-shadow: 0 14px 28px rgba(0, 150, 136, 0.83),\n                    0px 4px 10px rgba(9, 188, 215, 0.4);\n            }\n\n            95% {\n                top: 5%;\n                filter: hue-rotate(0deg);\n                border-radius: 0 0 5px 5px;\n                box-shadow: 0 14px 28px rgba(4, 188, 213, 0.2),\n                    0 10px 10px rgba(9, 188, 215, 0.08);\n            }\n\n            100% {\n                top: 0%;\n                filter: hue-rotate(0deg);\n                border-radius: 15px 15px 5px 5px;\n                box-shadow: 0 14px 28px rgba(4, 188, 213, 0),\n                    0 10px 10px rgba(9, 188, 215, 0.4);\n            }\n        }\n\n        @keyframes move {\n            100% {\n                transform: translate(-50%, -160px) rotate(720deg);\n            }\n        }\n    </style>\n</head>\n\n<body>\n    <div class="container">\n        <div class="header"></div>\n        <div class="battery">\n        </div>\n        <div class="battery-copy">\n            <div class="g-wave"></div>\n            <div class="g-wave"></div>\n            <div class="g-wave"></div>\n        </div>\n    </div>\n</body>\n\n</html>\n')])])]),i("h1",{attrs:{id:"知乎-老版本-首页动态粒子效果背景"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#知乎-老版本-首页动态粒子效果背景"}},[n._v("#")]),n._v(" 知乎（老版本）首页动态粒子效果背景")]),n._v(" "),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_gif/LNrWl4n5XILPsMDzicdJ60JLPeApyeqUPvVEKK5LM3W7bicDB7kdXMkzK3LW2hR9LOQcP9uo0Om9oGGcAkibqyQLA/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1",alt:"img"}})]),n._v(" "),i("h2",{attrs:{id:"思路"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[n._v("#")]),n._v(" 思路")]),n._v(" "),i("p",[n._v("涉及到的知识点主要是："),i("code",[n._v("canvas")]),n._v("、"),i("code",[n._v("ES6")]),n._v("、"),i("code",[n._v("requestAnimationFrame")])]),n._v(" "),i("p",[n._v("大致思路就是：")]),n._v(" "),i("ul",[i("li",[i("p",[n._v("定义一个类，创建圆和线的实例")])]),n._v(" "),i("li",[i("p",[n._v("设置单个粒子的随机 x，y 坐标和圆圈的半径。使用"),i("code",[n._v("window.innerWidth")]),n._v("和"),i("code",[n._v("window.innerHeight")]),n._v("获取屏幕宽高，圆的大小设置在一定范围内随机")])]),n._v(" "),i("li",[i("p",[n._v("使用 "),i("code",[n._v("canvas")]),n._v(" 的 api 进行绘制粒子（圆圈）和粒子之间连线，设置一个范围，在此范围内的粒子圆心到圆心通过直线连接")])]),n._v(" "),i("li",[i("p",[n._v("让粒子在屏幕范围内移动")])]),n._v(" "),i("li",[i("p",[n._v("置鼠标的交互事件，相当于以鼠标位置的 x,y 坐标为圆心，固定或随机值为半径重新创建了一个粒子，并且也在一定范围内也设置和其他粒子的连线（同第二步）")])]),n._v(" "),i("li",[i("p",[n._v("定义一个变量用来存储生成的圆，遍历它，创建实例；")])]),n._v(" "),i("li",[i("p",[n._v("使用"),i("code",[n._v("requestAnimationFrame")]),n._v("让所有圆动起来")])])]),n._v(" "),i("h2",{attrs:{id:"html-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#html-3"}},[n._v("#")]),n._v(" html")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v('<canvas id="canvas"></canvas>\n')])])]),i("h2",{attrs:{id:"css-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#css-2"}},[n._v("#")]),n._v(" css")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v("html {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  height: 100%;\n  background: #fff;\n}\ncanvas {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n")])])]),i("h2",{attrs:{id:"js-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#js-2"}},[n._v("#")]),n._v(" js")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v('class Circle {\n  //创建对象\n  //以一个圆为对象\n  //设置随机的 x，y坐标，r半径，_mx，_my移动的距离\n  //this.r是创建圆的半径，参数越大半径越大\n  //this._mx,this._my是移动的距离，参数越大移动\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n    this.r = Math.random() * 10;\n    this._mx = Math.random();\n    this._my = Math.random();\n  }\n\n  //canvas 画圆和画直线\n  //画圆就是正常的用canvas画一个圆\n  //画直线是两个圆连线，为了避免直线过多，给圆圈距离设置了一个值，距离很远的圆圈，就不做连线处理\n  drawCircle(ctx) {\n    ctx.beginPath();\n    //arc() 方法使用一个中心点和半径，为一个画布的当前子路径添加一条弧。\n    ctx.arc(this.x, this.y, this.r, 0, 360);\n    ctx.closePath();\n    ctx.fillStyle = "rgba(204, 204, 204, 0.3)";\n    ctx.fill();\n  }\n\n  drawLine(ctx, _circle) {\n    let dx = this.x - _circle.x;\n    let dy = this.y - _circle.y;\n    let d = Math.sqrt(dx * dx + dy * dy);\n    if (d < 150) {\n      ctx.beginPath();\n      //开始一条路径，移动到位置 this.x,this.y。创建到达位置 _circle.x,_circle.y 的一条线：\n      ctx.moveTo(this.x, this.y); //起始点\n      ctx.lineTo(_circle.x, _circle.y); //终点\n      ctx.closePath();\n      ctx.strokeStyle = "rgba(204, 204, 204, 0.3)";\n      ctx.stroke();\n    }\n  }\n\n  // 圆圈移动\n  // 圆圈移动的距离必须在屏幕范围内\n  move(w, h) {\n    this._mx = this.x < w && this.x > 0 ? this._mx : -this._mx;\n    this._my = this.y < h && this.y > 0 ? this._my : -this._my;\n    this.x += this._mx / 2;\n    this.y += this._my / 2;\n  }\n}\n//鼠标点画圆闪烁变动\nclass currentCirle extends Circle {\n  constructor(x, y) {\n    super(x, y);\n  }\n\n  drawCircle(ctx) {\n    ctx.beginPath();\n    //注释内容为鼠标焦点的地方圆圈半径变化\n    //this.r = (this.r < 14 && this.r > 1) ? this.r + (Math.random() * 2 - 1) : 2;\n    this.r = 8;\n    ctx.arc(this.x, this.y, this.r, 0, 360);\n    ctx.closePath();\n    //ctx.fillStyle = \'rgba(0,0,0,\' + (parseInt(Math.random() * 100) / 100) + \')\'\n    ctx.fillStyle = "rgba(255, 77, 54, 0.6)";\n    ctx.fill();\n  }\n}\n//更新页面用requestAnimationFrame替代setTimeout\nwindow.requestAnimationFrame =\n  window.requestAnimationFrame ||\n  window.mozRequestAnimationFrame ||\n  window.webkitRequestAnimationFrame ||\n  window.msRequestAnimationFrame;\n\nlet canvas = document.getElementById("canvas");\nlet ctx = canvas.getContext("2d");\nlet w = (canvas.width = canvas.offsetWidth);\nlet h = (canvas.height = canvas.offsetHeight);\nlet circles = [];\nlet current_circle = new currentCirle(0, 0);\n\nlet draw = function() {\n  ctx.clearRect(0, 0, w, h);\n  for (let i = 0; i < circles.length; i++) {\n    circles[i].move(w, h);\n    circles[i].drawCircle(ctx);\n    for (j = i + 1; j < circles.length; j++) {\n      circles[i].drawLine(ctx, circles[j]);\n    }\n  }\n  if (current_circle.x) {\n    current_circle.drawCircle(ctx);\n    for (var k = 1; k < circles.length; k++) {\n      current_circle.drawLine(ctx, circles[k]);\n    }\n  }\n  requestAnimationFrame(draw);\n};\n\nlet init = function(num) {\n  for (var i = 0; i < num; i++) {\n    circles.push(new Circle(Math.random() * w, Math.random() * h));\n  }\n  draw();\n};\nwindow.addEventListener("load", init(60));\nwindow.onmousemove = function(e) {\n  e = e || window.event;\n  current_circle.x = e.clientX;\n  current_circle.y = e.clientY;\n};\nwindow.onmouseout = function() {\n  current_circle.x = null;\n  current_circle.y = null;\n};\n')])])]),i("h1",{attrs:{id:"注释"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[n._v("#")]),n._v(" 注释")]),n._v(" "),i("p",[n._v("本篇绝大部分代码为复制粘贴")]),n._v(" "),i("p",[n._v("出处https://mp.weixin.qq.com/s/v6FWeoaksvrP4vVto4j_WQ")])])}),[],!1,null,null,null);t.default=a.exports}}]);