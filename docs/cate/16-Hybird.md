## 混合开发

#### 字间距

字间距不能用padding来调，某些手机会出现字体被遮挡现象，得用line-height 1.5或其他不带单位这种



### h5页面在ios机上禁止长按复制

（注意，**增加之后需要对input的另外设置，不然输入框无法输入**）场景：H5出现一个按钮需要长按几秒展示动画的，如：skcs.net-tactic.com/wap/peace/index，这时就需要用到禁止苹果的

ios机默认存在长按复制选择，用以下代码取消：

```
*{

-webkit-touch-callout:none; /*系统默认菜单被禁用*/

-webkit-user-select:none; /*webkit浏览器*/

-khtml-user-select:none; /*早期浏览器*/

-moz-user-select:none;/*火狐*/

-ms-user-select:none; /*IE10*/

user-select:none;

}

 

但是以上代码也会禁止输入框的使用，可用以下代码解决：

input {

-webkit-user-select:auto; /*webkit浏览器*/

}

textarea {                                //如果存在textarea也输入不进文本的情况下，加上这个

-webkit-user-select:auto; /*webkit浏览器*/

}
```



### ios禁止点击阴影

```
* {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color:transparent;
}
```



#### 兼容苹果，键盘弹出错位

```
this.$refs.inputText.onblur = () => {
  console.log('失去焦点')
  window.scrollTo(0, 0)
}
```

#### 弹出键盘底部元素被顶起

```
data

docmHeight: document.documentElement.clientHeight, // 默认屏幕高度
showHeight: document.documentElement.clientHeight, // 实时屏幕高度
showBtn: true
```

```
mounted

window.onresize = () => {
  this.showHeight = document.body.clientHeight
}
```

```
watch: {
  showHeight (val) {
    this.showBtn = this.docmHeight <= this.showHeight
  }
},
```

#### ios键盘导致错位

```
document.body.addEventListener('focusout', () => { // 监听焦点和失焦事件
  document.body.scrollTop = 0
})
window.addEventListener('resize', function () {
  if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
    window.setTimeout(function () {
      document.activeElement.scrollIntoViewIfNeeded()
    }, 0)
  }
})
```

```
  this.$refs.post.scrollIntoView()
```



#### 禁止微信浏览器长按出菜单

```
._point-events-none {
  pointer-events:none;
}
```



#### ios不支持Date 

2019-8-7这种  换成/就可以

```
兼容ios的时间转换方法
return new Date(dateString.replace(/-/g, '/'))
```



#### 统一处理键盘弹起收回事件

```
/**
 * 统一处理兼容键盘弹起收回事件
 * 安卓输入框不滚到视线内
 * 苹果收起时页面不复原
 * 2019/12/10 lz
 */
processInput () {
  if (this.isIOS) {
    document.body.addEventListener('focusout', () => {
      const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0
      window.scrollTo(0, Math.max(scrollHeight - 1, 0))
    })
  }
  if (this.isAndroid) {
    window.addEventListener('resize', function () {
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        setTimeout(function () {
          document.activeElement.scrollIntoViewIfNeeded()
          document.activeElement.scrollIntoView()
        }, 100)
      }
    })
  }
},
```



### scrollTo

scrollTo在某些环境会报错

```
not a function
```

可以使用scrollTop、scrollLeft替代



### 微信分享

文档地址

https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html



隐藏，在路由router.beforeEach中修改

```
/**
 * 页面未加载完成时隐藏微信分享
 */
const hideWxShare = () => {
  if (_this.isWx) {
    let hrefString = location.href
    let data = {
      method: 'common_common_getSignPackage',
      url: hrefString
    }
    const Wx = window.jWeixin
    _this.$axios.post('baseApiEntry', data).then(res => {
      Wx.config({
        // debug: true,
        appId: res.appId,
        nonceStr: res.nonceStr,
        timestamp: res.timestamp,
        signature: res.signature,
        jsApiList: ['hideMenuItems']
      })
      Wx.ready(() => {
        Wx.hideMenuItems({
          menuList: [
            'menuItem:share:appMessage',
            'menuItem:share:timeline',
            'menuItem:share:qq',
            'menuItem:share:weiboApp',
            'menuItem:share:favorite',
            'menuItem:share:facebook',
            'menuItem:share:QZone'
          ]
        })
      })
    })
  }
}
```



显示

同上，方法名改为``showMenuItems``即可



### touch事件触发微信下拉

```
touchmove事件里阻止默认事件
e.preventDefault()
```



### 系统字体调大

#### 方案一：【h5解决】

需要在设置完字体大小之后，再去重新获取一下html的font-size，这样就可以实现当实际的值与我们设置的值不一样时，根据比例再设置一次。



```jsx
function htmlFontSize(){
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var width = w > h ? h : w;
    width = width > 720 ? 720 : width
    var fz = ~~(width*100000/36)/10000
    document.getElementsByTagName("html")[0].style.cssText = 'font-size: ' + fz +"px";
    var realfz = ~~(+window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.replace('px','')*10000)/10000
    if (fz !== realfz) {
        document.getElementsByTagName("html")[0].style.cssText = 'font-size: ' + fz * (fz / realfz) +"px";
    }
}
```

#### 方案二：【客户端解决】

iOS
 在iPhone系统设置中的“更大字体”里调整字号后，各个应用里中Webview里的文字大小似乎没有受到影响。但是对于诸如微信、UC浏览器等可以在APP里设置网页字体大小的应用，还是有限制调整字号的需求的。它们调整字体大小是通过给body设置-webkit-text-size-adjust属性实现的，因此只要限制这个属性不被修改即可：



```css
body {
    -webkit-text-size-adjust: none !important;
}
```

Android
 如果是在自己开发的APP中，可以在客户端的WebView组件中设置字体默认的缩放比例，以避免手机系统的字体修改对页面字体及布局造成影响。



```undefined
WebSettings settings = webView.getSettings();
settings.setTextZoom(100);
```



#### 单纯微信

```
if (typeof WeixinJSBridge === 'object' && typeof WeixinJSBridge.invoke === 'function') {
  handleFontSize()
} else {
  document.addEventListener('WeixinJSBridgeReady', handleFontSize, false)
}
function handleFontSize () {
  // 设置网页字体为默认大小
  WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize': 0 })
  // 重写设置网页字体大小的事件
  WeixinJSBridge.on('menu:setfont', function () {
    WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize': 0 })
  })
}
```

