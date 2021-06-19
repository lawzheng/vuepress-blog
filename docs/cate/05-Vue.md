# Vue

## 1. nextTick

在下次`dom`更新循环结束之后执行延迟回调，可用于获取更新后的`dom`状态

- 新版本中默认是`microtasks`, `v-on`中会使用`macrotasks`
- `macrotasks`任务的实现:
  - `setImmediate / MessageChannel / setTimeout`

## 2. 生命周期

- `_init_`

  - `initLifecycle/Event`，往`vm`上挂载各种属性

  - `callHook: beforeCreated`: 实例刚创建

  - `initInjection/initState`: 初始化注入和 data 响应性

  - `created`: 创建完成，属性已经绑定， 但还未生成真实`dom`

  - 进行元素的挂载： `$el / vm.$mount()`

  - 是否有

    ```
    template
    ```

    : 解析成

    ```
    render function
    ```

    - `*.vue`文件: `vue-loader`会将`编译成`render function`

  - `beforeMount`: 模板编译/挂载之前

  - 执行`render function`，生成真实的`dom`，并替换到`dom tree`中

  - `mounted`: 组件已挂载

- `update`:

  - 执行`diff`算法，比对改变是否需要触发UI更新

  - ```
    flushScheduleQueue
    ```

    - `watcher.before`: 触发`beforeUpdate`钩子		- `watcher.run()`: 执行`watcher`中的 `notify`，通知所有依赖项更新UI

  - 触发`updated`钩子: 组件已更新

- `actived / deactivated(keep-alive)`: 不销毁，缓存，组件激活与失活

- `destroy`:

  - `beforeDestroy`: 销毁开始
  - 销毁自身且递归销毁子组件以及事件监听
    - `remove()`: 删除节点
    - `watcher.teardown()`: 清空依赖
    - `vm.$off()`: 解绑监听
  - `destroyed`: 完成后触发钩子

上面是`vue`的声明周期的简单梳理，接下来我们直接以代码的形式来完成`vue`的初始化

```
new Vue({})

// 初始化Vue实例
function _init() {
	 // 挂载属性
    initLifeCycle(vm) 
    // 初始化事件系统，钩子函数等
    initEvent(vm) 
    // 编译slot、vnode
    initRender(vm) 
    // 触发钩子
    callHook(vm, 'beforeCreate')
    // 添加inject功能
    initInjection(vm)
    // 完成数据响应性 props/data/watch/computed/methods
    initState(vm)
    // 添加 provide 功能
    initProvide(vm)
    // 触发钩子
    callHook(vm, 'created')
		
	 // 挂载节点
    if (vm.$options.el) {
        vm.$mount(vm.$options.el)
    }
}

// 挂载节点实现
function mountComponent(vm) {
	 // 获取 render function
    if (!this.options.render) {
        // template to render
        // Vue.compile = compileToFunctions
        let { render } = compileToFunctions() 
        this.options.render = render
    }
    // 触发钩子
    callHook('beforeMounte')
    // 初始化观察者
    // render 渲染 vdom， 
    vdom = vm.render()
    // update: 根据 diff 出的 patchs 挂载成真实的 dom 
    vm._update(vdom)
    // 触发钩子  
    callHook(vm, 'mounted')
}

// 更新节点实现
funtion queueWatcher(watcher) {
	nextTick(flushScheduleQueue)
}

// 清空队列
function flushScheduleQueue() {
	 // 遍历队列中所有修改
    for(){
	    // beforeUpdate
        watcher.before()
         
        // 依赖局部更新节点
        watcher.update() 
        callHook('updated')
    }
}

// 销毁实例实现
Vue.prototype.$destory = function() {
	 // 触发钩子
    callHook(vm, 'beforeDestory')
    // 自身及子节点
    remove() 
    // 删除依赖
    watcher.teardown() 
    // 删除监听
    vm.$off() 
    // 触发钩子
    callHook(vm, 'destoryed')
}
复制代码
```

## 3. 数据响应(数据劫持)

看完生命周期后，里面的`watcher`等内容其实是数据响应中的一部分。数据响应的实现由两部分构成: **观察者( watcher )** 和 **依赖收集器( Dep )**，其核心是 `defineProperty`这个方法，它可以 **重写属性的 get 与 set** 方法，从而完成监听数据的改变。

- Observe (观察者)观察 props 与 state

  - 遍历 props 与 state，对每个属性创建独立的监听器( watcher )

- 使用 

  ```
  defineProperty
  ```

   重写每个属性的 get/set(

  ```
  defineReactive
  ```

  ）

  - ```
    get
    ```

    : 收集依赖

    - ```
      Dep.depend()
      ```

      - `watcher.addDep()`

  - ```
    set
    ```

    : 派发更新

    - `Dep.notify()`
    - `watcher.update()`
    - `queenWatcher()`
    - `nextTick`
    - `flushScheduleQueue`
    - `watcher.run()`
    - `updateComponent()`

大家可以先看下面的数据相应的代码实现后，理解后就比较容易看懂上面的简单脉络了。

```
let data = {a: 1}
// 数据响应性
observe(data)

// 初始化观察者
new Watcher(data, 'name', updateComponent)
data.a = 2

// 简单表示用于数据更新后的操作
function updateComponent() {
    vm._update() // patchs
}

// 监视对象
function observe(obj) {
	 // 遍历对象，使用 get/set 重新定义对象的每个属性值
    Object.keys(obj).map(key => {
        defineReactive(obj, key, obj[key])
    })
}

function defineReactive(obj, k, v) {
    // 递归子属性
    if (type(v) == 'object') observe(v)
    
    // 新建依赖收集器
    let dep = new Dep()
    // 定义get/set
    Object.defineProperty(obj, k, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
        	  // 当有获取该属性时，证明依赖于该对象，因此被添加进收集器中
            if (Dep.target) {
                dep.addSub(Dep.target)
            }
            return v
        },
        // 重新设置值时，触发收集器的通知机制
        set: function reactiveSetter(nV) {
            v = nV
            dep.nofify()
        },
    })
}

// 依赖收集器
class Dep {
    constructor() {
        this.subs = []
    }
    addSub(sub) {
        this.subs.push(sub)
    }
    notify() {
        this.subs.map(sub => {
            sub.update()
        })
    }
}

Dep.target = null

// 观察者
class Watcher {
    constructor(obj, key, cb) {
        Dep.target = this
        this.cb = cb
        this.obj = obj
        this.key = key
        this.value = obj[key]
        Dep.target = null
    }
    addDep(Dep) {
        Dep.addSub(this)
    }
    update() {
        this.value = this.obj[this.key]
        this.cb(this.value)
    }
    before() {
        callHook('beforeUpdate')
    }
}
复制代码
```

## 4. virtual dom 原理实现

- 创建 dom 树

- 树的`diff`，同层对比，输出`patchs(listDiff/diffChildren/diffProps)`

  - 没有新的节点，返回

  - 新的节点

    ```
    tagName
    ```

    与

    ```
    key
    ```

    不变， 对比

    ```
    props
    ```

    ，继续递归遍历子树

    - 对比属性(对比新旧属性列表):
      - 旧属性是否存在与新属性列表中
      - 都存在的是否有变化
      - 是否出现旧列表中没有的新属性

  - `tagName`和`key`值变化了，则直接替换成新节点

- 渲染差异

  - 遍历`patchs`， 把需要更改的节点取出来
  - 局部更新`dom`

```
// diff算法的实现
function diff(oldTree, newTree) {
	 // 差异收集
    let pathchs = {}
    dfs(oldTree, newTree, 0, pathchs)
    return pathchs
}

function dfs(oldNode, newNode, index, pathchs) {
    let curPathchs = []
    if (newNode) {
        // 当新旧节点的 tagName 和 key 值完全一致时
        if (oldNode.tagName === newNode.tagName && oldNode.key === newNode.key) {
        	  // 继续比对属性差异
            let props = diffProps(oldNode.props, newNode.props)
            curPathchs.push({ type: 'changeProps', props })
            // 递归进入下一层级的比较
            diffChildrens(oldNode.children, newNode.children, index, pathchs)
        } else {
        	  // 当 tagName 或者 key 修改了后，表示已经是全新节点，无需再比
            curPathchs.push({ type: 'replaceNode', node: newNode })
        }
    }

	 // 构建出整颗差异树
    if (curPathchs.length) {
    		if(pathchs[index]){
    			pathchs[index] = pathchs[index].concat(curPathchs)
    		} else {
    			pathchs[index] = curPathchs
    		}
    }
}

// 属性对比实现
function diffProps(oldProps, newProps) {
    let propsPathchs = []
    // 遍历新旧属性列表
    // 查找删除项
    // 查找修改项
    // 查找新增项
    forin(olaProps, (k, v) => {
        if (!newProps.hasOwnProperty(k)) {
            propsPathchs.push({ type: 'remove', prop: k })
        } else {
            if (v !== newProps[k]) {
                propsPathchs.push({ type: 'change', prop: k , value: newProps[k] })
            }
        }
    })
    forin(newProps, (k, v) => {
        if (!oldProps.hasOwnProperty(k)) {
            propsPathchs.push({ type: 'add', prop: k, value: v })
        }
    })
    return propsPathchs
}

// 对比子级差异
function diffChildrens(oldChild, newChild, index, pathchs) {
		// 标记子级的删除/新增/移动
    let { change, list } = diffList(oldChild, newChild, index, pathchs)
    if (change.length) {
        if (pathchs[index]) {
            pathchs[index] = pathchs[index].concat(change)
        } else {
            pathchs[index] = change
        }
    }

	 // 根据 key 获取原本匹配的节点，进一步递归从头开始对比
    oldChild.map((item, i) => {
        let keyIndex = list.indexOf(item.key)
        if (keyIndex) {
            let node = newChild[keyIndex]
            // 进一步递归对比
            dfs(item, node, index, pathchs)
        }
    })
}

// 列表对比，主要也是根据 key 值查找匹配项
// 对比出新旧列表的新增/删除/移动
function diffList(oldList, newList, index, pathchs) {
    let change = []
    let list = []
    const newKeys = getKey(newList)
    oldList.map(v => {
        if (newKeys.indexOf(v.key) > -1) {
            list.push(v.key)
        } else {
            list.push(null)
        }
    })

    // 标记删除
    for (let i = list.length - 1; i>= 0; i--) {
        if (!list[i]) {
            list.splice(i, 1)
            change.push({ type: 'remove', index: i })
        }
    }

    // 标记新增和移动
    newList.map((item, i) => {
        const key = item.key
        const index = list.indexOf(key)
        if (index === -1 || key == null) {
            // 新增
            change.push({ type: 'add', node: item, index: i })
            list.splice(i, 0, key)
        } else {
            // 移动
            if (index !== i) {
                change.push({
                    type: 'move',
                    form: index,
                    to: i,
                })
                move(list, index, i)
            }
        }
    })

    return { change, list }
}
复制代码
```

## 5. Proxy 相比于 defineProperty 的优势

- 数组变化也能监听到
- 不需要深度遍历监听

```
let data = { a: 1 }
let reactiveData = new Proxy(data, {
	get: function(target, name){
		// ...
	},
	// ...
})
```

## 6. vue-router

- ```
  mode
  ```

  - `hash`
  - `history`

- 跳转

  - `this.$router.push()`
  - `<router-link to=""></router-link>`

- 占位

  - `<router-view></router-view>`

## 7. vuex

- `state`: 状态中心
- `mutations`: 更改状态
- `actions`: 异步更改状态
- `getters`: 获取状态
- `modules`: 将`state`分成多个`modules`，便于管理



## vue初始化

装最新脚手架 装之前卸载旧的

```
npm install -g @vue/cli
```

```
vue create project-name    // vue-cli3
vue init webpack project-name    //vue-cli2
```



## 组件间获取值

### 父组件获取子组件

**$children**

```
<template>
  <div class="index">
    <Header></Header>
    <HelloWorld :message="message"></HelloWorld>
    <button @click="goPro">跳转</button>
  </div>
