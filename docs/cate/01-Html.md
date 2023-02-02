# HTML

## 语义化

html 语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析。在没有引入样式 CCS 样式的时候也能以一种可以分辨出来大致表示内容的文档格式显示，并且是容易阅读的。



 搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，利于 SEO。 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。



无障碍



```
<article> 独立的区域
<aside>	侧边栏
<details> 可以展开收起的区域
<figcaption>与其相关联的图片的说明/标题
<figure> 图片
<footer>	
<header>
<main>
<mark> 突出的文本
<nav>
<section>  一节，一般来说会有包含一个标题。
<summary> like detail
<time> 时间
```

## 多个字的字体连续放大的效果

可以使用em单位实现相对于父级标签的字体放大或缩小(大于1即放大，小于1即缩小)

```
<div style="font-size:16px;">parent<div style="font-size: 2em;">children</div></div>
```



## HTML5存储类型

- **cookie**: 最大 4k, 基本无兼容问题, 所有同源tab 共享, 每次请求都携带, key-value 存储, value 只存字符串
- **sessionStorage** 无大小限制, 只在当前 tab 有效, tab 关闭即失效, key-value 存储, value 只存字符串，在当前页打开的新tab会复制一份。
- **localStorage** 最大 5M-10M, 所有同源 tab 共享, 能持久化存储, key-value 存储, value 只存字符串
- **indexDB** 无大小限制, key-value 存储,value 可以任意类型, 同源, 支持事务, 最大 250M, 兼容 ie10
- **webSQL** 支持版本,事务,支持 sql 语句, 不兼容 ie



- `cookie`: `expire` 和 `max-age` 都能控制数据的存储时间。`expire` 是一个绝对的过期时间，`max-age`是文档被访问之后的存活时间（是相对时间）。`max-age` 优先级更高。
- `sessionStorage`: 当会话被关闭后（浏览器、标签页被关闭），就会被清除。与 `localStorage` 用法一样。
- `localStorage`: 除非被主动清除，不然永久储存在浏览器中。
- `IndexedDB`: 没有过期时间，除非主动清除。

### `localStorage`怎么设置过期时间
封装一套方法，设置时自动带上`expire` 一个绝对的过期时间，取的时候判断是否过期，过期则删除并返回null


### indexDB
参考https://blog.csdn.net/yuyuking/article/details/118762576
js写法，去创建数据库

### webSQL
相当于写sql去创建数据库，去取值

## 单词缩写

```
<abbr title="People's Republic of China">PRC</abbr>
```

鼠标放上去显示title



## 编辑页面

- 让某个元素可以编辑，可以使用 `contenteditable` 属性。
- 让整个页面可编辑可以使用 `document.designMode` 属性。 = on / off。或者`contenteditable`加在根元素。




## 检测浏览器是否支持HTML5特性

`<!--[if lte IE8]> <!--[endif]>`

判断浏览器是否支持h5的一些新特性即可，canvas，applicationCache，localStorage等都可以，但是有些浏览器对h5的特性是只支持一部分的，因此最好需要用的特性都在代码中做一个基本的判定



## datalist

input加下拉提示

```
<input id="myCar" list="cars" />
<datalist id="cars">
  <option value="BMW">
  <option value="Ford">
  <option value="Volvo">
</datalist>
```

一般都使用封装的



## output

<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0
<input type="range" id="a" value="50">100
+<input type="number" id="b" value="50">
=<output name="x" for="a b"></output>
</form>

output for input id 可将值输出



## meta的属性

1.chartset='utf-8' 声明文档的字符编码
2.http-equiv="X-UA-Compatible" 文档兼容模式
3.name="viewport" content="width=device-width, initial-scale=1.0" 用户网页的可视区域



## shadow dom

1. 查看

   chrome浏览器为例，f12显示控制台，勾选show user agent shadow dom

