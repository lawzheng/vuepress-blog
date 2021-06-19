# 图片预览组件

## 介绍

项目里有预览图片的需求，但是以前的不支持放大缩小，百度找到一款

**v-viewer**

附上GitHub链接

https://github.com/fengyuanchen/viewerjs



## 使用

安装

```
npm install viewerjs
```



全局注册

```
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 99
  }
})
```



在需要的预览的图片外包一层viewer组件，点击图片时即可触发预览（不用自己写点击事件）

```
<viewer :images="images">
	<img v-for="(src, index) in images" :src="src">
</viewer>
```



## 封装成全局组件

像前面说的那样使用，及其不方便，于是动了封装的念头，下面贴上源码

```
<!-- 图片预览组件 -->
<!-- Create by luozheng on 2020/04/03 -->
<style lang="less" scoped>
</style>

<template>
  <div style="display: none">
    <viewer
      :options="options"
      :images="imagePreview.list"
      @inited="init"
      ref="viewer"
    >
      <img v-for="(src, index) in imagePreview.list" :src="src" :key="src + index">
    </viewer>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'LyImagePreview',
    data () {
      return {
        options: {
          toolbar: false,
          initialViewIndex: 0,
          title: false,
          navbar: false
        },
        $viewer: {}
      }
    },
    props: {
    },
    computed: {
      time () {
        return this.imagePreview.time
      },
      ...mapState(['imagePreview'])
    },
    watch: {
      time () {
        this.show()
      }
    },
    mounted () {
    },
    methods: {
      init (viewer) {
        this.$viewer = viewer
      },
      show () {
        this.$viewer.index = this.imagePreview.index
        this.$viewer.show()
      }
    }
  }
</script>
```



1. 先在app.vue中注册成为全局组件

2. 在main.js中添加全局方法

   ```
   Vue.prototype.showImagePreview = opt => {                       // 调用图片预览
     store.commit('setImagePreview', {
       time: +new Date(),
       list: opt.list,
       index: opt.index
     })
   }
   ```

   在vuex中添加数据

   ```
   state
   imagePreview: {
     list: [],
     index: 0,
     time: 0
   },
   
   mutations
   setImagePreview: (state, val) => {
     state.imagePreview.list = val.list
     state.imagePreview.index = val.index
     state.imagePreview.time = val.time
   },
   ```

3. 预览组件通过监听time值变化来显示

   这里用时间戳来控制也是逼不得已的事，找了半小时没找到对应的隐藏事件，翻了下源码也没看到，所以出此下策

   使用方法

   ```
   this.showImagePreview({
     list: imageList,
     index: index
   })
   
   list为图片数组['src', 'src']
   index为点击图片在数组中的索引
   
   ```

   

## 后记

这里要专门说下索引这个事

直接通过this.$viewer.index = this.imagePreview.index即可达到效果

看文档的options有个initialViewIndex属性，但动态改变会有问题

通过computed计算出属性的话要点两下才能触发预览（不知道为啥）

直接修改data中的options的话，预览都出不来了

后来通过打印this.$viewer，发现有个index属性，试了下没想到成功了

ok，就这么多，希望对大家有帮助