</template>

mounted(){
 console.log(this.$children)
}
```

缺点：

无法确定子组件的顺序，也不是响应式的。如果你确切的知道要访问子组件建议使用$refs。



**$refs**

```
<HelloWorld ref="hello" :message="message"></HelloWorld>

this.$refs.hello.属性
this.$refs.hello.方法
```



**$emit/$on**

```
子组件发射事件，可带参数
```





### 子组件获取父组件

**$parent**

```
this.$parent.属性
this.$parent.方法
```



**prop**

父组件通过prop传给子组件



### 隔代传值

**inheritAttrs**

这是@2.4 新增的属性和接口。inheritAttrs 属性控制子组件 html 属性上是否显示父组件的提供的属性。

子组件没用prop接收的值会显示在html上

inheritAttrs: false即可隐藏



**$attrs/$listener**

没被prop接收的可直接用$attrs接收

同理 没被接收的事件可用$listener接收

可传给孙组件

```
v-bind="$attrs"
v-on="$listeners"
```



**provide / inject**

简单的说，当组件的引入层次过多，我们的子孙组件想要获取祖先组件的资源，那么怎么办呢，总不能一直取父级往上吧，而且这样代码结构容易混乱。这个就是 provide / inject 要干的事情。

```
<template>
  <div>
<childOne></childOne>
  </div>
</template>

<script>
  import childOne from '../components/test/ChildOne'
  export default {
    name: "Parent",
    provide: {
      for: "demo"
    },
    components:{
      childOne
    }
  }
```

在这里我们在父组件中 provide for 这个变量，然后直接设置三个组件（childOne、childTwo 、childThird）并且一层层不断内嵌其中， 而在最深层的 childThird 组件中我们可以通过 inject 获取 for 这个变量

```
<template>
  <div>
    {{demo}}
  </div>
</template>

<script>
  export default {
    name: "",
    inject: ['for'],
    data() {
      return {
        demo: this.for
      }
    }
  }
</script>
```



provide的值不是响应式的，非要响应式就得把this传过去

而且inject没接收到值的时候会报错，所以该组件不好复用，一般不推荐使用，在组件库用的多



### dispatch 派发

```
Vue.prototype.$dispatch = function(eventName, data) {
  let parent = this.$parent;
  // 查找父元素
  while (parent) {
    if (parent) {
      // 父元素用$emit触发
      parent.$emit(eventName, data);
      // 递归查找父元素
      parent = parent.$parent;
    } else {
      break;
    }
  }
};
```



### broadcast 广播

```
Vue.prototype.$boardcast = function(eventName, data) {
  boardcast.call(this, eventName, data);
};
function boardcast(eventName, data) {
  this.$children.forEach(child => {
    // 子元素触发$emit
    child.$emit(eventName, data);
    if (child.$children.length) {
      // 递归调用，通过call修改this指向 child
      boardcast.call(child, eventName, data);
    }
  });
}
```



### bus

```
class Bus {
  constructor() {
    // {
    //   eventName1:[fn1,fn2],
    //   eventName2:[fn3,fn4],
    // }
    this.callbacks = {};
  }
  $on(name, fn) {
    this.callbacks[name] = this.callbacks[name] || [];
    this.callbacks[name].push(fn);
  }
  $emit(name, args) {
    if (this.callbacks[name]) {
      // 存在 遍历所有callback
      this.callbacks[name].forEach(cb => cb(args));
    }
  }
}

Vue.prototype.$bus = new Bus();
```









## watch 和 computed 的区别？

computed：

① 有缓存机制；② 不能接受参数；③ 可以依赖其他 computed，甚至是其他组件的 data；④ 不能与 data 中的属性重复

watch：

① 可接受两个参数；② 监听时可触发一个回调，并做一些事情；③ 监听的属性必须是存在的；④ 允许异步

watch 配置：handler、deep（是否深度）、immeditate （是否立即执行）

总结：

当有一些数据需要随着另外一些数据变化时，建议使用 computed

当有一个通用的响应数据变化的时候，要执行一些业务逻辑或异步操作的时候建议使用 watch



## 杂知识

### 清除定时器

单页面应用，切换页面时定时器不会自动清除的，需要手动在 beforeDestroy 中销毁定时器。



**bad**

```
mounted(){
 this.timer = setInterval(()=>{
    console.log(1)
 },1000)
},
beforeDestroy(){
 clearInterval(this.timer)
}
```

引用尤大的话来说就是：

它需要在这个组件实例中保存这个 timer，如果可以的话最好只有生命周期钩子可以访问到它。这并不算严重的问题，但是它可以被视为杂物。

我们的建立代码独立于我们的清理代码，这使得我们比较难于程序化的清理我们建立的所有东西。



**good**

```
mounted(){
 const timer = setInterval(()=>{
    console.log(1)
 },1000)
 this.$once('hook:beforeDestroy',()=>{
  clearInterval(timer)
 })
}
```



### 背景图懒加载

```
v-lazy:background-image="item.img"
```





## 路由

### 路由跳转跳页面

```javascript
this.goUrl({
          path: 'SearchResult',
          query: {
            shopId: 6
          }
})
```



### 回上一页

```
this.goBack()

// 兼容所有环境
Vue.prototype.goBack = () => {                      // 返回上一个页面
  if (Vue.prototype.isGreenApp) {
    // 通知app返回
    let sendData = {
      type: 'back'
    }
    Vue.prototype.$sendDataToClient(sendData)
  } else if (Vue.prototype.isWxApp) {
    window.history.go(-1)
    // setTimeout(() => {    // 小程序跳转的页面返回
    //   window.wx.miniProgram.navigateBack()
    // }, 500)  会重复多返回一层
  } else {
    history.back()
  }
}

// vue自带
this.$router.go(-1)
```



## 全屏弹窗

```
### mounted

window.addEventListener('popstate', () => {
        if (this.showInfo) {
          this.showInfo = false
        }
      })
      
### 点击 添加一条记录

history.pushState(null, null, location.href)


### 后退

window.history.go(-1)
```









## 修饰符

### 表单修饰符

**.lazy**

```
<div>
   <input type="text" v-model.lazy="value">
   <p>{{value}}</p>
</div>
```

失焦才改变



**.trim**

```
<input type="text" v-model.trim="value">
```

只能去头尾，跟js的trim一样



**.number**

先输入数字才会将别的过滤

开头不是数字就没作用



### 事件修饰符

**.stop**

由于事件冒泡的机制，我们给元素绑定点击事件的时候，也会触发父级的点击事件。

```
<div @click="shout(2)">
  <button @click="shout(1)">ok</button>
</div>

//js
shout(e){
  console.log(e)
}
//1
//2
```

相当于调用了event.stopPropagation()方法。



**.prevent**

用于阻止事件的默认行为，例如，当点击提交按钮时阻止对表单的提交。相当于调用了event.preventDefault()方法。

```
<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>
```

**注意：**修饰符可以同时使用多个,但是可能会因为顺序而有所不同。

用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。

也就是**从左往右判断~**



**.self**

只当事件是从事件绑定的元素本身触发时才触发回调。像下面所示，刚刚我们从.stop时候知道子元素会冒泡到父元素导致触发父元素的点击事件，当我们加了这个.self以后，我们点击button不会触发父元素的点击事件shout，只有当点击到父元素的时候（蓝色背景）才会shout~从这个self的英文翻译过来就是‘自己，本身’可以看出这个修饰符的用法

```
<div class="blue" @click.self="shout(2)">
  <button @click="shout(1)">ok</button>
</div>
```



**.once**

```
//键盘按坏都只能shout一次
<button @click.once="shout(1)">ok</button>
```



**.capture**

从上面我们知道了事件的冒泡，其实完整的事件机制是：捕获阶段--目标阶段--冒泡阶段。
默认的呢，是事件触发是从目标开始往上冒泡。

当我们加了这个.capture以后呢，我们就反过来了，事件触发从包含这个元素的顶层开始往下触发。

```
<div @click.capture="shout(1)">
      obj1
      <div @click.capture="shout(2)">
        obj2
        <div @click="shout(3)">
          obj3
          <div @click="shout(4)">
            obj4
          </div>
        </div>
      </div>
    </div>
    // 1 2 4 3
```

从上面这个例子我们点击obj4的时候，就可以清楚地看出区别，obj1，obj2在捕获阶段就触发了事件，因此是先1后2，后面的obj3，obj4是默认的冒泡阶段触发，因此是先4然后冒泡到3~



**.passive**

当我们在监听元素滚动事件的时候，会一直触发onscroll事件，在pc端是没啥问题的，但是在移动端，会让我们的网页变卡，因此我们使用这个修饰符的时候，相当于给onscroll事件整了一个.lazy修饰符

```
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成 -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```



**.native**

我们经常会写很多的小组件，有些小组件可能会绑定一些事件，但是，像下面这样绑定事件是不会触发的

```
<My-component @click="shout(3)"></My-component>
```

必须使用.native来修饰这个click事件（即），可以理解为该修饰符的作用就是把一个vue组件转化为一个普通的HTML标签，
注意：**使用.native修饰符来操作普通HTML标签是会令事件失效的**



### 键值修饰符

其实这个也算是事件修饰符的一种，因为它都是用来修饰键盘事件的。
比如onkeyup，onkeydown啊

**.keyCode**

如果不用keyCode修饰符，那我们每次按下键盘都会触发shout，当我们想指定按下某一个键才触发这个shout的时候，这个修饰符就有用了，具体键码查看键码对应表https://zhidao.baidu.com/question/266291349.html

```
<input type="text" @keyup.keyCode="shout(4)">
```

为了方便我们使用，vue给一些常用的键提供了别名

> ```
> //普通键.enter.tab.delete 
> //(捕获“删除”和“退格”键).space.esc.up.down.left.right
> //系统修饰键.ctrl.alt.meta.shift
> ```

可以通过全局 config.keyCodes 对象自定义按键修饰符别名：

> ```
> // 可以使用 `v-on:keyup.f1`Vue.config.keyCodes.f1 = 112
> ```

我们从上面看到，键分成了普通常用的键和系统修饰键，区别是什么呢？
当我们写如下代码的时候,我们会发现如果**仅仅**使用系统修饰键是无法触发keyup事件的。

> ```
> <input type="text" @keyup.ctrl="shout(4)">
> ```

那该如何呢？我们需要将系统修饰键和其他键码链接起来使用，比如

```	
<input type="text" @keyup.ctrl.67="shout(4)">
```

这样当我们同时按下ctrl+c时，就会触发keyup事件。
另，如果是鼠标事件，那就可以单独使用系统修饰符。

```
<button @mouseover.ctrl="shout(1)">ok</button>
 <button @mousedown.ctrl="shout(1)">ok</button>
 <button @click.ctrl.67="shout(1)">ok</button>
