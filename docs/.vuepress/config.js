const path = require("path")
const generateDir = require('./utils/generateDir.js');

const blogList = generateDir(path.resolve(__dirname, '../blog'), ' ', 'sidebar', 'unshift');
const bookList = generateDir(path.resolve(__dirname, '../book'), ' ', 'sidebar', 'unshift');

module.exports = {
  title: "Lawz's blog",
  description: '罗政的个人博客',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: './', // 这是部署到github相关的配置
  // dest: './',
  themeConfig: {
    nav:[
      {text: '博客', link: `/blog/${blogList[0]}`},
      {
        text: '知识分类',
        items: generateDir(path.resolve(__dirname, '../cate'), '-', 'nav', 'shift')
      },
      {text: '阅读', link: `/book/${bookList[0]}`},
      {text: 'Github', link: 'https://github.com/lawzheng'}      
    ],
    sidebarDepth: 2,
    sidebar: {
      '/cate/': 'auto',
      '/blog/': blogList,
      '/book/': bookList
    }
  }
};