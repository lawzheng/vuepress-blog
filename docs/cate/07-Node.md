#### express

```
npm i express-generator -g

express 文件夹名

切进去 npm i
```

#### nvm

下载 开代理

https://github.com/coreybutler/nvm-windows/releases

使用

https://www.jianshu.com/p/d0e0935b150a

速度慢

https://www.jianshu.com/p/0e4f2bfadf3e



#### npm

npm login

npm publish

### http/https 协议

- 1.0 协议缺陷:
  - 无法复用链接，完成即断开，**重新慢启动和 TCP 3次握手**
  - head of line blocking: **线头阻塞**，导致请求之间互相影响
- 1.1 改进:
  - **长连接**(默认 keep-alive)，复用
  - host 字段指定对应的虚拟站点
  - 新增功能:
    - 断点续传
    - 身份认证
    - 状态管理
    - cache 缓存
      - Cache-Control
      - Expires
      - Last-Modified
      - Etag
- 2.0:
  - 多路复用
  - 二进制分帧层: 应用层和传输层之间
  - 首部压缩
  - 服务端推送
- https: 较为安全的网络传输协议
  - 证书(公钥)
  - SSL 加密
  - 端口 443
- TCP:
  - 三次握手
  - 四次挥手
  - 滑动窗口: 流量控制
  - 拥塞处理
    - 慢开始
    - 拥塞避免
    - 快速重传
    - 快速恢复
- 缓存策略: 可分为 **强缓存** 和 **协商缓存**
  - Cache-Control/Expires: 浏览器判断缓存是否过期，未过期时，直接使用强缓存，**Cache-Control的 max-age 优先级高于 Expires**
  - 当缓存已经过期时，使用协商缓存
    - 唯一标识方案: Etag(response 携带) & If-None-Match(request携带，上一次返回的 Etag): 服务器判断资源是否被修改，
    - 最后一次修改时间: Last-Modified(response) & If-Modified-Since (request，上一次返回的Last-Modified)
      - 如果一致，则直接返回 304 通知浏览器使用缓存
      - 如不一致，则服务端返回新的资源
  - Last-Modified 缺点：
    - 周期性修改，但内容未变时，会导致缓存失效
    - 最小粒度只到 s， s 以内的改动无法检测到
  - Etag 的优先级高于 Last-Modified



### 常见状态码

- 1xx: 接受，继续处理
- 200: 成功，并返回数据
- 201: 已创建
- 202: 已接受
- 203: 成为，但未授权
- 204: 成功，无内容
- 205: 成功，重置内容
- 206: 成功，部分内容
- 301: 永久移动，重定向
- 302: 临时移动，可使用原有URI
- 304: 资源未修改，可使用缓存
- 305: 需代理访问
- 400: 请求语法错误
- 401: 要求身份认证
- 403: 拒绝请求
- 404: 资源不存在
- 500: 服务器错误



### get / post

- get: 缓存、请求长度受限、会被历史保存记录
  - 无副作用(不修改资源)，幂等(请求次数与资源无关)的场景
- post: 安全、大数据、更多编码类型

两者详细对比如下图:



