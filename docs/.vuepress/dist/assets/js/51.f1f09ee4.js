(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{407:function(t,e,i){"use strict";i.r(e);var n=i(44),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"git"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" git")]),t._v(" "),i("h4",{attrs:{id:"上传更新"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#上传更新"}},[t._v("#")]),t._v(" 上传更新")]),t._v(" "),i("p",[t._v("git add .")]),t._v(" "),i("p",[t._v('git commit -a -m "lz"')]),t._v(" "),i("p",[t._v("git push origin master")]),t._v(" "),i("h4",{attrs:{id:"第一次上传"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#第一次上传"}},[t._v("#")]),t._v(" 第一次上传")]),t._v(" "),i("p",[t._v('git init\ngit add .\ngit commit -m "first commit"\ngit remote add origin https://github.com/shench5612390/Test.git\ngit push -u origin master')]),t._v(" "),i("p",[t._v('第一次流程： git clone http://....git\ngit branch dev // 创建分支\ngit checkout dev // 切换分支\n发布release版本：\ngit tag -a v8.0 -m "这是8.0版本"\ngit push origin v8.0\n后续开发提交代码流程：\n1.git checkout dev 切换到开发分支\n2.git stash 暂存本地开发分支dev\n3.git checkout master // 切换master分支\n4.git pull origin master // 获取服务器最新远程分支代码\n5.git checkout dev 切换到开发分支\n6.git merge master --no-commit // 把最新远程分支合并到当前开发dev分支\n7.git stash pop //把本地缓存的dev开发代码释放，可能跟最新的master分支代码有冲突\n8.解决所有的冲突\n9.git add .\n10.git commit -m ‘解决bug’。//把最新修改代码提交到本地dev\n11.git push origin dev // 把代码提交到远程dev\n12.登录http://120.76.27.54:10080/user/login?redirect_to=\n新建请求合并代码到master分支（基准分支选master 对比分支选dev）\n13.等待管理员同意合并请求，代码没有冲突时会本地开发的dev正式同步到master分支')]),t._v(" "),i("p",[t._v("// 看不同\ngit diff master develop --name-status\ngit diff master develop --name-only\nA(添加) M(修改) D(删除)")]),t._v(" "),i("p",[t._v("// 回退\ngit log 找到commit 后面对应的ID\ngit reset HEAD b13aa107160db6f50c196b955e43f01f68a089af\n此时修改好代码 commit 后查看git log 发现需要merge 在一起\ncommit后用 git push origin master --force 来强行覆盖远程记录。（如果是develop分支将master 修改为develop即可）")])])}),[],!1,null,null,null);e.default=a.exports}}]);