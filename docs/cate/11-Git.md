# git

## 上传更新

git add .

git commit -a -m "lz"

git push origin master



## 第一次上传

```JS
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/shench5612390/Test.git
git push -u origin master
```



## 删除

```js
1 先切换到别的分支: git checkout dev20180927

2 删除本地分支： git branch -d dev20181018

3 如果删除不了可以强制删除，git branch -D dev20181018

4 有必要的情况下，删除远程分支(慎用)：git push origin --delete dev20181018
```







## 复杂流程

```js
第一次流程： git clone http://....git 
git branch dev // 创建分支 
git checkout dev // 切换分支
发布release版本： 
git tag -a v8.0 -m "这是8.0版本"
git push origin v8.0


 后续开发提交代码流程：
 1.git checkout dev 切换到开发分支 
2.git stash 暂存本地开发分支dev 
3.git checkout master // 切换master分支
4.git pull origin master // 获取服务器最新远程分支代码 
5.git checkout dev 切换到开发分支 
6.git merge master --no-commit // 把最新远程分支合并到当前开发dev分支 
7.git stash pop //把本地缓存的dev开发代码释放，可能跟最新的master分支代码有冲突 
8.解决所有的冲突 
9.git add . 
10.git commit -m ‘解决bug’。//把最新修改代码提交到本地dev 
11.git push origin dev // 把代码提交到远程dev 
12.登录http://120.76.27.54:10080/user/login?redirect_to= 
新建请求合并代码到master分支（基准分支选master 对比分支选dev） 
13.等待管理员同意合并请求，代码没有冲突时会本地开发的dev正式同步到master分支
```



## 看不同
```js
git diff master develop --name-status
git diff master develop --name-only
A(添加) M(修改) D(删除)
```



## 回退

```js
git log 找到commit 后面对应的ID
git reset HEAD b13aa107160db6f50c196b955e43f01f68a089af
此时修改好代码 commit 后查看git log 发现需要merge 在一起
commit后用 git push origin master --force 来强行覆盖远程记录。（如果是develop分支将master 修改为develop即可）
```



## stash

```js
存当前
git stash

查看列表
git stash list

带名字存
git stash save "xx"

pop第一个
git stash pop

pop某一个
git stash apply stash{0}

清除单个
git stash drop stash{0}

清除所有stash
git stash clear
```



## 分支

```js
拉远程分支
git checkout -b localname origin/remotename
```





## 修改commit信息

```js
git commit --amend
```



## 设置代理

**http/https代理**

git config --global http.proxy http://127.0.0.1:8080

git config --global https.proxy https://127.0.0.1:8080



然后再git clone等命令就会自动走代理了。



如果要取消代理：



git config --global --unset http.proxy

git config --global --unset https.proxy



查看配置信息：

git config -l --global



## 生成patch

```bash
1.还未提交的修改
git diff > commit.patch
2.已提交的修改
git diff 3da71ca35 8b5100cdcd > commit.patch
注）3da71ca35 在8b5100cdcd 前面
3.已经add但是未commit的修改
git diff --cached > commit.patch
4.检查patch是否可以应用
git apply --check commit.patch
5.打补丁
git apply commit.patch
```