```

大概是什么意思呢，就是你不能**单手指使用系统修饰键的修饰符**（最少两个手指，可以多个）。你可以一个手指按住系统修饰键一个手指按住另外一个键来实现键盘事件。也可以用一个手指按住系统修饰键，另一只手按住鼠标来实现鼠标事件。



**.exact** **(2.5新增)**

我们上面说了这个系统修饰键，当我们像这样绑定了click键按下的事件，惊奇的是，我们同时按下几个系统修饰键，比如ctrl shift点击，也能触发，可能有些场景我们**只需要或者只能**按一个系统修饰键来触发（像制作一些快捷键的时候），而当我们按下ctrl和其他键的时候则无法触发。那就这样写。

注意：这个**只是限制系统修饰键**的，像下面这样书写以后你还是可以按下ctrl + c，ctrl+v或者ctrl+普通键 来触发，但是不能按下ctrl + shift +普通键来触发。

```
<button type="text" @click.ctrl.exact="shout(4)">ok</button>
```



### v-bind修饰符

**.sync(2.3.0+ 新增)**

在有些情况下，我们可能需要对一个 prop 进行“双向绑定”。不幸的是，真正的双向绑定会带来维护上的问题，因为子组件可以修改父组件，且在父组件和子组件都没有明显的改动来源。我们通常的做法是

```
//父组件
<comp :myMessage.sync="bar"></comp>
//子组件
this.$emit('update:myMessage',params);
```

这样确实会方便很多，但是也有很多需要注意的点

1、使用sync的时候，子组件传递的事件名必须为update:value，其中value必须与子组件中props中声明的名称完全一致(如上例中的myMessage，不能使用my-message)

2、注意带有 .sync 修饰符的 v-bind 不能和表达式一起使用 (例如 v-bind:title.sync=”doc.title + ‘!’” 是无效的)。取而代之的是，你只能提供你想要绑定的属性名，类似 v-model。

3将 v-bind.sync 用在一个字面量的对象上，例如 v-bind.sync=”{ title: doc.title }”，是无法正常工作的，因为在解析一个像这样的复杂表达式的时候，有很多边缘情况需要考虑。



**.prop**

要学习这个修饰符，我们首先要搞懂两个东西的区别。

```
Property：节点对象在内存中存储的属性，可以访问和设置。
Attribute：节点对象的其中一个属性( property )，值是一个对象。
可以通过点访问法 document.getElementById('xx').attributes 或者 document.getElementById('xx').getAttributes('xx') 读取，通过 document.getElementById('xx').setAttribute('xx',value) 新增和修改。
在标签里定义的所有属性包括 HTML 属性和自定义属性都会在 attributes 对象里以键值对的方式存在。
```



其实attribute和property两个单词，翻译出来都是属性，但是《javascript高级程序设计》将它们翻译为特性和属性，以示区分



```
//这里的id,value,style都属于property
//index属于attribute
//id、title等既是属性，也是特性。修改属性，其对应的特性会发生改变；修改特性，属性也会改变
<input id="uid" title="title1" value="1" :index="index">
//input.index === undefined
//input.attributes.index === this.index
```



从上面我们可以看到如果直接使用v-bind绑定，则默认会绑定到dom节点的attribute。
为了

- 通过自定义属性存储变量，避免暴露数据
- 防止污染 HTML 结构

我们可以使用这个修饰符，如下

```
<input id="uid" title="title1" value="1" :index.prop="index">
//input.index === this.index
//input.attributes.index === undefined
```



**.camel**

由于HTML 特性是不区分大小写的。

```
<svg :viewBox="viewBox"></svg>
```

实际上会渲染为

```
<svg viewbox="viewBox"></svg>
```

这将导致渲染失败，因为 SVG 标签只认 viewBox，却不知道 viewbox 是什么。
如果我们使用.camel修饰符，那它就会被渲染为驼峰名。
另，如果你使用字符串模版，则没有这些限制。

```
new Vue({
  template: '<svg :viewBox="viewBox"></svg>'
})
```

































## vue中引入jquery插件

npm安装jquery

在插件里import jquery，可能eslint报错，需要手改格式

在需要的界面import jquery 和插件，当然需要用jquery调用

```
$(this.$refs.text).arctext({radius: 100})
```






## 模板

```
<!-- 商城会员卡详情页 -->
<!-- Create by luozheng on 2020/03/18 -->
<style lang="less" scoped>
  @import "../../assets/less/variable.less";
  .container {
    width: 100%;
    height: 100%;
  }
</style>

<template>
  <div class="container overscroll">

  </div>
</template>

<script>
  export default {
    name: 'OrderLogisticsDetail',
    data () {
      return {
      }
    },
    props: {
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
```



## 懒加载组件

```js
const Masks = () => import('@/components/mall/Masks')
```



## 异步加载组件

```
npm i babel-plugin-dynamic-import-node
```

然后在.babelrc中

```
{
  "presets": [
    ["env", { "modules": false }],
    "stage-2"
  ],
  "plugins": [
    "transform-runtime"
  ],
  "comments": false,
  "env": {
    "test": {
      "presets": ["env", "stage-2"],
      "plugins": [ "istanbul" ]
    },
    "development": {
      "plugins": ["dynamic-import-node"]
    }
  }
}

```

加在env里，直接放外层plugins，没区分环境，会导致打包出错







## vue跨组件传递事件

a组件

正常方式接收

b组件加上

```
v-bind="$attrs"
v-on="$listeners"
```

c组件

正常发射



## vue 中使用echarts

1.npm 安装

2.要用的页面

```
  import echarts from 'echarts'
```

3.画

```
  <div class="charts" :style="{width: '100%', height: '4rem'}" ref="myChart"></div>
```

```
drawLine () {
  // 基于准备好的dom，初始化echarts实例
  // let myChart = echarts.init(document.getElementById('myChart'))
  let myChart = echarts.init(this.$refs.myChart)
  // 绘制图表
  myChart.setOption({
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    // 颜色指引
    legend: {
      orient: 'horizontal',   // vertical
      x: 'left',
      data: ['收入', '支出']
    },
    color: ['#3db657', '#bbeeaa'],
    series: [
      {
        name: '数据统计',
        type: 'pie',
        radius: ['40%', '58%'],
        avoidLabelOverlap: false,
        // 图中的字
        label: {
          normal: {
            show: false,
            position: 'center'
          }
          // emphasis: {
          //   show: true,
          //   textStyle: {
          //     fontSize: '30',
          //     fontWeight: 'bold'
          //   }
          // }
        },
        labelLine: {
          normal: {
            show: true
          }
        },
        data: [
          {value: 335, name: '收入'},
          {value: 202, name: '支出'}
        ]
      }
    ]
  })
}
```

要注意的是宽高得在标签里给，不然好像给不上



## vue provide/inject

```
provide () {
  return {
    shopId: this.shopId
  }
},
```

```
inject: ['shopId'],
```

```
子组件this.shopId就能拿到了
```



## vue双向绑定原理

```
<!DocType>
<html>
<title>vue 的双向绑定事件</title>
<body id="app">
<input type="text" v-model="number"/>
<span v-bind="number"></span>
<input type="text" v-model="age"/>
<span v-bind="age"></span>
</body>

<script>
  function Vue (options) {
    this._init(options)
  }

  Vue.prototype._init = function (options) {
    this.$data = options.data
    this.$methods = options.data.methods
    this.$el = document.querySelector(options.el)
    this.$methods = options.methods
    this.$key = ''

    this._binding = {}

    // 观测数据
    this._observer(this.$data)

    this._complie(this.$el)

    // this._test(this.$data);
  }

  // 观测数据
  Vue.prototype._observer = function (obj) {
    var value
    let _this = this
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        this._binding[key] = {
          _directives: []
        }
        value = obj[key]
        if (typeof value === 'object') {
          this._observer(value)
        }
        Object.defineProperty(this.$data, key, {
          enumerable: true,
          configurable: true,
          get: function () {
            console.log(`获取${value}`, key)
            return value
          },
          set: function (newVal) {
            console.log('key:', key, _this.$key)
            if (value !== newVal) {
              value = newVal
              _this._binding[_this.$key]._directives.forEach(function (item, index) {
                item.update()
              })
            }
          }
        })
      }
    }
  }

  // 为DOM节点添加指令事件
  Vue.prototype._complie = function (root) {
    var _this = this
    var nodes = root.children
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i]
      if (node.children.length) {
        this._complie(node)
      }

      if (node.hasAttribute('v-click')) {
        node.onclick = (function () {
          var attrVal = nodes[i].getAttribute('v-click')
          return _this.$methods[attrVal].bind(_this.$data)
        })()
      }

      if (node.hasAttribute('v-model') && (node.tagName == 'INPUT' || node.tagName == 'TEXTAREA')) {
        node.addEventListener('input', (function (key) {
          var attrVal = node.getAttribute('v-model')
          _this._binding[attrVal]._directives.push(new Watcher(
            'input',
            node,
            _this,
            attrVal,
            'value'
          ))

          return function () {
            _this.$key = attrVal
            _this.$data[attrVal] = nodes[key].value
          }
        })(i))
      }

      if (node.hasAttribute('v-bind')) {
        var attrVal = node.getAttribute('v-bind')
        _this._binding[attrVal]._directives.push(new Watcher(
          'text',
          node,
          _this,
          attrVal,
          'innerHTML'
        ))
      }
    }
  }

  function Watcher (name, el, vm, exp, attr) {
    this.name = name         //指令名称，例如文本节点，该值设为"text"
    this.el = el             //指令对应的DOM元素
    this.vm = vm             //指令所属myVue实例
    this.exp = exp           //指令对应的值，本例如"number"
    this.attr = attr         //绑定的属性值，本例为"innerHTML"

    this.update()
  }

  // 更新数据
  Watcher.prototype.update = function () {
    this.el[this.attr] = this.vm.$data[this.exp]
  }

  // 测试
  Vue.prototype._test = function ($data) {
    var a = $data.number
    $data.number = 32
  }

  window.onload = function () {
    var app = new Vue({
      el: '#app',
      data: {
        number: 12,
        age: 444
      },
      methods: {}
    })
  }

</script>
</html>
```



## vuex

获取state中的值

```
import {mapState} from 'vuex'
```

```
computed: {
  ...mapState(['isToastShow', 'toastText'])
}
直接就获取并赋值了
```



```
import {mapActions} from 'vuex'

methods: mapActions([
    'method1',
    'method2'
])

methods:{
    ...mapActions([
        'method1',
        'method2'
    ])
} 
```



modules 多个vuex

```
import x1 ..

export default new Vuex.Store({

  modules: {

    x1,

    x2

  }

})

```

x1

```
const state =  {

  },
  mutations =  {

  },
  actions =  {

  }
  
  export default {
  namespace: true
      state,
      ..
  }
```







#### 改变值

```
mutations中加一方法去改变state

调用
this.$store.commit('method')
```



dispatch操作action里的



## 前端路由实现

刚开始是后端路由，服务端当接收到客户端发来的HTTP请求，就会根据所请求的相应URL，来找到相应的映射函数，然后执行该函数，并将函数的返回值发送给客户端，对于最简单的静态资源服务器，可以认为，所有URL的映射函数就是一个文件读取操作。对于动态资源，映射函数可能是一个数据库读取操作，也可能是进行一些数据的处理，等等。然后根据这些读取的数据，在服务器端就使用相应的模板来对页面进行渲染后，再返回渲染完毕的页面。这种方式在早期的前端开发中非常普遍，它的好处与坏处都很明显：

- 好处：安全性好，SEO好。
- 缺点：加大服务器的压力，不利于用户体验，代码冗合。



前端路由主要有以下两种实现方案：

- hash

- history API

  

### 基于hash

早期的前端路由的实现就是基于location.hash来实现的。其实现原理也很简单，location.hash的值就是URL中#后面的内容。比如下面这个网站，它的location.hash='#me'：

> [https://www.srtian.com#me](https://www.srtian.com/#me)



此外，hash也存在下面几个特性：

- URL中hash值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash部分不会被发送。
- hash值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制hash的切换。
- 我们可以使用hashchange事件来监听hash的变化。

触发hash变化的方式也有两种，一种是通过a标签，并设置href属性，当用户点击这个标签后，URL就会发生改变，也就会触发hashchange事件了：

```html
<a href="#srtian">srtian</a>
```

还有一种方式就是直接使用JavaScript来对loaction.hash进行赋值，从而改变URL，触发hashchange事件：

```javascript
location.hash="#srtian"
```



### 基于History API

前面的hash虽然也很不错，但使用时都需要加上#，并不是很美观。因此到了HTML5，又提供了History API来实现URL的变化。其中做最主要的API有以下两个：history.pushState()和history.repalceState()。

这两个API可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录。此外，这两个api都接受三个参数：

```javascript
window.history.pushState(null, null, "http://www.163.com");
```

- 状态对象（state object）：一个JavaScript对象，与用pushState()方法创建的新历史记录条目关联。无论何时用户导航到新创建的状态，会触发popstate事件，并能在事件中使用该对象。
- 标题（title）：一般浏览器会忽略，最好传入null。
- 地址（URL）：就是需要新增的历史记录的地址，浏览器不会去直接加载改地址，但后面也可能会去尝试加载该地址。此外需要注意的是，传入的URL与当前URL应该是同源的。

此外，还提供了popstate事件来监听历史记录的变化。

```html
window.addEventListener('popstate',function(e){
        var state = e.state
        mainbox.innerHTML = 'current page is ' + state.title
    })
