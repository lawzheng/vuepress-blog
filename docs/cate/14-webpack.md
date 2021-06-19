### 初始化

npm i webpack webpack-cli --save-dev



### 各种loader

npm i @babel/core @babel/preset-env babel-loader -D



npm i react react-dom @babel/preset-react -D



npm i style-loader css-loader -D



 npm i less less-loader -D



npm i file-loader -D



npm i url-loader -D



### 热更新

1.package.json  

加个--watch

缺点 必须自己刷新



2.webpack-dev-server







### 文件指纹

npm i mini-css-extract-plugin -D



webpack中的hash、chunkhash、contenthash区别

hash 整个项目公用一个hash值

chunkhash 根据入口来 相同入口公用一个

contenthash  保证即使css文件所处的模块里就算其他文件内容改变，只要css文件内容不变，那么不会重复构建。



### 压缩

#### css

npm i optimize-css-assets-webpack-plugin -D --registry=https://registry.npm.taobao.org

npm i cssnano -D

#### html

npm i html-webpack-plugin -D

```
new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/search.html'),
            filename: 'search.html',
            chunks: ['search'],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        })
```



### 清除代码

npm i clean-webpack-plugin -D

const {CleanWebpackPlugin} = require('clean-webpack-plugin')

new CleanWebpackPlugin()



### css自动补前缀

npm i postcss-loader autoprefixer -D --registry=https://registry.npm.taobao.org

在less loader里加上



### px转rem

 npm i  px2rem-loader -D

npm i lib-flexible -S



### 内联

npm i raw-loader@0.5.1 -D



```
<!DOCTYPE html>
<html lang="en">
<head>
    ${ require('raw-loader!./meta.html')}
    <title>Document</title>
    <script>${require('raw-loader!babel-loader!../node_modules/lib-flexible/flexible.js')}</script>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```



### tree shaking

生产环境默认开启  去掉没用到的



### 多页面打包

npm i glob -D



### source-map

eval		用eval包裹住代码 后面跟source 

source-map	生成单独的文件

inline-source-map	 生成单独的map代码在js文件中



### scope hosting

开启后公用的模块成单独的函数，单独功能的直接内联进去

webpack4默认开启了



### 代码切割

npm i html-webpack-externals-plugin -D



const HtmlWebpackExternalsPlugin **=** require('html-webpack-externals-plugin')



### eslint

npm i eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-ally -D

npm i eslint-loader -D

npm i eslint-config-airbnb -D



### 打包组件或基础库

npm login

npm publish



nrm ls

nrm use **



加上prepublish 发布时自动执行命令打包



js压缩

mode设为none   production模式自动会压缩

用TerserPlugin压缩

const TerserPlugin = require('terser-webpack-plugin')

```
optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
            })
        ]
    }
```

```
entry: {
        'large-number': './src/index.js',
        'large-number.min': './src/index.js',	// 多页面打包
    },
    output: {
        filename: '[name].js',
        library: 'largeNumber',
        libraryTarget: 'umd',		// 使得各种引入语法都能用
        libraryExport: 'default'		// 使得不需要largeNumber.default才能调用
    },
```



#### 最大数和

```
export default function add(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;

    let carry = 0;
    let ret = '';
    while (i >= 0 || j >= 0) {
        let x = 0;
        let y = 0;
        let sum;

        if (i >= 0) {
            x = a[i] - '0';
            i--;
        }

        if (j >= 0) {
            y = b[j] - '0';
            j--;
        }

        sum = x + y + carry;

        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }

        ret = sum + ret;
    }

    if (carry) {
        ret = carry + ret;
    }

    return ret;
}
```



### ssr

新建个webpack配置

去src下文件夹找服务端渲染的文件

启个node服务 将打包好的渲染文件载入，用个html模板占位符替换dom和数据



### 优化不需要日志

stats

stats: 'errors-only'	只报错

生产环境跟着写就是，开发环境要写到dev-server里去



更友好的方式

 npm i friendly-errors-webpack-plugin -D

就是vue用的



#### 错误捕获

echo $?



### 构建通用配置

npm i webpack-merge -D

npm i eslint eslint-config-airbnb-base babel-eslint -D

"eslint": "eslint ./lib --fix"



### 冒烟测试

npm i rimraf -D  移除dir



npm i mocha -D

npm i glob-all -D



#### 单元测试

npm i assert -D	断言

npm i istanbul -D  测试覆盖率



### 持续集成

travis ci

