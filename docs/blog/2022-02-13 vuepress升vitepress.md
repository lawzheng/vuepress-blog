# vuepress升vitepress

## vitepress的优势

- 基于vite而不是webpack，所有更快的启动时间，热重载等
- 使用vue3来减少js的有效负载

.vitepress/config.js





## 升级过程

> **以下使用的vitepress是v0.20.0的版本**

1. 安装vitepress

```
npm install vitepress
复制代码
```

原来在使用vuepress的时候肯定会有一个`docs`文件夹（如果没有的话就可以自己创建一个）。

2. 更改入口文件为index.md

**注意：vuepress的入口文件是docs/readme.md,而vitepress的入口文件是index.md,所以这个地方要改一下原来readme的名字** 如果index.md没有其他内容，可以添加一些简单内容

```
---
home: true
title: 主页
lang: en-US
heroText: BIFE文档库
tagline: 这是你的舞台，期待你的精彩
actionText: Get Started
actionLink: /新人须知/first-day
footer: MIT Licensed | Copyright © 2021-present CoolDream
---
复制代码
```

3. 配置vitepress信息

- 创建`.vitepress`文件夹
- 在`.vitepress`下创建配置文件`config.js`
- 在`config.js`中添加配置信息

```
export default {
    base: '', // 项目的基础路径
    title: '文档', // 文档的标题，会显示在
    description: '前端技术文档', // 文档描述
    lastUpdated: '上次更新时间', // string | boolean
}
复制代码
```

4. 如果想要添加顶部的右侧导航，可以在`themeConfig`中添加

```
module.exports = {
    themeConfig: {
        // 顶部右侧导航
        nav: [
            { text: 'Home', link: '/first-day' },
            {
                text: 'Components',
                link: '/test'
            },
        ],
    }
}
复制代码
```

**注意：nav中的导航链接需要跟链接的文件名字一致，区分大小写**

5. 添加左侧导航,也是在`themeConfig`中添加

**需要注意**

**vuepress的链接children中是具体的链接，而显示的导航名称是每一个.md文件中的title**

**而vitepress的children中是一个对象数组，text表示导航名称，link才是真正的链接**

**如果有多个路由的话，一定要把默认的路由写在最后**

```
module.exports = {
    themeConfig: {
        // 侧边栏
        sidebar: [
            '/CHANGLOG':[
                {
                    text: '更新日志'
                }
            ],
            '/': [
                {
                    text: '新人须知',
                    children: [
                        {
                          text: '入职第一天',
                          link: '/first-day'
                        },
                        {
                            text: '入职第一周',
                            link: '/first-week'
                        }
                     ]
                 }
             ]
        ],
        
    }
}
复制代码
```

6. 添加脚本到`package.json`中

```
"scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "notice": "sh scripts/notice.sh"
 },
复制代码
```

7. 卸载vuepress

```
npm uninstall vuepress
```





## 升级中遇到的问题

会报莫名其妙的空格问题，先不升级了