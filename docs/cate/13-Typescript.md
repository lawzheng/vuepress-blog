### 类型体操
// key做类型
type KeysToUnion<T> = keyof T;

// value做类型
type Values<T> = T[KeysToUnion<T>];

// key做类型的数组
type KeysToTuple<T> = KeysToUnion<T>[];

// 挑选value符合类型的
type ExtractValues<T, V> = {
  [Key in keyof T as T[Key] extends V ? Key : never]: T[Key];
};

// 排除value符合类型的
type ExcludeValues<T, V> = {
  [Key in keyof T as T[Key] extends V ? never : Key]: T[Key];
};

// 每个key需添加get set
type GetterSetterPrefix<T> = {
  [Key in keyof T as Key extends string
    ? `get${Capitalize<Key>}`
    : never]: () => T[Key];
} & {
  [Key in keyof T as Key extends string ? `set${Capitalize<Key>}` : never]: (
    val: T[Key]
  ) => void;
} & T;

// value转成get set
type Proxify<T> = {
  [P in keyof T]: {
    get: () => T[P];
    set: (v: T[P]) => void;
  };
};

// key转成可选的，value支持传null
type NullableValue<T> = {
  [Key in keyof T]?: Nullable<T[Key]>;
};

// 挑选所需要的key
type Include<T extends object, U extends keyof any> = {
  [Key in keyof T as Key extends U ? Key : never]: T[Key];
};

// 改key对应的type为传入的值
type ChangeRecordType<K, T = undefined> = {
  [P in keyof K]?: T;
};

// 值变为可改的
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

// 变为只读和可选
type ReadonlyPartial<T> = {
  readonly [P in keyof T]?: T[P];
};

// 所有属性转可选
type DeepPartial<T> = {
  [Key in keyof T]?: T[Key] extends object ? DeepPartial<T[Key]> : T[Key];
};

// 手写 Readonly
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// 手写 Partial
type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

// 手写 Pick
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// 数组item转某个key做key的对象
interface User { id: number; name: string }

type UsersArray = User[];

type UsersMap<T extends UsersArray> = {
  [K in T[number]['id']]: Extract<T[number], { id: K }>
};

### 安装

```text
npm install typescript -g

tsc --version

npm init -y

tsc --init

npm install @types/node --dev-save
```



### 转js

```
tsc xxx.ts

node xxx.js
```



### 自带支持es6

​	

### vscode

ctrl ` 打开terminal



### 类型

```
var age:number = 18
var height:number = 178.5
console.log(age)
console.log(height)

var lz:string = 'fwefewf'

console.log(lz)

var b:boolean = true
var c:boolean = false

console.log(b,c)

enum REN{nan='nan', nv='nv', yao='yao'}
console.log(REN)
// { '0': 'nan', '1': 'nv', '2': 'yao', nan: 0, nv: 1, yao: 2 }
// { nan: 'nan', nv: 'nv', yao: 'yao' }

var t:any = 10
t = 'lz'
t=true
console.log(t)

// null

```



### 函数

```
function find(age:number=11, height?:string):string{
    let result:string = ''
    result = age + ''
    if (height) {
        result = result + height
    }
    return result
}

var age:number = 18
var height:string = 'fewfw'

var result:string = find()

console.log(result)
-------------------------------------
function find1(...arr:string[]):string{
    let result:string = ''
    arr.map((item, index) => {
        result += item
        if (index < arr.length - 1) {
            result += '、'
        }
    })
    return result
}

var result1:string = find1('1', '2', '3')

console.log(result1)
```



### 声明函数方式

```
// 函数声明法
function add (n1:number, n2:number):number {
    return n1 + n2
}

// 函数表达式
const add1 = function (n1:number, n2:number):number {
    return n1 + n2
}
console.log(add1(1, 2))

// es6
const add2 = (n1:number, n2:number):number => {
    return n1 + n2
}
console.log(add2(1, 2))
```



### 数组

```
// 字面量赋值
let arr1:number[] = [1,2,3]
let arr2:Array<string> = ['1','2']