```



两种实现方式的对比：基于Hash的路由实现，兼容性更好；而基于History API的路由，则更正式，更美观，可以设置与当前URL同源的任意URL，路径更直观。此外，基于Hash的路由不需要对服务器做改动，基于History API的路由需要对服务器做一些改造，需要对不同的路由进行相应的设置才行。



![img](https://upload-images.jianshu.io/upload_images/4116027-606686d3756f6093.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp)





## checkbox

可直接用v-model绑定true false



## this.$parent.emit('xx')

this.$on('xx', method)



## router

```
{
      path: '/about/:id',
      name: 'about',
      props: true,
}
```

页面中用props接收id就可以了



用name跳转

```
<router-link :to="{name: 'about'}">About</router-link>
```



多视图

```
{
      path: '/home',
      name: 'home',
      components: {
        default: Home,
        aa: Test
      }
    },
    
    
    <router-view/>
    <router-view name="aa"/>
```



### 全局守卫

```
router.beforeEach((to, from, next) => {
// 判断登陆状态什么的
结束了都要调next，不然走不下去
})

router.beforeResolve((to, from, next) => {

})

router.afterEach((to, from, next) => {

})

```



### 路由独享守卫

```
{
    path: '',
    component: '',
    beforeEnter: (to, from, next) => {
        
    }
}
```



### 组件内

beforeRouteEnter(to, from, next) {}

beforeRouteupdate(to, from, next) {}

beforeRouteLeave(to, from, next) {}



### 异步组件

```
{
    path: 'x',
    component: () => import('./x/x')
}
```



### route

- $route.path 
  字符串，等于当前路由对象的路径，会被解析为绝对路径，如 `"/home/news"` 。
- $route.params 
  对象，包含路由中的动态片段和全匹配片段的键值对
- $route.query 
  对象，包含路由中查询参数的键值对。例如，对于 `/home/news/detail/01?favorite=yes` ，会得到`$route.query.favorite == 'yes'` 。
- $route.router 
  路由规则所属的路由器（以及其所属的组件）。
- $route.matched 
  数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
- $route.name 
  当前路径的名字，如果没有使用具名路径，则名字为空。





## nuxt.js

npx create-nuxt-app test

npm i @nuxtjs/axios



## setTimeout  $nextTick区别

setTimeout(fn, 20) 比 $nextTick 更往后， $nextTick 约等于 setTimeout(fn, 0)。 在实际项目中在一些低端的 android 手机遇到过 $nextTick 的问题，用 setTimeout(fn, 20) 最稳妥。



Vue 在内部对异步队列尝试使用原生的 Promise.then 、 MutationObserver 和 setImmediate ， 如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。



## mixin

```
export const addMediaMixin = {
	data () {
		return {
			xxx
		}
	},
	xxx 写法同vue
}
```

```
import {addMediaMixin} from '@/components/Mixins/AddMediaMixin'

mixins: [addMediaMixin],
```



## 利用双向绑定

v-model个值

子组件

```
model: {
      prop: 'curNav',
      event: 'changeNav'
    },
```

```
props: {
      curNav: {
        type: Number,
        default: 0
      }
    },
```

```
changeNav (index) {
        this.$emit('changeNav', index)
      }
```





## 直接改变prop值

```
:startTime.sync="startDate"
```

```
this.$emit('update:startTime', this.start)
```



## render

````
Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'h' + this.level,   // 标签名称
      this.$slots.default // 子节点数组
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
````

用组件写的话去掉template



### 跳同一页面刷新问题

```
watch
$route (to, from) {
  // 执行数据更新查询
  this.itemId = this.getQueryString('itemId')
  this.initData()
}
```





## 全局注册filter

```
import * as filter from './assets/js/filter'Object.keys(filter).forEach(key => {  Vue.filter(key, filter[key])})
```

```
// 价格最多保留两位，是0则去掉
const priceNormal2 = price => {
  const num = +price
  if (!isNaN(num)) {
    return parseFloat(num.toFixed(2))
  } else {
    return 0
  }
}

const priceNormal0 = price => {
  const num = +price
  if (!isNaN(num)) {
    return num.toFixed(0)
  } else {
    return 0
  }
}

export {
  priceNormal2,
  priceNormal0
}


```



## prop校验

```
mode: {
        type: String,
        default: '',
        validator: function (value) {
          // 这个值必须匹配下列字符串中的一个
          return ['', 'light', 'line', 'error'].indexOf(value) !== -1
        }
      }
```



## 视频插件

vue-video-player



## 复制插件

```
v-clipboard:copy="recommendReason"
v-clipboard:success="onCopySuccess"
```





## 项目增加环境判断

```
package.json 命令中加  cross-env NODE_ENV=dev

判断
process.env.NODE_ENV === "development"

原理
在项目的 config 文件夹下有 dev.env.js 和 prod.env.js 两个文件，它们分别配置开发环境的变量和生产环境的变量。
<<<<<<< HEAD
```



 ## watch

deep

```
scheduleList: {
  handler () {
    console.log(1)
  },
  deep: true
}
```





## 生命周期

vue生命周期总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。

 

> 创建前/后：在beforeCreated阶段，vue实例的挂载元el还没有。

> 载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。

> 更新前/后：当data变化时，会触发beforeUpdate和updated方法。

> 销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在。



### 双向数据绑定原理

vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

具体步骤：

> 第一步：需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter和getter。这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化

> 第二步：compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图

> 第三步：Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是:

> 1、在自身实例化时往属性订阅器(dep)里面添加自己

> 2、自身必须有一个update()方法

> 3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。

> 第四步：MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。



## template编译的理解

简而言之，就是先转化成AST树，再得到的render函数返回VNode（Vue的虚拟DOM节点）

详情步骤：

> 首先，通过compile编译器把template编译成AST语法树（abstract syntax tree 即 源代码的抽象语法结构的树状表现形式），compile是createCompiler的返回值，createCompiler是用以创建编译器的。另外compile还负责合并option。

> 然后，AST会经过generate（将AST语法树转化成render funtion字符串的过程）得到render函数，render的返回值是VNode，VNode是Vue的虚拟DOM节点，里面有（标签名、子节点、文本等等）



## **事件和v-model的实现原理**



## **slot & keep-alive: 内置组件的实现原理**



## **transition: 过渡的实现原理**



## **vue-router: 官方路由的实现原理**

简易版

```
import Home from "./views/Home";
import About from "./views/About";
import Vue from "vue";

class VueRouter {
  constructor(options) {
    this.$options = options;
    this.routeMap = {};

    // 路由响应式
    this.app = new Vue({
      data: {
        current: "/"
      }
    });
  }

  init() {
    this.bindEvents(); //监听url变化
    this.createRouteMap(this.$options); //解析路由配置
    this.initComponent(); // 实现两个组件
  }

  bindEvents() {
    window.addEventListener("load", this.onHashChange.bind(this));
    window.addEventListener("hashchange", this.onHashChange.bind(this));
  }
  onHashChange() {
    this.app.current = window.location.hash.slice(1) || "/";
  }
  createRouteMap(options) {
    options.routes.forEach(item => {
      this.routeMap[item.path] = item.component;
    });
  }
  initComponent() {
    // router-link,router-view
    // <router-link to="">fff</router-link>
    Vue.component("router-link", {
      props: { to: String },
      render(h) {
        // h(tag, data, children)
        return h("a", { attrs: { href: "#" + this.to } }, [
          this.$slots.default
        ]);
      }
    });

    // <router-view></router-view>
    Vue.component("router-view", {
      render: h => {
        console.log(this.routeMap[this.app.current]);
        const comp = this.routeMap[this.app.current];
        return h(comp);
      }
    });
  }
}
VueRouter.install = function(Vue) {
  // 混入
  Vue.mixin({
    beforeCreate() {
      // this是Vue实例
      if (this.$options.router) {
        // 仅在根组件执行一次
        Vue.prototype.$router = this.$options.router;
        this.$options.router.init();
      }
    }
  });
};

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{ path: "/", component: Home }, { path: "/about", component: About }]
});

```



同理可类推出动态组件``component``实现原理

在当前实例的注册组件中找到is传递的组件名对应的组件，再用render函数一调就完事了







## **vuex: 官方状态管理的实现原理**

简易版

```
let Vue;

class Store {
  constructor(options) {
    this.state = new Vue({
      data: options.state
    });

    this.mutations = options.mutations;
    this.actions = options.actions;

    options.getters && this.handleGetters(options.getters)
  }

  // 声明为箭头函数，why？
  commit = (type, arg) => {
    this.mutations[type](this.state, arg);
  };

  dispatch(type, arg) {
    this.actions[type]({
      commit: this.commit,
      state: this.state
    }, arg);
  }

  handleGetters(getters) {
    this.getters = {};
    // 遍历getters所有key
    Object.keys(getters).forEach(key => {
        // 为this.getters定义若干属性，这些属性是只读的
        // $store.getters.score
        Object.defineProperty(this.getters, key, {
            get: () => {
                return getters[key](this.state);
            }
        })
    })
  }
}

function install(_Vue) {
  Vue = _Vue;

  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    }
  });
}

export default { Store, install };

```



## 简易版vue

```
// new KVue({
//     data: {
//         msg: 'hello'
//     }
// })

class KVue {
  constructor(options) {
    this.$options = options;

    this.$data = options.data;
    // 响应化
    this.observe(this.$data);

    // 测试代码
    // new Watcher(this, 'test');
    // this.test;

    // 创建编译器
    new Compile(options.el, this);

    if (options.created) {
        options.created.call(this);
    }
  }

  // 递归遍历，使传递进来的对象响应化
  observe(value) {
    if (!value || typeof value !== "object") {
      return;
    }

    // 遍历
    Object.keys(value).forEach(key => {
      // 对key做响应式处理
      this.defineReactive(value, key, value[key]);
      this.proxyData(key);
    });
  }

  // 在vue根上定义属性代理data中的数据
  proxyData(key) {
    Object.defineProperty(this, key, {
      get() {
        return this.$data[key];
      },
      set(newVal) {
        this.$data[key] = newVal;
      }
    });
  }
  //
  defineReactive(obj, key, val) {
    // 递归
    this.observe(val);

    // 创建Dep实例：Dep和key一对一对应
    const dep = new Dep();

    // 给obj定义属性
    Object.defineProperty(obj, key, {
      get() {
        // 将Dep.target指向的Watcher实例加入到Dep中
        Dep.target && dep.addDep(Dep.target);
        return val;
      },
      set(newVal) {
        if (newVal !== val) {
          val = newVal;
          dep.notify();
        }
      }
    });
  }
}

// Dep:管理若干watcher实例，它和key一对一关系
class Dep {
  constructor() {
    this.deps = [];
  }

  addDep(watcher) {
    this.deps.push(watcher);
  }

  notify() {
    this.deps.forEach(watcher => watcher.update());
  }
}

// 保存ui中依赖，实现update函数可以更新之
class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm;
    this.key = key;
    this.cb = cb;

    // 将当前实例指向Dep.target
    Dep.target = this;
    this.vm[this.key];// 读一次key触发getter
    Dep.target = null;
  }

  update() {
      this.cb.call(this.vm, this.vm[this.key])
    // console.log(`${this.key}属性更新了`);
  }
}

