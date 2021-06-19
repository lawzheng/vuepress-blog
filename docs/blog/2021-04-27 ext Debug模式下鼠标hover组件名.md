# ext Debug模式下鼠标hover组件名

## 背景

在控制器项目中，有些组件封装了很多层，找起来十分费劲。

像vue的话有devtools，可以方便的看到组件和dom的对应关系。

写个devtools有点难，于是诞生了鼠标hover时显示当前组件名的想法，下面来说下怎么做。



## 实现

### 思路

目前控制器的项目代码结构有page（放页面的地方），business（放业务组件的地方）。

一般两文件夹里的子文件夹都是按页面分好类的，这就给了我们操作空间。

在当前页面加载后，去对应的业务组件文件夹中，根据组件原型比较找到其组件名，在其dom上添加title，使鼠标hover时能显示对应的组件名。



### 记录页面名

作为一个单页面应用，之前并没有记录当前页面名，于是在`WLAN/js/pages/TabCompositePage.js`的`_handleTabChange`方法中，在切换页面时记录当前页面名。

```
SF.moduleName = moduleName;
```



### 寻找组件名

观察发现，每个组件都继承自`Ext.Container`，于是通过`Ext.override`重写Container的afterRender方法，在渲染好dom后执行寻找组件名操作。

当然，前提是开了debug模式 `SF.debugMode`

通过page和business关系，找到当前页面的组件所在文件夹，在通过window一层一层找到该组件列表（business的组件都挂在了全局变量上）

然后通过原型比较找到当前组件的组件名，给其dom的title加上该组件名，即实现了需求。



## 缺点

1. 当组件没按规范写在对应文件夹时，存在找不到的情况。
2. 没有抽离成组件的，直接在页面new出来的，暂时无法识别到。