![img](https://user-gold-cdn.xitu.io/2019/2/14/168e9d9050b9d08a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



### Websocket

Websocket 是一个 **持久化的协议**， 基于 http ， 服务端可以 **主动 push**

- 兼容：
  - FLASH Socket
  - 长轮询： 定时发送 ajax
  - long poll： 发送 --> 有消息时再 response
- `new WebSocket(url)`
- `ws.onerror = fn`
- `ws.onclose = fn`
- `ws.onopen = fn`
- `ws.onmessage = fn`
- `ws.send()`

### TCP三次握手

建立连接前，客户端和服务端需要通过握手来确认对方:

- 客户端发送 syn(同步序列编号) 请求，进入 syn_send 状态，等待确认
- 服务端接收并确认 syn 包后发送 syn+ack 包，进入 syn_recv 状态
- 客户端接收 syn+ack 包后，发送 ack 包，双方进入 established 状态

### TCP四次挥手

- 客户端 -- FIN --> 服务端， FIN—WAIT
- 服务端 -- ACK --> 客户端， CLOSE-WAIT
- 服务端 -- ACK,FIN --> 客户端， LAST-ACK
- 客户端 -- ACK --> 服务端，CLOSED

###  Node 的 Event Loop: 6个阶段

- timer 阶段: 执行到期的`setTimeout / setInterval`队列回调

- I/O 阶段: 执行上轮循环残流的`callback`

- idle, prepare

- poll: 等待回调

  - 1. 执行回调

  - 1. 执行定时器

    - 如有到期的`setTimeout / setInterval`， 则返回 timer 阶段
    - 如有`setImmediate`，则前往 check 阶段

- check

  - 执行`setImmediate`

- close callbacks



### 跨域

- JSONP: 利用``标签不受跨域限制的特点，缺点是只能支持 get 请求

```
function jsonp(url, jsonpCallback, success) {
  const script = document.createElement('script')
  script.src = url
  script.async = true
  script.type = 'text/javascript'
  window[jsonpCallback] = function(data) {
    success && success(data)
  }
  document.body.appendChild(script)
}
复制代码
```

- 设置 CORS: Access-Control-Allow-Origin：*
- postMessage



### 安全

- XSS攻击: 注入恶意代码
  - cookie 设置 httpOnly
  - 转义页面上的输入内容和输出内容
- CSRF: 跨站请求伪造，防护:
  - get 不修改数据
  - 不被第三方网站访问到用户的 cookie
  - 设置白名单，不被第三方网站请求
  - 请求校验



### Common.js 导出and接收

#### 单个情况

```
function add(a, b) {
    return a + b
}

module.exports = add

const add = require(./a)
```

#### 多个情况

```
function add(a, b) {
    return a + b
}
function mul(a, b) {
    return a * b
}

module.exports = {
    mul,
    add
}

const {add, mul} = require('./a')
```



### lodash

```
npm i lodash

const _ = require('lodash')
```



### 输入url

#### dns解析

https端口443 http80



#### 建立tcp连接

三次握手

客户端询问服务器是否可以用

告诉可用

发送请求



#### 发送http请求

发送请求头



#### server接到http请求，处理，返回

返回响应头



#### 接收到返回的数据 处理数据（渲染页面，执行js）



### node最简

```
const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'})
    res.end('<h1>hello world</h1>')
})

server.listen(3000, () => {
    console.log('listening on 3000 port')
})
```



### 处理get请求

```
const http = require('http')
const querystring = require('querystring') // querystring小写

const server = http.createServer((req, res) => {
    console.log(req.method)
    const url = req.url
    console.log(url)
    //    /api/blog/list?id=1&e=2
    req.query = querystring.parse(url.split('?')[1])
    res.end(JSON.stringify(req.query))
    //   {"id":"1","e":"2"}
})

server.listen(3000, () => {
    console.log('listening on 3000 port')
})
```



### 处理post

```
const http = require('http')
const server = http.createServer((req, res) => {
    if (req.method = 'POST') {
        console.log('content-type', req.headers['content-type'])
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            console.log('postData', postData)
            res.end('hello world')
        })
    }
})
server.listen(3000, () => {
    console.log('3000')
})
```



#### postman

crx改为zip

安装

chrome://apps 打开 



### 完整实例

```
const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])

    res.setHeader('content-type', 'application/json')
    const resData = {
        method,
        url,
        path,
        query
    }

    if (method === 'GET') {
        res.end(JSON.stringify(resData))
    }
    if (method === 'POST') {
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            resData.postData = postData
            res.end(JSON.stringify(resData))
        })
    }
})
server.listen(3000, () => {
    console.log('ok')
})
```



### 博客接口

![1565437967548](C:\Users\602285510\AppData\Roaming\Typora\typora-user-images\1565437967548.png)



### vscode

#### 选中所有一样的 

ctrl shift L

#### 选择单个一样的

ctrl d

#### 格式化

alt shift f

#### 控制台

CTRL `



### nodemon

```
npm install -g nodemon
```

全局安装 不然报错



### cross-env

用这个加环境标志

```
"dev": "cross-env NODE_ENV=dev nodemon ./bin/www.js",
"prd": "cross-env NODE_ENV=production nodemon ./bin/www.js"
```





### 路由 api区别

#### api

前端后端、不同端之间对接的一个术语

#### 路由

api的一部分

后端系统内部的一个模块



### mysql

下载

https://dev.mysql.com/downloads/mysql/

root

root



#### workbench

点击圆柱体建库 

工具内建表



#### 显示数据库

```
show databases;
```



#### sql语句

```
use myblog; --切到这个库
-- show tables; -- 显示所有表

--增
-- insert into users (username,`password`,realname) values ('lisi', '123', '李四');

--查  <>不等
-- select * from users where state <> '0';
-- select id,username from users;

-- select * from users where username = 'zhangsan' and `password` = '123';

-- select * from users where username like '%li%';

-- desc倒序 ，不加就正序  id从小到大
-- select * from users where password like '%1%' order by id desc;

-- 改  多个用逗号分开 被安全模式限制
-- update users set username = 'lzz', realname = '罗政' where id = 2;

-- 取消安全限制
-- SET SQL_SAFE_UPDATES = 0

-- 删
-- delete from users where username = 'lisi';

-- 一般只是软删除 将状态改变
-- update users set state = '0' where id = '1';		-- 软删除

-- select * from users where state <> '0';


-- insert into blogs (title, content, createtime, author) values ('标题b', '内容a', 1565495745124, 'lz');

-- select * from blogs;

-- 查版本号
-- select version();

-- verchart(10) 不区分英文汉字了 mysql >= 5

```

524ab85686df0e52ada43b11b53cce35

### node连接mysql

#### 安装

```
npm i mysql

const mysql = require('mysql')

// 创建链接对象
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'myblog'
})