// 构造函数赋值
let arr3:number[] = new Array(1,2)
let arr4:Array<number> = new Array(1,2)

// 元祖
let x :[string, number]
x = ['hello', 10]
```



### 日期

```
let d:Date = new Date(1000) // 1970-01-01 00:00:00     加的ms数
console.log(d)

let d1:Date = new Date('2019/05/27 05:27:00')
let d2:Date = new Date('2019-05-27 05:27:00')
let d3:Date = new Date('2019-05-27T05:27:00')
console.log(d1)
console.log(d2)
console.log(d3)

let d:Date = new Date(year,month,day,hours,minutes,seconds,ms);
```



### 正则

```
// 构造函数声明法
let reg1:RegExp = new RegExp('lz')
console.log(reg1)
let reg2:RegExp = new RegExp('lz', 'gi')    // g 全局 i 忽略大小写
console.log(reg2)

// 字面量声明
let reg3:RegExp = /lz/i
console.log(reg3)

// test
let reg4:RegExp = /lz/i
let s:string = 'lZ'
let result:boolean = reg4.test(s)
console.log(result)

// exec 找到返回数组，前面的为找到的，后面是输入的  没有 null
let reg5:RegExp =  /jspang/i
let website:string = 'jspang.com'
console.log(reg5.exec(website))
//[ 'jspang', index: 0, input: 'jspang.com' ]
```



### 类

```
// 类是对象具体事物的一个抽象，对象是类的具体表现
// 类名大驼峰法
class XiaoJieJie {
    name:string
    age:number
    constructor (name:string, age:number) {
        this.name = name
        this.age = age
    }
    say () {
        console.log('hao')
    }
}

let jie:XiaoJieJie = new XiaoJieJie('bingbing', 18)
console.log(jie)
jie.say()
```



### 修饰符

```
// public protectes private readonly

class XiaoJieJie {
    public sex:string
    protected name:string
    private age:number
    constructor (name:string, age:number, sex:string) {
        this.name = name
        this.age = age
        this.sex = sex
    }
    public say () {
        console.log('hao')
    }
    protected sayLove () {
        console.log('love')
    }
    public sayDo () {
        console.log('do')
    }
}

let jie:XiaoJieJie = new XiaoJieJie('bingbing', 18, 'man')
console.log(jie)
jie.say()

class Man {
    public readonly sex:string = 'nan'
}
let man:Man = new Man()


```



### 继承

```
// super 调父类东西   extends 继承

class Lz {
    public name:string
    public age:number
    public skill:string
    constructor(name:string,age:number,skill:string) {
        this.name = name
        this.age = age
        this.skill = skill
    }
    public hi () {
        console.log('hi')
    }
}

let lz:Lz = new Lz('来自', 18, 'web')
lz.hi()

class Lzz extends Lz {
    public size:number = 18
    public money () {
        console.log('money')
    }
    public hi () {
        super.hi()
        console.log('hi1')
    }
}

let lzz:Lzz = new Lzz('1', 19, '2')
console.log(lzz)
lzz.hi()
lzz.money()
```



### 接口

```
// search

interface Man {
    sex:string
    age:number
    maibaobao?:Boolean   // 可选参数
}
let myMan:Man = {sex:'nan', age:18,maibaobao:true}
console.log(myMan)



interface  SearchMan{
    (source:string,subString:string):boolean
}

let mySearch:SearchMan

mySearch = function(source:string,subString:string):boolean{
    let flag = source.search(subString)
    return (flag != -1)
} 

console.log(mySearch('高、富、帅、德','胖')) //false
```



### 命名空间

```
namespace ShuaiGe {
    export class Dehua {
        public name:string = 'liudehua'
        talk () {
            console.log(this.name)
        }
    }
}

namespace ShuaiGe1 {
    export class Dehua {
        public name:string = 'madehua'
        talk () {
            console.log(this.name)
        }
    }
}

let dehua:ShuaiGe.Dehua = new ShuaiGe.Dehua
let dehua1:ShuaiGe1.Dehua = new ShuaiGe1.Dehua

dehua.talk()
dehua1.talk()
```

