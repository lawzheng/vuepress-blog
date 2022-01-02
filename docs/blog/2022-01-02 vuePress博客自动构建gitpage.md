# vuePress博客自动构建gitpage



参考这篇文章

https://cloud.tencent.com/developer/article/1777585



##  主要流程

创建github的token

在项目里添加上



写yml

github写yml

```yml
name: CI

#on: [push]

# 在master分支发生push事件时触发。
on: 
  push:
    branches:
      - master

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2 # If you're using actions/checkout@v2 - must set persist-credentials to false in most cases for the deployment to work correctly.
        with:
          persist-credentials: false

      - name: Install and Build
        run: |
          yarn install
          yarn run build
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          GITHUB_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          BRANCH: gh-pages # The branch the action should deploy to.
          FOLDER: docs/.vuepress/dist # The folder the action should deploy.
          BUILD_SCRIPT: npm install && npm run build && cd docs/.vuepress/dist && cd -
```



## 原理

监听代码分支的提交

触发github action去打包

将打包结果推到专门的分支

使用该分支做github page