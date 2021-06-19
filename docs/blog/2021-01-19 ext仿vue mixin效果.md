# ext仿vue mixin效果

最近在做ext项目时，发现给页面加同一功能时总是需要复制粘贴同一份代码，ext自带的只有继承，用继承来实现挺麻烦的，所以想到了用vue中的mixin来实现需求。



## 实现

参考了页面结构后，总结出几种类型：

1. 生命周期（函数形式）
2. actions（对象形式，需递归合并）
3. 其他（直接合并）

那么来动手实现吧

源代码如下：

```
/**
 * 仿Vue mixin 做混入操作
 * 有冲突的以main为主
 * @param main
 * @param second
 */
SF.mixin = function (main, second) {
	for (var key in second) {
		if (second.hasOwnProperty(key)) {
			if (key === 'onInit' || key === 'initMgr') {
				// merge function
				if (main.hasOwnProperty(key)) {
					// 为了兼容单独mgr的写法，有才去合并
					main[key] = mergeFunction(main[key], second[key]);
				}
			} else if (key === 'actions') {
				// merge object
				SF.mixin(main[key], second[key]);
			} else {
				// cover
				if (!main.hasOwnProperty(key)) {
					main[key] = second[key];
				}
			}
		}
	}
};
/**
 * 合并两个函数，不做替换，依次执行
 * @param mainFunction
 * @param secondFunction
 * @returns {function(...[*]=)}
 */
var mergeFunction = function (mainFunction, secondFunction) {
	return function () {
		mainFunction.call(this);
		secondFunction.call(this);
	};
};
```

因为所涉及的页面比较少，所以实现上也是很简单。

函数形式的就返回个新函数，其中调用需合并的函数，注意需要改变this指向。

actions就需要将两个对象合并在一起，这里直接递归调用，再走普通形式即可。

普通数据的话，如果主合并对象存在该属性，则以主的为准，不存在时再将被复制对象复制给主对象。



## 使用

下面来看下怎么用吧

将公共部分的代码写在一个对象中，再按常规操作导出

```
var moveNumberPlugin = {
	onInit: xxx,
	actions: xxx
}
```

```
Ext.ns('B.commonUtils');
B.commonUtils.moveNumberPlugin = moveNumberPlugin;
```

在需要的页面调用

```
SF.mixin(main, moveNumberPlugin)
```

即可完成合并

因为是直接对对象操作，所以不需要再赋值给主对象



## 不足

这里需要``SF.mixin()``一下，跟vue中写法还是不一样的。

原因主要是按照vue的写法的话，需要改动ext的源码，考虑到需要耗费的时间，还是直接用这种方式简单些。