```



compile

```
// 遍历模板，将里面的插值表达式处理
// 另外如果发现k-xx, @xx做特别处理
class Compile {
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el);

    if (this.$el) {
      // 1.$el中的内容搬家到一个fragment，提高操作效率
      this.$fragment = this.node2Fragment(this.$el);
      //   console.log(this.$fragment);

      // 2.编译fragment
      this.compile(this.$fragment);
      //   console.log(this.$fragment);

      // 3.将编译结果追加至宿主中
      this.$el.appendChild(this.$fragment);
    }
  }

  //   遍历el,把里面内容搬到新创建fragment中
  node2Fragment(el) {
    const fragment = document.createDocumentFragment();
    let child;
    while ((child = el.firstChild)) {
      // 由于appenChild是移动操作
      fragment.appendChild(child);
    }
    return fragment;
  }

  //   把动态值替换，把指令和事件做处理
  compile(el) {
    // 遍历el
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach(node => {
      if (this.isElement(node)) {
        // console.log("编译元素：" + node.nodeName);

        // 如果是元素节点，我们要处理指令k-xx，事件@xx
        this.compileElement(node);
      } else if (this.isInterpolation(node)) {
        // console.log("编译文本：" + node.textContent);
        this.compileText(node);
      }

      //   递归子元素
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node);
      }
    });
  }

  isElement(node) {
    return node.nodeType === 1;
  }
  //   插值表达式判断
  isInterpolation(node) {
    //   需要满足{{xx}}
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
  }

  compileElement(node) {
    // 查看node的特性中是否有k-xx，@xx
    const nodeAttrs = node.attributes;
    Array.from(nodeAttrs).forEach(attr => {
      // 获取属性名称和值 k-text="abc"
      const attrName = attr.name; // k-text
      const exp = attr.value; // abc
      // 指令：k-xx
      if (attrName.indexOf("k-") === 0) {
        const dir = attrName.substring(2); // text
        // 执行指令
        this[dir] && this[dir](node, this.$vm, exp);
      } else if(attrName.indexOf('@') === 0) {
          // 事件 @click="handlClick"
          const eventName = attrName.substring(1); // click
          this.eventHandler(node, this.$vm, exp, eventName);

      }
    });
  }
  text(node, vm, exp) {
    this.update(node, vm, exp, "text");
  }

  //   双向数据绑定
  model(node, vm, exp) {
    // update是数据变了改界面
    this.update(node, vm, exp, "model");
    // 界面变了改数值
    node.addEventListener("input", e => {
      vm[exp] = e.target.value;
    });
  }

  modelUpdator(node, value) {
    node.value = value;
  }

  html(node, vm, exp) {
    this.update(node, vm, exp, "html");
  }
  htmlUpdator(node, value) {
    node.innerHTML = value;
  }

  eventHandler(node, vm, exp, eventName){
    // 获取回调函数
    const fn = vm.$options.methods && vm.$options.methods[exp];
    if(eventName && fn) {
        node.addEventListener(eventName, fn.bind(vm))
    }
  }

  //   把插值表达式替换为实际内容
  compileText(node) {
    // {{xxx}}
    // RegExp.$1是匹配分组部分
    // console.log(RegExp.$1);

    const exp = RegExp.$1;
    this.update(node, this.$vm, exp, "text");
  }

  // 编写update函数，它可复用
  // exp是表达式， dir是具体操作：text,html,model
  update(node, vm, exp, dir) {
    const fn = this[dir + "Updator"];
    fn && fn(node, vm[exp]);
    // 创建Watcher
    // new Vue({
    //     data: {
    //         xxx: 'bla'
    //     }
    // })
    // exp就是xxx
    new Watcher(vm, exp, function() {
      fn && fn(node, vm[exp]);
    });
  }

  textUpdator(node, value) {
    node.textContent = value;
  }
}

```



## 流程

判断环境用不同的包解析

浏览器环境下$mount，判断有没写render，没有就看template，template也没有就拿el

然后将template转为render，执行mount



$mount核心-》mountComponent

定义更新函数updateComponent，再用watcher执行一次更新函数，完成挂载

触发钩子 callHook(vm, 'beforeUpdate') 



core/index定义全局api

```
initGlobalAPI
set delete nexttick use mixin extend等

```



再看instance/index

终于找到vue构造函数

上来先_init，定义在initMixin



**initMixin**

给_uid

```
	initLifecycle(vm)
	把组件实例里面用到的常用属性初始化，比如$parent/$root/$children

    initEvents(vm)
    父组件中定义的需要子组件处理的事件

    initRender(vm)
    $slots $scopedSlots初始化 
    $createElement函数声明
	$attrs和$listeners响应化

    callHook(vm, 'beforeCreate')
    
    initInjections(vm) // resolve injections before data/props
    
    initState(vm)
    执行各种数据状态初始化地方，包括数据响应化等等
    顺序 props methods data computed watch
    
    initProvide(vm) // resolve provide after data/props
    
    callHook(vm, 'created')
```



## 虚拟dom

template解析成ast

ast优化：判断静态节点等

转vnode



vnode过程：

根据tag类型判断是html还是组件，都不是就是文本

再判断子元素的类型，判断是不是数组（分单个、多个、空），不是数组认为是文本类型，返回文本的vnode格式

最后返回

```
flags,					// 父节点类型
tag,					// 父节点标签名
data,					// 父节点上绑定的属性、事件等
key: data && data.key,					// 父节点上的key，用来diff
children,					// 子元素
childFlags,				// 子元素类型
el: null          // 真实dom
```



然后走render生成dom

判断传进来的根节点有没vnode，没有则是首次创建，直接调用mount，有则走patch



mount

判断vnode类型，html和文字（简易版，未做组件）

文字

```js
function mountText(vnode, container) {
  const el = document.createTextNode(vnode.children)
  vnode.el = el
  container.appendChild(el)
}
```



html

创建元素

有属性事件就去循环加上

有子元素就mount

```
function mountElement(vnode, container, refNode) {
  const el = document.createElement(vnode.tag)
  vnode.el = el
  const data = vnode.data
  if (data) {
    for (let key in data) {
      patchData(el, key, null, data[key])
    }
  }

  const childFlags = vnode.childFlags
  const children = vnode.children
  if (childFlags !== ChildTypes.EMPTY) {
    if (childFlags == ChildTypes.SINGLE) {
      mount(children, el)
    } else if (childFlags  == ChildTypes.MULTIPLE) {
      for (let i = 0; i < children.length; i++) {
        mount(children[i], el)
      }
    }
  }
  refNode ? container.insertBefore(el, refNode) : container.appendChild(el)
}
```

patchData

style循环加上、class加上，添加事件，attribute等



再来看更新patch

判断类型，

1. 不一样 直接删了旧的重新mount
2. 再将新的分成html和text两种进行比较

文本

将新的el等于旧的el，再比较文本是否一样，不一样则el.nodeValue=新的value

元素

1. 标签不同直接删了旧的重新mount
2. 有新的属性、事件就去更新，旧的没有的就删掉
3. 再比较子元素



分九种

旧单节点 ：

```
新单：直接再走patch
新空：移除元素
新多节点：旧的移除，新的循环mount
```

旧空：

```
新单：直接mount
新空：无操作
新多：循环mount
```

旧多：

```
新单：循环移除旧的，mount新的
新空：循环移除旧的
新多：重点
```



旧多新多：

简易版

新旧循环

如果key相同，patch比较，如果旧的在新的前面，就把旧的移到新的前面

不同就找到位置 mount

循环旧的，不存在就删了

```javascript
let lastIndex = 0
for (let i = 0; i < nextChildren.length; i++) {
  const nextVNode = nextChildren[i]
  let j = 0,
    find = false
  for (j; j < prevChildren.length; j++) {
    const prevVNode = prevChildren[j]
    if (nextVNode.key === prevVNode.key) {
      find = true
      patch(prevVNode, nextVNode, container)
      if (j < lastIndex) {
        // 需要移动
        const refNode = nextChildren[i - 1].el.nextSibling
        container.insertBefore(prevVNode.el, refNode)
        break
      } else {
        // 更新 lastIndex
        lastIndex = j
      }
    }
  }
  if (!find) {
    // 挂载新节点
    const refNode =
      i - 1 < 0
        ? prevChildren[0].el
        : nextChildren[i - 1].el.nextSibling
    mount(nextVNode, container, refNode)
  }
}
// 移除已经不存在的节点
for (let i = 0; i < prevChildren.length; i++) {
  const prevVNode = prevChildren[i]
  const has = nextChildren.find(
    nextVNode => nextVNode.key === prevVNode.key
  )
  if (!has) {
    // 移除
    container.removeChild(prevVNode.el)
  }
}
```



## 爆栈情况

```
"dev": "node -max_old_space_size=4096 build/dev-server.js",
"build": "node -max_old_space_size=4096  build/build.js",
```

在package.json中

如果是run dev时报错,在package.json文件里的scripts字段的 ‘dev’ : node 后面加上 -max_old_space_size=4096，这里的4096单位是M也就是4G（具体的大小根据实际情况而定）;
如果是在打包时 就在项目package.json 文件里修改：“build”: “node 后面加上**-max_old_space_size=4096**



## hook

```
this.$on('hook:beforeDestroy', () => {
  window.removeEventListener('uidChange', this.uidChange)
  window.removeEventListener('onShowEvent', this.backRefresh)
})
```



## vue-cli3+项目 webstorm不能跳转

新建个文件，webstorm里将webpack的配置指向该文件

```

/*此文件未使用，只是为了让idea可以识别实际位置*/
const path = require("path");
 
function resolve (dir) {
  return path.join(__dirname, dir);
}
 
module.exports = {
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
};
```



## vue-cli3增加打包分析

```
 vue add webpack-bundle-analyzer
 
 npm run build --report
```







## vue 36个技巧

### 1.require.context()

1.场景:如页面需要导入多个组件,原始写法:

```
import titleCom from '@/components/home/titleCom'
import bannerCom from '@/components/home/bannerCom'
import cellCom from '@/components/home/cellCom'
components:{titleCom,bannerCom,cellCom}
```

2.这样就写了大量重复的代码,利用 require.context 可以写成

```
const path = require('path')
const files = require.context('@/components/home', false, /\.vue$/)
const modules = {}
files.keys().forEach(key => {
  const name = path.basename(key, '.vue')
  modules[name] = files(key).default || files(key)
})
components:modules
```

这样不管页面引入多少组件,都可以使用这个方法

3.API 方法

```
实际上是 webpack 的方法,vue 工程一般基于 webpack,所以可以使用
require.context(directory,useSubdirectories,regExp)
接收三个参数:
directory：说明需要检索的目录
useSubdirectories：是否检索子目录
regExp: 匹配文件的正则表达式,一般是文件名
```

### 2.watch

#### 2.1 常用用法

1.场景:表格初始进来需要调查询接口 getList(),然后input 改变会重新查询

```
created(){
  this.getList()
},
watch: {
  inpVal(){
    this.getList()
  }
}
```

### 2.2 立即执行

2.可以直接利用 watch 的immediate和handler属性简写

```
watch: {
  inpVal:{
    handler: 'getList',
      immediate: true
  }
}
```

### 2.3 深度监听

3.watch 的 deep 属性,深度监听,也就是监听复杂数据类型

```
watch:{
  inpValObj:{
    handler(newVal,oldVal){
      console.log(newVal)
      console.log(oldVal)
    },
    deep:true
  }
}
```

此时发现oldVal和 newVal 值一样;
因为它们索引同一个对象/数组,Vue 不会保留修改之前值的副本;
所以深度监听虽然可以监听到对象的变化,但是无法监听到具体对象里面那个属性的变化

### 3.  14种组件通讯

#### 3.1 props

这个应该非常属性,就是父传子的属性;
props 值可以是一个数组或对象;

```
// 数组:不建议使用
props:[]

// 对象
props:{
 inpVal:{
  type:Number, //传入值限定类型
  // type 值可为String,Number,Boolean,Array,Object,Date,Function,Symbol
  // type 还可以是一个自定义的构造函数，并且通过 instanceof 来进行检查确认
  required: true, //是否必传
  default:200,  //默认值,对象或数组默认值必须从一个工厂函数获取如 default:()=>[]
  validator:(value) {
    // 这个值必须匹配下列字符串中的一个
    return ['success', 'warning', 'danger'].indexOf(value) !== -1
  }
 }
}
```

#### 3.2 $emit

这个也应该非常常见,触发子组件触发父组件给自己绑定的事件,其实就是子传父的方法

```
// 父组件
<home @title="title">
// 子组件
this.$emit('title',[{title:'这是title'}])
```

#### 3.3 vuex

1.这个也是很常用的,vuex 是一个状态管理器
2.是一个独立的插件,适合数据共享多的项目里面,因为如果只是简单的通讯,使用起来会比较重
3.API

```
state:定义存贮数据的仓库 ,可通过this.$store.state 或mapState访问
getter:获取 store 值,可认为是 store 的计算属性,可通过this.$store.getter 或
       mapGetters访问
