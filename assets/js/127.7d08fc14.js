(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{535:function(t,s,a){"use strict";a.r(s);var n=a(38),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" git")]),t._v(" "),s("h2",{attrs:{id:"上传更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传更新"}},[t._v("#")]),t._v(" 上传更新")]),t._v(" "),s("p",[t._v("git add .")]),t._v(" "),s("p",[t._v('git commit -a -m "lz"')]),t._v(" "),s("p",[t._v("git push origin master")]),t._v(" "),s("h2",{attrs:{id:"第一次上传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一次上传"}},[t._v("#")]),t._v(" 第一次上传")]),t._v(" "),s("div",{staticClass:"language-JS extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git init\ngit add "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\ngit commit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first commit"')]),t._v("\ngit remote add origin https"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("shench5612390"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git\ngit push "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("u origin master\n")])])]),s("h2",{attrs:{id:"删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[t._v("#")]),t._v(" 删除")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("先切换到别的分支")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" git checkout dev20180927\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" 删除本地分支： git branch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d dev20181018\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" 如果删除不了可以强制删除，git branch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v(" dev20181018\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("有必要的情况下，删除远程分支")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("慎用"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("：git push origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" dev20181018\n")])])]),s("h2",{attrs:{id:"复杂流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复杂流程"}},[t._v("#")]),t._v(" 复杂流程")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("第一次流程： git clone http"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git \ngit branch dev "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建分支 ")]),t._v("\ngit checkout dev "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 切换分支")]),t._v("\n发布release版本： \ngit tag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a v8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"这是8.0版本"')]),t._v("\ngit push origin v8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n\n 后续开发提交代码流程：\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git checkout dev 切换到开发分支 \n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git stash 暂存本地开发分支dev \n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git checkout master "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 切换master分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git pull origin master "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取服务器最新远程分支代码 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git checkout dev 切换到开发分支 \n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git merge master "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("no"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("commit "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把最新远程分支合并到当前开发dev分支 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git stash pop "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//把本地缓存的dev开发代码释放，可能跟最新的master分支代码有冲突 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.")]),t._v("解决所有的冲突 \n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git add "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git commit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m ‘解决bug’。"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//把最新修改代码提交到本地dev ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git push origin dev "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把代码提交到远程dev ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("登录http")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("120.76")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".27")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".54")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10080")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("login"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("redirect_to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n新建请求合并代码到master分支（基准分支选master 对比分支选dev） \n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13.")]),t._v("等待管理员同意合并请求，代码没有冲突时会本地开发的dev正式同步到master分支\n")])])]),s("h2",{attrs:{id:"看不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#看不同"}},[t._v("#")]),t._v(" 看不同")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git diff master develop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("status\ngit diff master develop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("only\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("添加"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("M")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("修改"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("删除"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"回退"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回退"}},[t._v("#")]),t._v(" 回退")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git log 找到commit 后面对应的"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),t._v("\ngit reset "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v(" b13aa107160db6f50c196b955e43f01f68a089af\n此时修改好代码 commit 后查看git log 发现需要merge 在一起\ncommit后用 git push origin master "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("force 来强行覆盖远程记录。（如果是develop分支将master 修改为develop即可）\n")])])]),s("h2",{attrs:{id:"stash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stash"}},[t._v("#")]),t._v(" stash")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("存当前\ngit stash\n\n查看列表\ngit stash list\n\n带名字存\ngit stash save "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xx"')]),t._v("\n\npop第一个\ngit stash pop\n\npop某一个\ngit stash apply stash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n清除单个\ngit stash drop stash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n清除所有stash\ngit stash clear\n")])])]),s("h2",{attrs:{id:"分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("拉远程分支\ngit checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("b localname origin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("remotename\n")])])]),s("h2",{attrs:{id:"修改commit信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改commit信息"}},[t._v("#")]),t._v(" 修改commit信息")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git commit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("amend\n")])])]),s("h2",{attrs:{id:"设置代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置代理"}},[t._v("#")]),t._v(" 设置代理")]),t._v(" "),s("p",[s("strong",[t._v("http/https代理")])]),t._v(" "),s("p",[t._v("git config --global http.proxy http://127.0.0.1:8080")]),t._v(" "),s("p",[t._v("git config --global https.proxy https://127.0.0.1:8080")]),t._v(" "),s("p",[t._v("然后再git clone等命令就会自动走代理了。")]),t._v(" "),s("p",[t._v("如果要取消代理：")]),t._v(" "),s("p",[t._v("git config --global --unset http.proxy")]),t._v(" "),s("p",[t._v("git config --global --unset https.proxy")]),t._v(" "),s("p",[t._v("查看配置信息：")]),t._v(" "),s("p",[t._v("git config -l --global")]),t._v(" "),s("h2",{attrs:{id:"生成patch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成patch"}},[t._v("#")]),t._v(" 生成patch")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".还未提交的修改\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" commit.patch\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".已提交的修改\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" 3da71ca35 8b5100cdcd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" commit.patch\n注）3da71ca35 在8b5100cdcd 前面\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(".已经add但是未commit的修改\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--cached")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" commit.patch\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(".检查patch是否可以应用\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" apply "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--check")]),t._v(" commit.patch\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(".打补丁\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" apply commit.patch\n")])])]),s("h2",{attrs:{id:"合并commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并commit"}},[t._v("#")]),t._v(" 合并commit")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("git log --oneline")])]),t._v(" "),s("li",[s("p",[t._v("git rebase -i commitId")]),t._v(" "),s("p",[t._v("1,2,3  1，2合并需要用3的id")])]),t._v(" "),s("li",[s("p",[t._v("键盘敲i键进入insert模式")]),t._v(" "),s("p",[t._v("要合并的改为s")])]),t._v(" "),s("li",[s("p",[t._v("按esc、:wq保存")])]),t._v(" "),s("li",[s("p",[t._v("不需要的commit信息#注释")])]),t._v(" "),s("li",[s("p",[t._v("esc:wq保存生效")])]),t._v(" "),s("li",[s("p",[t._v("查看合并commit信息 git log --oneline")])]),t._v(" "),s("li",[s("p",[t._v("git push -f")]),t._v(" "),s("p",[t._v("不强制推不上去，要注意自己的分支才能这么搞")])]),t._v(" "),s("li",[s("p",[t._v("如果手残误操作，只要没走最后一步，可执行git rebase --abort放弃本次合并操作")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);