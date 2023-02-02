# vite下去link npm包的问题解决



## link问题

以前npm是直接`npm link`

pnpm需要加个参数`pnpm link --global`，链接到全局去



## vite去link问题

由于类库打出来的包是umd格式的，vite下会报错：

![preview](/images/v2-e6316bd48ca221740f4b99bff43159a2_r.jpg)



解决方案可参考

https://zhuanlan.zhihu.com/p/399998544



1. 在 `vite.config.ts` 配置 `optimizeDeps.include`

   include包名

   include后vite会去缓存成esm格式，但是link包的意义就是能热更新，现在缓存了导致不能热更新。这种方法行不通

2. 类库提供esm格式。类库使用的webpack5，配置如下

   加多一个入口

   ```js
   entry: {
       'graph-esm': {
         import: resolve(`${srcPath}/index`),
         library: {
           type: 'module'
         }
           
       },
   }
   ```

   需要允许module类型打包

   ```js
   experiments: {
     outputModule: true
   },
   ```

   
   
   package.json加module字段
   
   ```js
   "module": "dist/graph-esm.js"
   ```
   
   