mutation:同步改变 store 值,为什么会设计成同步,因为mutation是直接改变 store 值,
         vue 对操作进行了记录,如果是异步无法追踪改变.可通过mapMutations调用
action:异步调用函数执行mutation,进而改变 store 值,可通过 this.$dispatch或mapActions
       访问
modules:模块,如果状态过多,可以拆分成模块,最后在入口通过...解构引入
```

#### 3.4 attrs和*a**t**t**r**s*和listeners

2.4.0 新增
这两个是不常用属性,但是高级用法很常见;
1.$attrs
场景:如果父传子有很多值,那么在子组件需要定义多个 props
解决:$attrs获取子传父中未在 props 定义的值

```
// 父组件
<home title="这是标题" width="80" height="80" imgUrl="imgUrl"/>

// 子组件
mounted() {
  console.log(this.$attrs) //{title: "这是标题", width: "80", height: "80", imgUrl: "imgUrl"}
},
```

相对应的如果子组件定义了 props,打印的值就是剔除定义的属性

```
props: {
  width: {
    type: String,
    default: ''
  }
},
mounted() {
  console.log(this.$attrs) //{title: "这是标题", height: "80", imgUrl: "imgUrl"}
},
```

2.$listeners
场景:子组件需要调用父组件的方法
解决:父组件的方法可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用

```
// 父组件
<home @change="change"/>

// 子组件
mounted() {
  console.log(this.$listeners) //即可拿到 change 事件
}
```

如果是孙组件要访问父组件的属性和调用方法,直接一级一级传下去就可以

3.inheritAttrs

```
// 父组件
<home title="这是标题" width="80" height="80" imgUrl="imgUrl"/>

// 子组件
mounted() {
  console.log(this.$attrs) //{title: "这是标题", width: "80", height: "80", imgUrl: "imgUrl"}
},

inheritAttrs默认值为true，true的意思是将父组件中除了props外的属性添加到子组件的根节点上(说明，即使设置为true，子组件仍然可以通过$attr获取到props意外的属性)
将inheritAttrs:false后,属性就不会显示在根节点上了
```

#### 3.5 provide和inject

2.2.0 新增
描述:
provide 和 inject 主要为高阶插件/组件库提供用例。并不推荐直接用于应用程序代码中;
并且这对选项需要一起使用;
以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。

```
//父组件:
provide: { //provide 是一个对象,提供一个属性或方法
  foo: '这是 foo',
  fooMethod:()=>{
    console.log('父组件 fooMethod 被调用')
  }
},

// 子或者孙子组件
inject: ['foo','fooMethod'], //数组或者对象,注入到子组件
mounted() {
  this.fooMethod()
  console.log(this.foo)
}
//在父组件下面所有的子组件都可以利用inject
```

provide 和 inject 绑定并不是可响应的。这是官方刻意为之的。
然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的,对象是因为是引用类型

```
//父组件:
provide: { 
  foo: '这是 foo'
},
mounted(){
  this.foo='这是新的 foo'
}

// 子或者孙子组件
inject: ['foo'], 
mounted() {
  console.log(this.foo) //子组件打印的还是'这是 foo'
}
```

#### 3.6 parent和*p**a**r**e**n**t*和children

$parent:父实例
$children:子实例

```
//父组件
mounted(){
  console.log(this.$children) 
  //可以拿到 一级子组件的属性和方法
  //所以就可以直接改变 data,或者调用 methods 方法
}

//子组件
mounted(){
  console.log(this.$parent) //可以拿到 parent 的属性和方法
}
```

children和*c**h**i**l**d**r**e**n*和parent 并不保证顺序，也不是响应式的
只能拿到一级父组件和子组件

#### 3.7 $refs

```
// 父组件
<home ref="home"/>

mounted(){
  console.log(this.$refs.home) //即可拿到子组件的实例,就可以直接操作 data 和 methods
}
```

#### 3.8 $root

```
// 父组件
mounted(){
  console.log(this.$root) //获取根实例,最后所有组件都是挂载到根实例上
  console.log(this.$root.$children[0]) //获取根实例的一级子组件
  console.log(this.$root.$children[0].$children[0]) //获取根实例的二级子组件
}
```

#### 3.9 .sync

在 vue@1.x 的时候曾作为双向绑定功能存在，即子组件可以修改父组件中的值;
在 vue@2.0 的由于违背单项数据流的设计被干掉了;
在 vue@2.3.0+ 以上版本又重新引入了这个 .sync 修饰符;

```
// 父组件
<home :title.sync="title" />
//编译时会被扩展为
<home :title="title"  @update:title="val => title = val"/>

// 子组件
// 所以子组件可以通过$emit 触发 update 方法改变
mounted(){
  this.$emit("update:title", '这是新的title')
}
```

#### 3.10 v-slot

2.6.0 新增
1.slot,slot-cope,scope 在 2.6.0 中都被废弃,但未被移除
2.作用就是将父组件的 template 传入子组件
3.插槽分类:
A.匿名插槽(也叫默认插槽): 没有命名,有且只有一个;

```
// 父组件
<todo-list> 
    <template v-slot:default>
       任意内容
       <p>我是匿名插槽 </p>
    </template>
</todo-list> 

// 子组件
<slot>我是默认值</slot>
//v-slot:default写上感觉和具名写法比较统一,容易理解,也可以不用写
```

B.具名插槽: 相对匿名插槽组件slot标签带name命名的;

```
// 父组件
<todo-list> 
    <template v-slot:todo>
       任意内容
       <p>我是匿名插槽 </p>
    </template>
</todo-list> 

//子组件
<slot name="todo">我是默认值</slot>
```

C.作用域插槽: 子组件内数据可以被父页面拿到(解决了数据只能从父页面传递给子组件)

```
// 父组件
<todo-list>
 <template v-slot:todo="slotProps" >
   {{slotProps.user.firstName}}
 </template> 
</todo-list> 
//slotProps 可以随意命名
//slotProps 接取的是子组件标签slot上属性数据的集合所有v-bind:user="user"

// 子组件
<slot name="todo" :user="user" :test="test">
    {{ user.lastName }}
 </slot> 
data() {
    return {
      user:{
        lastName:"Zhang",
        firstName:"yue"
      },
      test:[1,2,3,4]
    }
  },
// {{ user.lastName }}是默认数据  v-slot:todo 当父页面没有(="slotProps")
```

#### 3.11 EventBus

1.就是声明一个全局Vue实例变量 EventBus , 把所有的通信数据，事件监听都存储到这个变量上;
2.类似于 Vuex。但这种方式只适用于极小的项目
3.原理就是利用on和*o**n*和emit 并实例化一个全局 vue 实现数据共享

```
// 在 main.js
Vue.prototype.$eventBus=new Vue()

// 传值组件
this.$eventBus.$emit('eventTarget','这是eventTarget传过来的值')