2. 概念

   Shadow DOM是HTML的一个规范 ，它允许浏览器开发者封装自己的HTML标签、CSS样式和特定的javascript代码，同时也可以让开发人员创建类似`<video>`这样的自定义一级标签，创建这些新标签内容和相关的的API被称为Web Component。

   ![](https://upload-images.jianshu.io/upload_images/7632777-b09a7987c6b16f22.png?imageMogr2/auto-orient/strip|imageView2/2/w/682/format/webp)

- **shadow-root**：Shadow DOM的根节点；
- **shadow-tree**：Shadow DOM包含的子节点树结构；
- **shadow-host**：Shadow DOM的容器元素，如：`<video>`标签；

3. 自定义Shadow DOM

   ```
   <el-h1>
      <h1>这是不支持shadow-dom的标题~</h1>
   </el-h1>
   ```

   ```
   if (document.body.createShadowRoot) {
     let host = document.querySelector('el-h1')
     let root = host.createShadowRoot()
     root.innerHTML = '<h2 style="background-color: pink">woshilz</h2>'
   }
   ```

   



## 度量值(进度条)

```
<p>显示度量值：</p>
<meter value="3" min="0" max="10">2/10</meter><br>
<meter value="0.6">60%</meter>
<p><b>注释：</b>Internet Explorer 不支持 meter 标签。</p>
```



```
<progress value="88" max="100"></progress>
```

 因各个浏览器UI表现不统一，实际业务中极少用原生progress 



## a标签

rel="noopener"

 同源的两个 tab，tabA 打开了 tabB。如果 A 打开 B 的 link 中没有 rel="noopener"，则一旦 B 页面有密集运算（B卡顿），A 也会被卡死。 



## **为什么利用多个域名来存储网站资源会更有效 ？**

- 确保用户在不同地区能用最快的速度打开网站，其中某个域名崩溃用户也能通过其他域名访问网站。
- CDN 缓存更方便。简单来说，CDN 主要用来使用户就近获取资源。
- 突破浏览器并发限制。同一时间针对同一域名下的请求有一定数量限制，超过限制数目的请求会被阻塞。大多数浏览器的并发数量都控制在6以内。有些资源的请求时间很长，因而会阻塞其他资源的请求。因此，对于一些静态资源，如果放到不同的域名下面就能实现与其他资源的并发请求。
- Cookieless, 节省带宽，尤其是上行带宽 一般比下行要慢。
- 对于 UGC 的内容和主站隔离，防止不必要的安全问题。
- 数据做了划分，甚至切到了不同的物理集群，通过子域名来分流比较省事. 这个可能被用的不多。



## media=all
媒体查询

```
<link media="value">
```

| 值         | 描述                                         |
| :--------- | :------------------------------------------- |
| screen     | 计算机屏幕（默认）。                         |
| tty        | 电传打字机以及类似的使用等宽字符网格的媒介。 |
| tv         | 电视机类型设备（低分辨率、有限的滚屏能力）。 |
| projection | 放映机。                                     |
| handheld   | 手持设备（小屏幕、有限带宽）。               |
| print      | 打印预览模式/打印页面。                      |
| braille    | 盲人点字法反馈设备。                         |
| aural      | 语音合成器。                                 |
| all        | 适用于所有设备。                             |



## input pattern

最近在做手机页面时，遇到数字输入的键盘的问题，之前的做法只是一刀切的使用 type="tel"，不过一直觉得九宫格的电话号码键盘上的英文字母太碍事了。于是想要尝试其它的实现方案，最终的结论却令人沮丧。不过也趁机详细了解了下pattern这个属性。

**type="tel" 和 type="number" 的区别**

这里还是先那么先交代一下最初遇到的问题。其实无论是tel还是number都不是完美的：

**type="tel"**

- 优点是iOS和Android的键盘表现都差不多
- 缺点是那些字母好多余，虽然我没有强迫症但还是感觉怪怪的啊。 

![1439360116745022.jpg](http://cc.cocimg.com/api/uploads/20150812/1439360116745022.jpg)

**type="number"**

- 优点是Android下实现的一个真正的数字键盘
- 缺点一：iOS下不是九宫格键盘，输入不方便
- 缺点二：旧版Android（包括微信所用的X5内核）在输入框后面会有超级鸡肋的小尾巴，好在Android 4.4.4以后给去掉了。

![type_number.jpg](http://cc.cocimg.com/api/uploads/20150812/1439360548142199.jpg)

![numberarrow.jpg](http://cc.cocimg.com/api/uploads/20150812/1439360557598328.jpg)

不过对于缺点二，我们可以用webkit私有的伪元素给fix掉：

```
input[type=number]::-webkit-inner-spin-button, ``  ``input[type=number]::-webkit-outer-spin-button { ``    ``-webkit-appearance: none; ``    ``appearance: none; ``    ``margin: 0; ``  ``}
```

**pattern属性**

pattern用于验证表单输入的内容，通常HTML5的type属性，比如email、tel、number、data类、url等，已经自带了简单的数据格式验证功能了，加上pattern后，前端部分的验证更加简单高效了。

显而易见，pattern的属性值要用正则表达式。

**实例**

简单的数字验证

数字的验证有两个：

```
<input type=``"number"` `pattern=``"\d"``> ``<input type=``"number"` `pattern=``"[0-9]*"``></input type=``"number"` `pattern=``"[0-9]*"``></input type=``"number"` `pattern=``"\d"``>
```

 

![type_number-1.jpg](http://cc.cocimg.com/api/uploads/20150812/1439360624623590.jpg)

对表单验证来说，这两个正则的作用是一样的，表现的话差异就很大：

- iOS中，只有[0-9]\*才可以调起九宫格数字键盘，\d 无效
- Android 4.4以下(包括X5内核)，两者都调起数字键盘；
- Android 4.4.4以上，只认 type 属性，也就是说，如果上面的代码将 type="number" 改为 type="text" ，将调起全键盘而不会是九宫格数字键盘。

**常用的正则表达式**

pattern的用法都一样，这里不再啰嗦各种详细写法了，只是列出来一些常用的正则就好了：

- 信用卡  [0-9]{13,16}
- 银联卡  ^62[0-5]\d{13,16}$
- Visa: ^4[0-9]{12}(?:[0-9]{3})?$
- 万事达：^5[1-5][0-9]{14}$
- QQ号码： [1-9][0-9]{4,14}
- 手机号码：^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$
- 身份证：^([0-9]){7,18}(x|X)?$
- 密码：^[a-zA-Z]\w{5,17}$ 字母开头，长度在6~18之间，只能包含字母、数字和下划线
- 强密码：^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$ 包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间
- 7个汉字或14个字符：^[\u4e00-\u9fa5]{1,7}$|^[\dA-Za-z_]{1,14}$





## img content

img可以通过css设置src

即content:xxx

不过兼容性不好，只有chrome下有用