// 连接
con.connect()

const sql = 'select * from users;'
con.query(sql, (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
})

con.end() 

```



### 命令行连接mysql

```
mysql -u用户名 -p

回车之后输入正确的密码即可进入mysql
```



### nodejs连mysql报错1251

```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
```

这行代码有两层含义，第一:修改root的密码为'root'，摒弃原来的旧密码。第二：使用mysql_native_password对新密码进行编码。



### cookie

存储在浏览器的一段字符串（最大5kb）

跨域不共享

每次发http请求都会带上cookie

server可以修改并返回给浏览器 可以限制浏览器更改

document.cookie = 'k1=100;'   累加



### redis

#### 安装

```
https://www.runoob.com/redis/redis-install.html
```

```
redis-cli		// 进入

set key value

get key

del key

keys *   // 看全部

```



#### node中使用

```
npm i redis
```

```
const redis = require('redis')
const {REDIS_CONF} = require('../../conf/db')

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
redisClient.on('error', error => {
    console.error(error)
})

redisClient.set('myname', 'lzz', redis.print)
redisClient.get('myname', (err, val) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('val', val)

    // 退出
    redisClient.quit()
})
```



### nginx

#### 下载

```
http://nginx.org/en/download.html
```

点击exe启动  在localhost就能看到 没有端口号

#### 改配置 nginx.conf

```
worker_processes: 2;
listen       8080;
```

#### 改代理

```
location / {
            proxy_pass: http://localhost:8001;
        }
location /api/ {
            proxy_pass: http://localhost:8000;
            proxy_set_header Host $host;
}
```



### node操作文件

```
const fs = require('fs')
const path = require('path')

const fileName = path.resolve(__dirname, 'data.txt')

fs.readFile(fileName, (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    // data是二进制
    console.log(data.toString())
})

// 写入
const content = 'haha\n'
const opt = {
    flag: 'a'       // 追加写入 覆盖 是 w
}
fs.writeFile(fileName, content, opt, (err) => {
    if (err) {
        console.error(err)
    }
})

// 判断存在
fs.exists(fileName, (exist) => {
    console.log(exist)
})
```



### stream

```
// 标准输入输出
process.stdin.pipe(process.stdout)

const http = require('http')
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.pipe(res)
    }
})
server.listen(7000, () => {
    console.log(7000)
})
```

```
// 复制文件
const fs = require('fs')
const path = require('path')

const fileName1 = path.resolve(__dirname, 'data.txt')
const fileName2 = path.resolve(__dirname, 'data-bak.txt')

const readStream = fs.createReadStream(fileName1)
const writeStream = fs.createWriteStream(fileName2)

readStream.pipe(writeStream)
readStream.on('data', (chunk) => {
    console.log('oooooooooo')
})
readStream.on('end', () => {
    console.log('copy done')
})
```



```
// 访问网络
const http = require('http')
const fs = require('fs')
const path = require('path')

const fileName1 = path.resolve(__dirname, 'data.txt')

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        const readStream = fs.createReadStream(fileName1)
        readStream.pipe(res)
    }
})
server.listen(7000, () => {
    console.log(7000)
})
```



### readline

```
const fs = require('fs')
const path = require('path')
const readline = require('readline')

const fileName = path.join(__dirname, '../', '../', 'logs', 'access.log')

// 创建 readStream
const readStream = fs.createReadStream(fileName)

// 创建readline对象
const rl = readline.createInterface({
    input: readStream
})

let chromeNum = 0
let num = 0

// 逐行读取
rl.on('line', (lineData) => {
    if (!lineData) {
        return
    }

    num++

    const arr = lineData.split(' -- ')
    if (arr[2] && arr[2].indexOf('Chrome') > 0) {
        chromeNum++
    }
})