// 接收组件
this.$eventBus.$on("eventTarget",v=>{
  console.log('eventTarget',v);//这是eventTarget传过来的值
})
```

4.可以实现平级,嵌套组件传值,但是对应的事件名eventTarget必须是全局唯一的

#### 3.12 broadcast和dispatch

vue 1.x 有这两个方法,事件广播和派发,但是 vue 2.x 删除了
下面是对两个方法进行的封装

```
function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}
export default {
  methods: {
    dispatch(componentName, eventName, params) {
      var parent = this.$parent;
      var name = parent.$options.componentName;
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
}
```

#### 3.13 路由传参

1.方案一

```
// 路由定义
{
  path: '/describe/:id',
  name: 'Describe',
  component: Describe
}
// 页面传参
this.$router.push({
  path: `/describe/${id}`,
})
// 页面获取
this.$route.params.id
```

2.方案二

```
// 路由定义
{
  path: '/describe',
  name: 'Describe',
  omponent: Describe
}
// 页面传参
this.$router.push({
  name: 'Describe',
  params: {
    id: id
  }
})
// 页面获取
this.$route.params.id
```

3.方案三

```
// 路由定义
{
  path: '/describe',
  name: 'Describe',
  component: Describe
}
// 页面传参
this.$router.push({
  path: '/describe',
    query: {
      id: id
  `}
)
// 页面获取
this.$route.query.id
```

4.三种方案对比
方案二参数不会拼接在路由后面,页面刷新参数会丢失
方案一和三参数拼接在后面,丑,而且暴露了信息

#### 3.14 Vue.observable

2.6.0 新增
用法:让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象;

```
返回的对象可以直接用于渲染函数和计算属性内，并且会在发生改变时触发相应的更新;
也可以作为最小化的跨组件状态存储器，用于简单的场景。
```

通讯原理实质上是利用Vue.observable实现一个简易的 vuex

```
// 文件路径 - /store/store.js
import Vue from 'vue'

export const store = Vue.observable({ count: 0 })
export const mutations = {
  setCount (count) {
    store.count = count
  }
}

//使用
<template>
    <div>
        <label for="bookNum">数 量</label>
            <button @click="setCount(count+1)">+</button>
            <span>{{count}}</span>
            <button @click="setCount(count-1)">-</button>
    </div>
</template>

<script>
import { store, mutations } from '../store/store' // Vue2.6新增API Observable

export default {
  name: 'Add',
  computed: {
    count () {
      return store.count
    }
  },
  methods: {
    setCount: mutations.setCount
  }
}
</script>
```

### 4.render 函数

1.场景:有些代码在 template 里面写会重复很多,所以这个时候 render 函数就有作用啦

```
// 根据 props 生成标签
// 初级
<template>
  <div>
    <div v-if="level === 1"> <slot></slot> </div>
    <p v-else-if="level === 2"> <slot></slot> </p>
    <h1 v-else-if="level === 3"> <slot></slot> </h1>
    <h2 v-else-if="level === 4"> <slot></slot> </h2>
    <strong v-else-if="level === 5"> <slot></slot> </stong>
    <textarea v-else-if="level === 6"> <slot></slot> </textarea>
  </div>
</template>

// 优化版,利用 render 函数减小了代码重复率
<template>
  <div>
    <child :level="level">Hello world!</child>
  </div>
</template>

<script type='text/javascript'>
  import Vue from 'vue'
  Vue.component('child', {
    render(h) {
      const tag = ['div', 'p', 'strong', 'h1', 'h2', 'textarea'][this.level-1]
      return h(tag, this.$slots.default)
    },
    props: {
      level: {  type: Number,  required: true  } 
    }
  })   
  export default {
    name: 'hehe',
    data() { return { level: 3 } }
  }
</script>
```

2.render 和 template 的对比
前者适合复杂逻辑,后者适合逻辑简单;
后者属于声明是渲染，前者属于自定Render函数;
前者的性能较高，后者性能较低。

### 5.异步组件

场景:项目过大就会导致加载缓慢,所以异步组件实现按需加载就是必须要做的事啦
1.异步注册组件
3种方法

```
// 工厂函数执行 resolve 回调
Vue.component('async-webpack-example', function (resolve) {
  // 这个特殊的 `require` 语法将会告诉 webpack
  // 自动将你的构建代码切割成多个包, 这些包
  // 会通过 Ajax 请求加载
  require(['./my-async-component'], resolve)
})

// 工厂函数返回 Promise
Vue.component(
  'async-webpack-example',
  // 这个 `import` 函数会返回一个 `Promise` 对象。
  () => import('./my-async-component')
)

// 工厂函数返回一个配置化组件对象
const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('./MyComponent.vue'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})
```

异步组件的渲染本质上其实就是执行2次或者2次以上的渲染, 先把当前组件渲染为注释节点, 当组件加载成功后, 通过 forceRender 执行重新渲染。或者是渲染为注释节点, 然后再渲染为loading节点, 在渲染为请求完成的组件

2.路由的按需加载

```
webpack< 2.4 时
{
  path:'/',
  name:'home',
  components:resolve=>require(['@/components/home'],resolve)
}

webpack> 2.4 时
{
  path:'/',
  name:'home',
  components:()=>import('@/components/home')
}

import()方法由es6提出，import()方法是动态加载，返回一个Promise对象，then方法的参数是加载到的模块。类似于Node.js的require方法，主要import()方法是异步加载的。
```

### 6.动态组件

场景:做一个 tab 切换时就会涉及到组件动态加载

```
<component v-bind:is="currentTabComponent"></component>
```

但是这样每次组件都会重新加载,会消耗大量性能,所以`<keep-alive>` 就起到了作用

```
<keep-alive>
  <component v-bind:is="currentTabComponent"></component>
</keep-alive>
```

这样切换效果没有动画效果,这个也不用着急,可以利用内置的`<transition>`

```
<transition>
<keep-alive>
  <component v-bind:is="currentTabComponent"></component>
</keep-alive>
</transition>
```

### 7.递归组件

场景:如果开发一个 tree 组件,里面层级是根据后台数据决定的,这个时候就需要用到动态组件

```
// 递归组件: 组件在它的模板内可以递归的调用自己，只要给组件设置name组件就可以了。
// 设置那么House在组件模板内就可以递归使用了,不过需要注意的是，
// 必须给一个条件来限制数量，否则会抛出错误: max stack size exceeded
// 组件递归用来开发一些具体有未知层级关系的独立组件。比如：
// 联级选择器和树形控件 

<template>
  <div v-for="(item,index) in treeArr">
      子组件，当前层级值： {{index}} <br/>
      <!-- 递归调用自身, 后台判断是否不存在改值 -->
      <tree :item="item.arr" v-if="item.flag"></tree>
  </div>
</template>
<script>
export default {
  // 必须定义name，组件内部才能递归调用
  name: 'tree',
  data(){
    return {}
  },
  // 接收外部传入的值
  props: {
     item: {
      type:Array,
      default: ()=>[]
    }
  }
}
</script>
```

递归组件必须设置name 和结束的阀值

### 8.函数式组件

定义:无状态,无法实例化，内部没有任何生命周期处理方法
规则:在 2.3.0 之前的版本中，如果一个函数式组件想要接收 prop，则 props 选项是必须的。

```
在 2.3.0 或以上的版本中，你可以省略 props 选项，所有组件上的特性都会被自动隐式解析为 prop
在 2.5.0 及以上版本中，如果你使用了单文件组件(就是普通的.vue 文件),可以直接在 template 上声明functional
组件需要的一切都是通过 context 参数传递
```

context 属性有:
1.props：提供所有 prop 的对象
2.children: VNode 子节点的数组
3.slots: 一个函数，返回了包含所有插槽的对象
4.scopedSlots: (2.6.0+) 一个暴露传入的作用域插槽的对象。也以函数形式暴露普通插槽。
5.data：传递给组件的整个数据对象，作为 createElement 的第二个参数传入组件
6.parent：对父组件的引用
7.listeners: (2.3.0+) 一个包含了所有父组件为当前组件注册的事件监听器的对象。这是 data.on 的一个别名。
8.injections: (2.3.0+) 如果使用了 inject 选项，则该对象包含了应当被注入的属性

```
<template functional>
  <div v-for="(item,index) in props.arr">{{item}}</div>
</template>
```

### 9.components和 Vue.component

components:局部注册组件

```
export default{
  components:{home}
}
```

Vue.component:全局注册组件

```
Vue.component('home',home)
```

### 10.Vue.extend

场景:vue 组件中有些需要将一些元素挂载到元素上,这个时候 extend 就起到作用了
是构造一个组件的语法器
写法:

```
// 创建构造器
var Profile = Vue.extend({
  template: '<p>{{extendData}}</br>实例传入的数据为:{{propsExtend}}</p>',//template对应的标签最外层必须只有一个标签
  data: function () {
    return {
      extendData: '这是extend扩展的数据',
    }
  },
  props:['propsExtend']
})

// 创建的构造器可以挂载到元素上,也可以通过 components 或 Vue.component()注册使用
// 挂载到一个元素上。可以通过propsData传参.
new Profile({propsData:{propsExtend:'我是实例传入的数据'}}).$mount('#app-extend')

// 通过 components 或 Vue.component()注册
Vue.component('Profile',Profile)
```

### 11.mixins

场景:有些组件有些重复的 js 逻辑,如校验手机验证码,解析时间等,mixins 就可以实现这种混入
mixins 值是一个数组

```
const mixin={
    created(){
      this.dealTime()
    },
    methods:{
      dealTime(){
        console.log('这是mixin的dealTime里面的方法');
      }
  }
}

export default{
  mixins:[mixin]
}
```

### 12.extends

extends用法和mixins很相似,只不过接收的参数是简单的选项对象或构造函数,所以extends只能单次扩展一个组件

```
const extend={
    created(){
      this.dealTime()
    },
    methods:{
      dealTime(){
        console.log('这是mixin的dealTime里面的方法');
      }
  }
}

export default{
  extends:extend
}
```

### 13.Vue.use()

场景:我们使用 element时会先 import,再 Vue.use()一下,实际上就是注册组件,触发 install 方法;
这个在组件调用会经常使用到;
会自动组织多次注册相同的插件.

### 14.install

场景:在 Vue.use()说到,执行该方法会触发 install
是开发vue的插件,这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象(可选)

```
var MyPlugin = {};
  MyPlugin.install = function (Vue, options) {
    // 2. 添加全局资源,第二个参数传一个值默认是update对应的值
    Vue.directive('click', {
      bind(el, binding, vnode, oldVnode) {
        //做绑定的准备工作,添加时间监听
        console.log('指令my-directive的bind执行啦');
      },
      inserted: function(el){
      //获取绑定的元素
      console.log('指令my-directive的inserted执行啦');
      },
      update: function(){
      //根据获得的新值执行对应的更新
      //对于初始值也会调用一次
      console.log('指令my-directive的update执行啦');
      },
      componentUpdated: function(){
      console.log('指令my-directive的componentUpdated执行啦');
      },
      unbind: function(){
      //做清理操作
      //比如移除bind时绑定的事件监听器
      console.log('指令my-directive的unbind执行啦');
      }
    })

    // 3. 注入组件
    Vue.mixin({
      created: function () {
        console.log('注入组件的created被调用啦');
        console.log('options的值为',options)
      }
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      console.log('实例方法myMethod被调用啦');
    }
  }

  //调用MyPlugin
  Vue.use(MyPlugin,{someOption: true })

  //3.挂载
  new Vue({
    el: '#app'
  });
```

更多请戳 vue中extend，mixins，extends，components,install的几个操作

### 15. Vue.nextTick

2.1.0 新增
场景:页面加载时需要让文本框获取焦点
用法:在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM

```
mounted(){ //因为 mounted 阶段 dom 并未渲染完毕,所以需要$nextTick
  this.$nextTick(() => {
    this.$refs.inputs.focus() //通过 $refs 获取dom 并绑定 focus 方法
  })
}
```

### 16.Vue.directive

#### 16.1 使用

场景:官方给我们提供了很多指令,但是我们如果想将文字变成指定的颜色定义成指令使用,这个时候就需要用到Vue.directive

```
// 全局定义
Vue.directive("change-color",function(el,binding,vnode){
  el.style["color"]= binding.value;
})

// 使用
<template>
<div v-change-color=“color”>{{message}}</div>
</template>
<script>
  export default{
    data(){
      return{
        color:'green'
      }
    }
  }
</script>
```

#### 16.2 生命周期

1.bind 只调用一次，指令第一次绑定到元素时候调用，用这个钩子可以定义一个绑定时执行一次的初始化动作。
2.inserted:被绑定的元素插入父节点的时候调用(父节点存在即可调用，不必存在document中)
3.update: 被绑定与元素所在模板更新时调用，而且无论绑定值是否有变化，通过比较更新前后的绑定值，忽略不必要的模板更新
4.componentUpdate :被绑定的元素所在模板完成一次更新更新周期的时候调用
5.unbind: 只调用一次，指令月元素解绑的时候调用

### 17. Vue.filter

场景:时间戳转化成年月日这是一个公共方法,所以可以抽离成过滤器使用

```
// 使用
// 在双花括号中
{{ message | capitalize }}

// 在 `v-bind` 中
<div v-bind:id="rawId | formatId"></div>

// 全局注册
Vue.filter('stampToYYMMDD', (value) =>{
  // 处理逻辑
})

// 局部注册
filters: {
  stampToYYMMDD: (value)=> {
    // 处理逻辑
  }
}

// 多个过滤器全局注册
// /src/common/filters.js
let dateServer = value => value.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3') 
export { dateServer }
// /src/main.js
import * as custom from './common/filters/custom'
Object.keys(custom).forEach(key => Vue.filter(key, custom[key]))
```

### 18.Vue.compile

场景:在 render 函数中编译模板字符串。只在独立构建时有效

```
var res = Vue.compile('<div><span>{{ msg }}</span></div>')

new Vue({
  data: {
    msg: 'hello'
  },
  render: res.render,
  staticRenderFns: res.staticRenderFns
})
```

### 19.Vue.version

场景:有些开发插件需要针对不同 vue 版本做兼容,所以就会用到 Vue.version
用法:Vue.version()可以获取 vue 版本

```
var version = Number(Vue.version.split('.')[0])

if (version === 2) {
  // Vue v2.x.x
} else if (version === 1) {
  // Vue v1.x.x
} else {
  // Unsupported versions of Vue
}
```

### 20.Vue.set()

场景:当你利用索引直接设置一个数组项时或你修改数组的长度时,由于 Object.defineprototype()方法限制,数据不响应式更新

```
不过vue.3.x 将利用 proxy 这个问题将得到解决
```

解决方案:

```
// 利用 set
this.$set(arr,index,item)

// 利用数组 push(),splice()
```

### 21.Vue.config.keyCodes

场景:自定义按键修饰符别名

```
// 将键码为 113 定义为 f2
Vue.config.keyCodes.f2 = 113;
<input type="text" @keyup.f2="add"/>
```

### 22.Vue.config.performance

场景:监听性能

```
Vue.config.performance = true
```

只适用于开发模式和支持 performance.mark API 的浏览器上

### 23.Vue.config.errorHandler

1.场景:指定组件的渲染和观察期间未捕获错误的处理函数
2.规则:

```
  从 2.2.0 起，这个钩子也会捕获组件生命周期钩子里的错误。同样的，当这个钩子是 undefined 时，被捕获的错误会通过 console.error 输出而避免应用崩溃
  从 2.4.0 起，这个钩子也会捕获 Vue 自定义事件处理函数内部的错误了
  从 2.6.0 起，这个钩子也会捕获 v-on DOM 监听器内部抛出的错误。另外，如果任何被覆盖的钩子或处理函数返回一个 Promise 链 (例如 async 函数)，则来自其 Promise 链的错误也会被处理
```

3.使用

```
Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
}
```

### 24.Vue.config.warnHandler

2.4.0 新增
1.场景:为 Vue 的运行时警告赋予一个自定义处理函数,只会在开发者环境下生效
2.用法:

```
Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` 是组件的继承关系追踪
}
```

### 25.v-pre

场景:vue 是响应式系统,但是有些静态的标签不需要多次编译,这样可以节省性能

```
<span v-pre>{{ this will not be compiled }}</span>   显示的是{{ this will not be compiled }}
<span v-pre>{{msg}}</span>     即使data里面定义了msg这里仍然是显示的{{msg}}
```

### 26.v-cloak

场景:在网速慢的情况下,在使用vue绑定数据的时候，渲染页面时会出现变量闪烁
用法:这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕

```
// template 中
<div class="#app" v-cloak>
    <p>{{value.name}}</p>
</div>

// css 中
[v-cloak] {
    display: none;
}
```

这样就可以解决闪烁,但是会出现白屏,这样可以结合骨架屏使用

### 27.v-once

场景:有些 template 中的静态 dom 没有改变,这时就只需要渲染一次,可以降低性能开销

```
<span v-once> 这时只需要加载一次的标签</span>
```

v-once 和 v-pre 的区别:
v-once只渲染一次；v-pre不编译,原样输出

### 28.事件修饰符

```
.stop:阻止冒泡
.prevent:阻止默认行为
.self:仅绑定元素自身触发
.once: 2.1.4 新增,只触发一次
.passive: 2.3.0 新增,滚动事件的默认行为 (即滚动行为) 将会立即触发,不能和.prevent 一起使用
```

### 29.按键修饰符和按键码

场景:有的时候需要监听键盘的行为,如按下 enter 去查询接口等

```
// 对应键盘上的关键字
.enter
.tab
.delete (捕获“删除”和“退格”键)
.esc
.space
.up
.down
.left
.right
```

### 30.Vue-router

场景:Vue-router 是官方提供的路由插件

#### 30.1 缓存和动画

1.路由是使用官方组件 vue-router,使用方法相信大家非常熟悉;
2.这里我就叙述下路由的缓存和动画;
3.可以用exclude(除了)或者include(包括),2.1.0 新增来坐判断

```
<transition>
  <keep-alive :include="['a', 'b']">
  //或include="a,b" :include="/a|b/",a 和 b 表示组件的 name
  //因为有些页面,如试试数据统计,要实时刷新,所以就不需要缓存
    <router-view/> //路由标签
  </keep-alive>
  <router-view exclude="c"/> 
  // c 表示组件的 name值
</transition>
```

注:匹配首先检查组件自身的 name 选项，如果 name 选项不可用，则匹配它的局部注册名称 (父组件 components 选项的键值)。匿名组件不能被匹配
4.用 v-if 做判断,组件会重新渲染,但是不用一一列举组件 name

#### 30.2 全局路由钩子

1.router.beforeEach

```
router.beforeEach((to, from, next) => {
  console.log('全局前置守卫：beforeEach -- next需要调用') //一般登录拦截用这个,也叫导航钩子守卫
  if (path === '/login') {
    next()
    return
  }
  if (token) {
    next();
  } 
})
```

2.router.beforeResolve (v 2.5.0+)
和beforeEach类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用
即在 beforeEach之后调用

3.router.afterEach
全局后置钩子
在所有路由跳转结束的时候调用
这些钩子不会接受 next 函数也不会改变导航本身

#### 30.3 组件路由钩子

1.beforeRouteEnter
在渲染该组件的对应路由被确认前调用，用法和参数与router.beforeEach类似，next需要被主动调用
此时组件实例还未被创建，不能访问this
可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数

```
beforeRouteEnter (to, from, next) {
  // 这里还无法访问到组件实例，this === undefined
  next( vm => {
    // 通过 `vm` 访问组件实例
  })
}
```

2.beforeRouteUpdate (v 2.2+)
在当前路由改变，并且该组件被复用时调用，可以通过this访问实例， next需要被主动调用，不能传回调

3.beforeRouteLeave
导航离开该组件的对应路由时调用，可以访问组件实例 this，next需要被主动调用，不能传回调

#### 30.4 路由模式

设置 mode 属性:hash或 history

#### 30.5 Vue.$router

```
this.$router.push():跳转到不同的url，但这个方法回向history栈添加一个记录，点击后退会返回到上一个页面
this.$router.replace():不会有记录
this.$router.go(n):n可为正数可为负数。正数返回上一个页面,类似 window.history.go(n)
```

#### 30.6 Vue.$route

表示当前跳转的路由对象,属性有:
name:路由名称
path:路径
query:传参接收值
params:传参接收值
fullPath:完成解析后的 URL，包含查询参数和 hash 的完整路径
matched:路由记录副本
redirectedFrom:如果存在重定向，即为重定向来源的路由的名字

```
this.$route.params.id:获取通过 params 或/:id传参的参数
this.$route.query.id:获取通过 query 传参的参数
```

#### 30.7 router-view 的 key

场景:由于 Vue 会复用相同组件, 即 /page/1 => /page/2 或者 /page?id=1 => /page?id=2 这类链接跳转时, 将不在执行created, mounted之类的钩子

```
<router-view :key="$route.fullpath"></router-view>
```

这样组件的 created 和 mounted 就都会执行

### 31.Object.freeze

场景:一个长列表数据,一般不会更改,但是vue会做getter和setter的转换
用法:是ES5新增的特性，可以冻结一个对象，防止对象被修改
支持:vue 1.0.18+对其提供了支持，对于data或vuex里使用freeze冻结了的对象，vue不会做getter和setter的转换
注意:冻结只是冻结里面的单个属性,引用地址还是可以更改

```
new Vue({
    data: {
        // vue不会对list里的object做getter、setter绑定
        list: Object.freeze([
            { value: 1 },
            { value: 2 }
        ])
    },
    mounted () {
        // 界面不会有响应,因为单个属性被冻结
        this.list[0].value = 100;

        // 下面两种做法，界面都会响应
        this.list = [
            { value: 100 },
            { value: 200 }
        ];
        this.list = Object.freeze([
            { value: 100 },
            { value: 200 }
        ]);
    }
})
```

### 32.调试 template

场景:在Vue开发过程中, 经常会遇到template模板渲染时JavaScript变量出错的问题, 此时也许你会通过console.log来进行调试
这时可以在开发环境挂载一个 log 函数

```
// main.js
Vue.prototype.$log = window.console.log;

// 组件内部
<div>{{$log(info)}}</div>
```

### 33.vue-loader 小技巧

#### 33.1 preserveWhitespace

场景:开发 vue 代码一般会有空格,这个时候打包压缩如果不去掉空格会加大包的体积
配置preserveWhitespace可以减小包的体积

```
{
  vue: {
    preserveWhitespace: false
  }
}
```

#### 33.2 transformToRequire

场景:以前在写 Vue 的时候经常会写到这样的代码：把图片提前 require 传给一个变量再传给组件

```
// page 代码
<template>
  <div>
    <avatar :img-src="imgSrc"></avatar>
  </div>
</template>
<script>
  export default {
    created () {
      this.imgSrc = require('./assets/default-avatar.png')
    }
  }
</script>
```

现在:通过配置 transformToRequire 后，就可以直接配置，这样vue-loader会把对应的属性自动 require 之后传给组件

```
// vue-cli 2.x在vue-loader.conf.js 默认配置是
transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
}

// 配置文件,如果是vue-cli2.x 在vue-loader.conf.js里面修改
  avatar: ['default-src']

// vue-cli 3.x 在vue.config.js
// vue-cli 3.x 将transformToRequire属性换为了transformAssetUrls
module.exports = {
  pages,
  chainWebpack: config => {
    config
      .module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
      options.transformAssetUrls = {
        avatar: 'img-src',
      }
      return options;
      });
  }
}

// page 代码可以简化为
<template>
  <div>
    <avatar img-src="./assets/default-avatar.png"></avatar>
  </div>
</template>
```

### 34.为路径设置别名

1.场景:在开发过程中，我们经常需要引入各种文件，如图片、CSS、JS等，为了避免写很长的相对路径（../），我们可以为不同的目录配置一个别名

2.vue-cli 2.x 配置

```
// 在 webpack.base.config.js中的 resolve 配置项，在其 alias 中增加别名
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
```

3.vue-cli 3.x 配置

```
// 在根目录下创建vue.config.js
var path = require('path')
function resolve (dir) {
  console.log(__dirname)
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set(key, value) // key,value自行定义，比如.set('@@', resolve('src/components'))
  }
}
```

### 35.img 加载失败

场景:有些时候后台返回图片地址不一定能打开,所以这个时候应该加一张默认图片

```
// page 代码
<img :src="imgUrl" @error="handleError" alt="">
<script>
export default{
  data(){
    return{
      imgUrl:''
    }
  },
  methods:{
    handleError(e){
      e.target.src=reqiure('图片路径') //当然如果项目配置了transformToRequire,参考上面 27.2
    }
  }
}
</script>
```

### 36.css

#### 36.1 局部样式

1.Vue中style标签的scoped属性表示它的样式只作用于当前模块，是样式私有化.

2.渲染的规则/原理：
给HTML的DOM节点添加一个 不重复的data属性 来表示 唯一性
在对应的 CSS选择器 末尾添加一个当前组件的 data属性选择器来私有化样式，如：.demo[data-v-2311c06a]{}
如果引入 less 或 sass 只会在最后一个元素上设置

```
// 原始代码
<template>
  <div class="demo">
    <span class="content">
      Vue.js scoped
    </span>
  </div>
