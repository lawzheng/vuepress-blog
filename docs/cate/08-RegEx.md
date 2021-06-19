#### 规则

横向模糊匹配 

/ab{1,3}c/g



纵向模糊匹配 

/a[123]b/ 



[1-6a-fG-M] 

要匹配-  要么换位置要么转义\-



[^1-6a-fG-M] 取反



#### 字符

| 字符组 | 具体含义                                                     |
| ------ | ------------------------------------------------------------ |
| \d     | 表 记示 忆方式：其 [0-9]。表 英示 文是 是一digit 位数字 （数字） 。 。 |
| \D     | 表示 [^0-9]。表示除数字外的任意字符。                        |
| \w     | 表 记示 忆方式： [0-9a-zA-Z_] w 是 word 。表的示数字、 简写，也大小写 称单词字字符 母和下 。 划线。 |
| \W     | 表示 [^0-9a-zA-Z_]。非单词字符。                             |
| \s     | 表示 [ \t\v\n\r\f]。表示空白符，包括空格、水平制表符、垂直制表符、换行符、回车符、换页 符。 记忆方式：s 是 space 的首字母，空白符的单词是 white space。 |
| \S     | 表示 [^ \t\v\n\r\f]。 非空白符。                             |
| .      | 表示 [^\n\r\u2028\u2029]。通配符，表示几乎任意字符。换行符、回车符、行分隔符和段分隔符 除外。 记忆方式：想想省略号 … 中的每个点，都可以理解成占位符，表示任何类似的东西。 |



#### 量词

| 量词 | 具体含义                                                     |
| ---- | ------------------------------------------------------------ |
| {m,} | 表示至少出现 m 次。                                          |
| {m}  | 等价于 {m,m}，表示出现 m 次。                                |
| ?    | 等价于 {0,1}，表示出现或者不出现。 记忆方式：问号的意思表示，有吗？ |
| +    | 等价于 {1,}，表示出现至少一次。 记忆方式：加号是追加的意思，得先有一个，然后才考虑追加。 |
| *    | 等价于 {0,}，表示出现任意次，有可能不出现。 记忆方式：看看天上的星星，可能一颗没有，可能零散有几颗，可能数也数不过来 |



#### 贪婪 惰性

{1，3} 会去找超过3没

{1，3}？ 惰性 有1就行了



#### 多选

/good|nice/  惰性的



#### 匹配颜色

```
/#([0-9a-fA-F]{3}|#[0-9a-fA-F]{6})/g
```



#### 写法

string.macth(reg)

reg.test(string)



#### 小时

```
/^([01][0-9]|[2][0-3]):[0-5][0-9]$/
```



#### 年月日

不精确

```
/^[0-9]{4}-([0][1-9]|[1][0-2])-([0][1-9]|[12][0-9]|[3][01])$/
```



#### 电脑路径

```
/^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/
```



#### 取id

```
/id="[^"]*"/
```



#### 换行匹配

```
'hello\nioe\ndfwef'.replace(/^|$/gm, '#')
```



#### 单词边界 

\b  具体就是 \w 与 \W 之间的位置 

\B 具体说来就是 \w 与 \w、 \W 与 \W、^ 与 \W，\W 与 $ 之间的位置 



#### (?=p) 和 (?!p) 

正向先行断言和负向先行断言 

p前面   取反



```
'hello'.replace(/(?<=l)/g, '#') 右边
(?!l) 取反
```



#### 不匹配任何东西的正则 

/.^/



#### 数字的千位分隔符表示法 

```
/\B(?=(\d{3})+\b)/
```



#### 货币格式化

```javascript
function format (num) {
    return num.toFixed(2).replace(/\B(?=(\d{3})+\b)/, ',').replace(/^/, '$$ ')
  }
```



#### 括号引用  改年月日格式

```
let reg = /(\d{4})-(\d{2})-(\d{2})/
let string = '2017-05-12'
console.log(string.replace(reg, '$2/$3/$1'))  // 05/12/2017
```

$123表示括号的分组  从1开始



reg里写

```
/(\d{4})(-|\/|\.)(\d{2})\2(\d{2})/
```

\2 同 外面的$2



括号嵌套时以左括号计算



\10表示第10个括号



反向引用以最后的匹配结果为准



#### 非捕获括号 (?:p) 和 (?:p1|p2|p3) 



#### 模仿trim

```
trim (str) {
        // return str.replace(/^\s+|\s+$/g, '')
        return str.replace(/^\s*(.*?)\s*$/g, '$1')
      },
```



#### 首字母大写

```
titleize (str) {
        return str.toLowerCase().replace(/(?:^|\s)\w/g, function (c) {
          return c.toUpperCase()
        })
      },
```



#### 大驼峰

```
camelize (str) {
        return str.replace(/[-_\s]+(.)?/g, (match, c) => {
          return c ? c.toUpperCase() : ''
        })
      },
```

c代表第一个组，可以一直往下加组



#### 逆驼峰

```
dasherize (str) {
        return str.replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase()
      },
```



#### html 转义

```
escapeHtml (str) {
        const escapeChars = {
          '<': 'lt',
          '>': 'gt',
          '"': 'quot',
          '&': 'amp',
          '\'': '#39'
        }
        return str.replace(new RegExp('[' + Object.keys(escapeChars).join('') + ']', 'g'), (match) => {
          return '&' + escapeChars[match] + ';'
        })
      },
```



#### 反转义

```
function unescapeHTML (str) {
    var htmlEntities = {
        nbsp: ' ',
        lt: '<',
        gt: '>',
        quot: '"',
        amp: '&',
        apos: '\''
    };
    return str.replace(/\&([^;]+);/g, function (match, key) {
        if (key in htmlEntities) {
        	return htmlEntities[key];
        }
    	return match;
    });
}
console.log( unescapeHTML('&lt;div&gt;Blah blah blah&lt;/div&gt;') );
```



#### 匹配成对标签 

```
/<([^>]+)>[\d\D]*<\/\1>/
```

\1反向引用



#### replace

| 属性        | 描述                            |
| ----------- | ------------------------------- |
| $1,$2,…,$99 | 匹配第 1-99 个 分组里捕获的文本 |
| $&          | 匹配到的子串文本                |
| $`          | 匹配到的子串的左边文本          |
| $'          | 匹配到的子串的右边文本          |
| $$          | 美元符号                        |



#### regex.source 

看写的究竟是什么



#### 判断数据类型

```
var utils = {};
"Boolean|Number|String|Function|Array|Date|RegExp|Object|Error".split("|").forEach(fun
ction (item) {
utils["is" + item] = function (obj) {
return {}.toString.call(obj) == "[object " + item + "]";
};
});
console.log( utils.isArray([1, 2, 3]) );
```