rl.on('close', () => {
    console.log('chrome占比', chromeNum / num * 100 + '%')
})
```



### sql注入

lzz' -- ' 密码乱输就能登陆上

#### 防止办法

escape

```
module.exports = {
    exec,
    excape: mysql.escape
}

在写sql的地方
username = excape(username)
password = excape(password)

将符号转义  /'
```



### 预防xss

```
npm i xss

const xss = require('xss')

xss(title)
就完事了
同样是转义解决
```



### md5加密

```
const crypto = require('crypto')

// 密钥
const SECRET_KEY = 'lz'

// md5加密
function md5(content) {
    let md5 = crypto.createHash('md5')
    return md5.update(content).digest('hex')
}

// 加密函数
function genPassword(password) {
    const str = `password=${password}&key=${SECRET_KEY}`
    return md5(str)
}

module.exports = {
    genPassword
}
```



### express

```
npm i express-session
```

```
npm i redis connect-redis
```

```
npm i morgan
```



### koa2

npm i koa-generator -g

koa2 文件名

npm i

```
npm i koa-generic-session koa-redis redis --registry=https://registry.npm.taobao.org
```





### pm2

npm i pm2 -g

命令

pm2 --version

pm2 start 1.js

pm2 stop 1.js

pm2 list

pm2 restart name/id

pm2 delete name/id

pm2 info name/id

pm2 log name/id

pm2 monit





## 深入nodejs

### 石头剪刀布

```
var playAction = process.argv[process.argv.length - 1]
console.log(playAction)

var random = Math.random() * 3

var computerAction = ''
if (random < 1) {
    computerAction = 'rock'
} else if (random > 2) {
    computerAction = 'scissor'
} else {
    computerAction = 'paper'
}

if (computerAction === playAction) {
    console.log('平局')
} else if (
    (computerAction === 'rock' && playAction === 'paper') ||
    (computerAction === 'scissor' && playAction === 'rock') ||
    (computerAction === 'paper' && playAction === 'scissor')
) {
    console.log('你赢了')
} else {
    console.log('你输了')
}
```



### event

```
const EventEmitter = require('events').EventEmitter

class GeekTime extends EventEmitter {
    constructor () {
        super()
        setInterval(() => {
            this.emit('newLesson', { price: Math.random() * 100 })
        }, 3000)
    }
}

const geekTime = new GeekTime

geekTime.addListener('newLesson', (e) => {
    console.log(e)
})
```



### 非阻塞io

```
const glob = require('glob')

// 阻塞
var result= null
// console.time('blog')
// result = glob.sync(__dirname + '/**/*')
// console.timeEnd('blog')
// console.log(result)

、、 非阻塞
console.time('blog')
glob(__dirname + '/**/*', (err, res) => {
    result = res
    // console.log(result)
    console.log('got result')
})
console.timeEnd('blog')
console.log(1 + 1)
```



### 异步编程

通常回调函数第一个参数为错误信息



## egg.js

### 启动

```
yarn dev 默认关联config.default.js
yarn start 默认关联config.prod.js

prod默认没有 要自己键
start不用pm2守护 自带进程守护
```



### 配置插件

在config/plugins.js中配置

```
exports.mysql = {
  enable: true,
  package: 'egg-mysql'
}

exports.cors = {
  enable: true,
  package: 'egg-cors'
}

```



使用

```
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'root',
      // database
      database: 'react_blog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
  
  
  config.security = {
    csrf: { enable: false },
    domainWhiteList: ['*']
  };
  config.cors = {
    origin: '*', //只允许这个域进行访问接口
    credentials: true,   // 允许cookie跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
```



## 开课吧node

### 第三方插件

#### download-git-repo

下代码插件

```
npm i download-git-repo
```

```
const repo = 'github:su37josephxia/vue-template';
const desc = '../test';
const download = require('download-git-repo')
download(repo,desc,err=> {
  console.log(err ? 'error' : 'ok')
})
```



#### 看进度

```
npm i ora
const { promisify } = require('util')
util自带，有promise
```

```
module.exports.clone = async function clone(repo, desc) {
    const { promisify } = require('util')
    const download = promisify(require('download-git-repo'));
    const ora = require('ora');
    const process = ora(`正在下载....${repo}`);
    process.start();
    try {
        await download(repo,desc)
    } catch (error) {
        process.fail()
    }
    process.succeed()

    // download(repo, desc, err => {
    //     // console.log(err ? 'Error': 'OK')
    //     if (err) {
    //         process.fail();
    //     }
    //     else {
    //         process.succeed();
    //     }
    // });
}

```