</template>

<style lang="less" scoped>
  .demo{
    font-size: 16px;
    .content{
      color: red;
    }
  }
</style>

// 浏览器渲染效果
<div data-v-fed36922>
  Vue.js scoped
</div>
<style type="text/css">
.demo[data-v-039c5b43] {
  font-size: 14px;
}
.demo .content[data-v-039c5b43] { //.demo 上并没有加 data 属性
  color: red;
}
</style>
```

#### 36.2 deep 属性

```
// 上面样式加一个 /deep/
<style lang="less" scoped>
  .demo{
    font-size: 14px;
  }
  .demo /deep/ .content{
    color: blue;
  }
</style>

// 浏览器编译后
<style type="text/css">
.demo[data-v-039c5b43] {
  font-size: 14px;
}
.demo[data-v-039c5b43] .content {
  color: blue;
}
</style>
```





## v-if和v-for哪个优先级更高？

源码中找答案compiler/codegen/index.js   genElement中

可以看到先执行for

```
if (el.staticRoot && !el.staticProcessed) {
  return genStatic(el, state)
} else if (el.once && !el.onceProcessed) {
  return genOnce(el, state)
} else if (el.for && !el.forProcessed) {
  return genFor(el, state)
} else if (el.if && !el.ifProcessed) {
  return genIf(el, state)
}
```

两者同级时，渲染函数如下：

```
(function anonymous( ) { with(this){return _c('div',{attrs:{"id":"demo"}},[_c('h1',[_v("v-for和v-if谁的优先 级高？应该如何正确使用避免性能问题？")]),_v(" "), _l((children),function(child){return (isFolder)?_c('p', [_v(_s(child.title))]):_e()})],2)} })

```

_l包含了isFolder的条件判断
两者不同级时，渲染函数如下

```
(function anonymous( ) { with(this){return _c('div',{attrs:{"id":"demo"}},[_c('h1',[_v("v-for和v-if谁的优先 级高？应该如何正确使用避免性能问题？")]),_v(" "), (isFolder)?_l((children),function(child){return _c('p', [_v(_s(child.title))])}):_e()],2)} })
```


结论：

1. 显然v-for优先于v-if被解析（把你是怎么知道的告诉面试官）
2. 如果同时出现，每次渲染都会先执行循环再判断条件，无论如何循环都不可避免，浪费了性能
3. 要避免出现这种情况，则在外层嵌套template，在这一层进行v-if判断，然后在内部进行v-for循环 
4. 如果条件出现在循环内部，可通过计算属性提前过滤掉那些不需要显示的项



## Vue组件data为什么必须是个函数而Vue的根实例则没有此限制？ 

源码中找答案：src\core\instance\state.js - initData() 

```
data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {}
```

结论:
Vue组件可能存在多个实例，如果使用对象形式定义data，则会导致它们共用一个data对象，那么状态 变更将会影响所有组件实例，这是不合理的；采用函数形式定义，在initData时会将其作为工厂函数返 回全新data对象，有效规避多实例之间状态污染问题。

而在Vue根实例创建过程中则不存在该限制，也 是因为根实例只能有一个，不需要担心这种情况。

mergeData处有判断，组件没vm实例，会走校验data类型，根实例有实例则跳过了校验































