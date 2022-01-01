(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{488:function(n,e,a){"use strict";a.r(e);var t=a(70),s=Object(t.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[n._v("#")]),n._v(" 安装")]),n._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("npm install typescript -g\n\ntsc --version\n\nnpm init -y\n\ntsc --init\n\nnpm install @types/node --dev-save\n")])])]),a("h3",{attrs:{id:"转js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转js"}},[n._v("#")]),n._v(" 转js")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("tsc xxx.ts\n\nnode xxx.js\n")])])]),a("h3",{attrs:{id:"自带支持es6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自带支持es6"}},[n._v("#")]),n._v(" 自带支持es6")]),n._v(" "),a("p",[n._v("​")]),n._v(" "),a("h3",{attrs:{id:"vscode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode"}},[n._v("#")]),n._v(" vscode")]),n._v(" "),a("p",[n._v("ctrl ` 打开terminal")]),n._v(" "),a("h3",{attrs:{id:"类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[n._v("#")]),n._v(" 类型")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("var age:number = 18\nvar height:number = 178.5\nconsole.log(age)\nconsole.log(height)\n\nvar lz:string = 'fwefewf'\n\nconsole.log(lz)\n\nvar b:boolean = true\nvar c:boolean = false\n\nconsole.log(b,c)\n\nenum REN{nan='nan', nv='nv', yao='yao'}\nconsole.log(REN)\n// { '0': 'nan', '1': 'nv', '2': 'yao', nan: 0, nv: 1, yao: 2 }\n// { nan: 'nan', nv: 'nv', yao: 'yao' }\n\nvar t:any = 10\nt = 'lz'\nt=true\nconsole.log(t)\n\n// null\n\n")])])]),a("h3",{attrs:{id:"函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[n._v("#")]),n._v(" 函数")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function find(age:number=11, height?:string):string{\n    let result:string = ''\n    result = age + ''\n    if (height) {\n        result = result + height\n    }\n    return result\n}\n\nvar age:number = 18\nvar height:string = 'fewfw'\n\nvar result:string = find()\n\nconsole.log(result)\n-------------------------------------\nfunction find1(...arr:string[]):string{\n    let result:string = ''\n    arr.map((item, index) => {\n        result += item\n        if (index < arr.length - 1) {\n            result += '、'\n        }\n    })\n    return result\n}\n\nvar result1:string = find1('1', '2', '3')\n\nconsole.log(result1)\n")])])]),a("h3",{attrs:{id:"声明函数方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明函数方式"}},[n._v("#")]),n._v(" 声明函数方式")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 函数声明法\nfunction add (n1:number, n2:number):number {\n    return n1 + n2\n}\n\n// 函数表达式\nconst add1 = function (n1:number, n2:number):number {\n    return n1 + n2\n}\nconsole.log(add1(1, 2))\n\n// es6\nconst add2 = (n1:number, n2:number):number => {\n    return n1 + n2\n}\nconsole.log(add2(1, 2))\n")])])]),a("h3",{attrs:{id:"数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[n._v("#")]),n._v(" 数组")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 字面量赋值\nlet arr1:number[] = [1,2,3]\nlet arr2:Array<string> = ['1','2']\n\n// 构造函数赋值\nlet arr3:number[] = new Array(1,2)\nlet arr4:Array<number> = new Array(1,2)\n\n// 元祖\nlet x :[string, number]\nx = ['hello', 10]\n")])])]),a("h3",{attrs:{id:"日期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日期"}},[n._v("#")]),n._v(" 日期")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("let d:Date = new Date(1000) // 1970-01-01 00:00:00     加的ms数\nconsole.log(d)\n\nlet d1:Date = new Date('2019/05/27 05:27:00')\nlet d2:Date = new Date('2019-05-27 05:27:00')\nlet d3:Date = new Date('2019-05-27T05:27:00')\nconsole.log(d1)\nconsole.log(d2)\nconsole.log(d3)\n\nlet d:Date = new Date(year,month,day,hours,minutes,seconds,ms);\n")])])]),a("h3",{attrs:{id:"正则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则"}},[n._v("#")]),n._v(" 正则")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 构造函数声明法\nlet reg1:RegExp = new RegExp('lz')\nconsole.log(reg1)\nlet reg2:RegExp = new RegExp('lz', 'gi')    // g 全局 i 忽略大小写\nconsole.log(reg2)\n\n// 字面量声明\nlet reg3:RegExp = /lz/i\nconsole.log(reg3)\n\n// test\nlet reg4:RegExp = /lz/i\nlet s:string = 'lZ'\nlet result:boolean = reg4.test(s)\nconsole.log(result)\n\n// exec 找到返回数组，前面的为找到的，后面是输入的  没有 null\nlet reg5:RegExp =  /jspang/i\nlet website:string = 'jspang.com'\nconsole.log(reg5.exec(website))\n//[ 'jspang', index: 0, input: 'jspang.com' ]\n")])])]),a("h3",{attrs:{id:"类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类"}},[n._v("#")]),n._v(" 类")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 类是对象具体事物的一个抽象，对象是类的具体表现\n// 类名大驼峰法\nclass XiaoJieJie {\n    name:string\n    age:number\n    constructor (name:string, age:number) {\n        this.name = name\n        this.age = age\n    }\n    say () {\n        console.log('hao')\n    }\n}\n\nlet jie:XiaoJieJie = new XiaoJieJie('bingbing', 18)\nconsole.log(jie)\njie.say()\n")])])]),a("h3",{attrs:{id:"修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修饰符"}},[n._v("#")]),n._v(" 修饰符")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// public protectes private readonly\n\nclass XiaoJieJie {\n    public sex:string\n    protected name:string\n    private age:number\n    constructor (name:string, age:number, sex:string) {\n        this.name = name\n        this.age = age\n        this.sex = sex\n    }\n    public say () {\n        console.log('hao')\n    }\n    protected sayLove () {\n        console.log('love')\n    }\n    public sayDo () {\n        console.log('do')\n    }\n}\n\nlet jie:XiaoJieJie = new XiaoJieJie('bingbing', 18, 'man')\nconsole.log(jie)\njie.say()\n\nclass Man {\n    public readonly sex:string = 'nan'\n}\nlet man:Man = new Man()\n\n\n")])])]),a("h3",{attrs:{id:"继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[n._v("#")]),n._v(" 继承")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// super 调父类东西   extends 继承\n\nclass Lz {\n    public name:string\n    public age:number\n    public skill:string\n    constructor(name:string,age:number,skill:string) {\n        this.name = name\n        this.age = age\n        this.skill = skill\n    }\n    public hi () {\n        console.log('hi')\n    }\n}\n\nlet lz:Lz = new Lz('来自', 18, 'web')\nlz.hi()\n\nclass Lzz extends Lz {\n    public size:number = 18\n    public money () {\n        console.log('money')\n    }\n    public hi () {\n        super.hi()\n        console.log('hi1')\n    }\n}\n\nlet lzz:Lzz = new Lzz('1', 19, '2')\nconsole.log(lzz)\nlzz.hi()\nlzz.money()\n")])])]),a("h3",{attrs:{id:"接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[n._v("#")]),n._v(" 接口")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// search\n\ninterface Man {\n    sex:string\n    age:number\n    maibaobao?:Boolean   // 可选参数\n}\nlet myMan:Man = {sex:'nan', age:18,maibaobao:true}\nconsole.log(myMan)\n\n\n\ninterface  SearchMan{\n    (source:string,subString:string):boolean\n}\n\nlet mySearch:SearchMan\n\nmySearch = function(source:string,subString:string):boolean{\n    let flag = source.search(subString)\n    return (flag != -1)\n} \n\nconsole.log(mySearch('高、富、帅、德','胖')) //false\n")])])]),a("h3",{attrs:{id:"命名空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名空间"}},[n._v("#")]),n._v(" 命名空间")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("namespace ShuaiGe {\n    export class Dehua {\n        public name:string = 'liudehua'\n        talk () {\n            console.log(this.name)\n        }\n    }\n}\n\nnamespace ShuaiGe1 {\n    export class Dehua {\n        public name:string = 'madehua'\n        talk () {\n            console.log(this.name)\n        }\n    }\n}\n\nlet dehua:ShuaiGe.Dehua = new ShuaiGe.Dehua\nlet dehua1:ShuaiGe1.Dehua = new ShuaiGe1.Dehua\n\ndehua.talk()\ndehua1.talk()\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);