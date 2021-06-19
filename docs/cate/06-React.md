# react

## 起步

```
npm i creat-react-app -g

cerate-react-app demo
```



## 基本写法

```
import React, { Component,Fragment } from 'react'

class App extends Component {
    render() {
        return (
            <Fragment>
                <ul className="my-list">
                    <li>1</li>
                    <li>2</li>
                </ul>
                <div>1</div>
            </Fragment>
        )
    }
}

export default App
```



## Fragment

相当于vue的template



## state

相当于vue data

在class中写



不可以直接改变this.state.xx的值，会有性能问题



改变

```
this.setState({

	xx: xx

})

```



## innerhtml

```
dangerouslySetInnerHTML={{__html:item}}
```



## label for

htmlFor



## 组件通信

```
 <Item content={item} index={index} delList={this.delList} />
 
 this.props.xx接收
 直接将方法传过去 不用发送事件
```



## props校验

```
import PropTypes from 'prop-types'

item为组件名
item.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    delList: PropTypes.func
}
item.defaultProps= {
    name: 'dd'
}
```



## ref

```
<input 
    value={this.state.inputValue} 
    onChange={this.inputChange.bind(this)} 
    ref={(input) => { this.input = input}}
/>

然后直接this.input使用即可 获取到了dom元素
```



## 优化更新

```
shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content !== this.props.content){
        return true
    }else{
        return false
    }

}
```



## transition

```
npm install react-transition-group --save

import { CSSTransition } from 'react-transition-group'

# dom 

<CSSTransition
    in={this.state.isShow}   //用于判断是否出现的状态
    timeout={2000}           //动画持续时间
    classNames="boss-text"   //className值，防止重复
    unmountOnExit            //动画结束删除元素
>
    <div>BOSS级人物-孙悟空</div>
</CSSTransition>

# css

.boss-text-enter{
    opacity: 0;
}
.boss-text-enter-active{
    opacity: 1;
    transition: opacity 2000ms;

}
.boss-text-enter-done{
    opacity: 1;
}
.boss-text-exit{
    opacity: 1;
}
.boss-text-exit-active{
    opacity: 0;
    transition: opacity 2000ms;

}
.boss-text-exit-done{
    opacity: 0;
}
```



多个

```
<TransitionGroup>
    {
        this.state.list.map((item, index) => {
            return (
                <CSSTransition
                    timeout={1000}
                    classNames='boss-text'
                    unmountOnExit
                    appear={true}
                    key={index + item}
                >
                    <Item
                        content={item}
                        index={index}
                        deleteItem={this.delList.bind(this)}
                    />
                </CSSTransition>
            )
        })
    }
</TransitionGroup>
```



# Redux

## ant-design

```
 npm i antd
```



## 建store文件夹

index.js

```
import {createStore} from 'redux'
import reducer from './reducer'
const store = createStore(reducer)
export default store
```



reducer.js

```
import { CHANGE_INPUT, ADD_LIST, DEL_LIST} from './actionTypes'

const defaultState = {
    inputValue: 'write something',
    data: [
        '早8点开晨会，分配今天的开发工作',
        '早9点和项目经理作开发需求讨论会',
        '晚5:30对今日代码进行review'
    ]
}


export default (state = defaultState, action) => {
    console.log(state, action)
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    } else if (action.type === ADD_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.data.unshift(action.value)
        newState.inputValue = ''
        return newState
    } else if (action.type === DEL_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.data.splice(action.value, 1)
        return newState
    }
    
    return state
}
```



actionTypes.js

```
export const CHANGE_INPUT = 'changeInput'
export const ADD_LIST = 'addList'
export const DEL_LIST = 'delList'

```



actionCreator.js

```
import { CHANGE_INPUT, ADD_LIST, DEL_LIST} from './actionTypes'

export const changeInputAction = value => ({
    type: CHANGE_INPUT,
    value
})

export const addList = value => ({
    type: ADD_LIST,
    value
})

export const delList = value => ({
    type: DEL_LIST,
    value
})
```





在需要的组件中

```
import store from './store'
import { changeInputAction, addList, delList } from './store/actionCreators'

this.state = store.getState()
// 订阅
store.subscribe(this.storeChange)

storeChange () {
    this.setState(store.getState())
}

# 点击事件
clickBtn () {
    store.dispatch(changeInputAction(value))
}
```



## ui分离

ui

```
import React from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'

const TodoListUI = (props) => {
    return (
        <div style={{margin:'10px'}}>
            <div>
                <Input 
                    placeholder={props.inputValue} 
                    style={{ width:'250px', marginRight:'10px'}}
                    onChange={props.inputChange}
                    value={props.inputValue}
                />
                <Button 
                    type="primary"
                    onClick={props.clickBtn}
                >增加</Button>
            </div>
            <div style={{margin:'10px',width:'300px'}}> 
                <List
                    bordered
                    dataSource={props.data}
                    renderItem={(item, index)=>(<List.Item onClick={() => {props.deleteItem(index)}}>{item}</List.Item>)}
                />
            </div>
        </div>
    );
}

export default TodoListUI;
```



js

```
render() { 
        return ( 
            <TodoListUI 
                inputValue={this.state.inputValue}
                inputChange={this.inputChange}
                clickBtn={this.clickBtn}
                data={this.state.data}
                deleteItem={this.deleteItem}
            />
        );
    }
```



## axios存数据

在生命周期获取后dispatch然后reducre接收改变即可



## redux-thunk

```
npm i redux-thunk

import thunk from 'redux-thunk'
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)


export const getTodoList = () => {
    return (dispatch) => {
        axios.get('http://rap2api.taobao.org/app/mock/243469/list').then(res => {
            dispatch(getList(res.data.list))
        })
    }
}

store.dispatch(getTodoList())

```



## sage

不想整



## react-redux

provider包裹

组件connect一下



# react-router

```
npm i react-router-dom
```



## AppRouter.js

```
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Pages/Index'
import List from './Pages/List'

function AppRouter() {
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list/111">列表</Link></li>
            </ul>
            <Route path="/" exact component={Index} />
            <Route path="/list/:id" component={List} />
        </Router>
    )
}

export default AppRouter
```



## 获取值

```
this.props.match中
```



## 重定向

1. ```
   this.props.history.push("/home/")
   ```

2. ```
   import { Link , Redirect } from "react-router-dom";
   
    <Redirect to="/home/" />
   ```



# react-hooks

```
import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>click {count}</p>
            <button onClick={() => {setCount(count+1)}}>click</button>
        </div>
    )
}

export default App;
```



# yarn

```
npm install -g yarn

yarn --version
```

Yarn 淘宝源安装，分别复制粘贴以下代码行到黑窗口运行即可
    `yarn config set registry https://registry.npm.taobao.org -g`
    `yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g`



https://blog.csdn.net/idomyway/article/details/88411836





# next.js

```csharp
yarn global add create-next-app
create-next-app my-project
cd my-project
yarn dev
```



## 支持引入css

```
yarn add @zeit/next-css
```



根目录新建next.config.js

```
const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withCss({})
```









## 导航

标签方式

```
import Link from 'next/link'

<Link href="/index">
    <a><span className="header-logo">小小前端儿</span></a>
</Link>
```



js方式

```
import Router from 'next/router'


const handleClick = (e) => {
    console.log(e)
    if (e.key == 0) {
        Router.push('/index')
    } else {
        Router.push('/blogList?id=' + e.key)
    }
}


<Menu
    mode="horizontal"
    onClick={handleClick}
>
    {
        navArray.map((item) => {
            return (
                <Menu.Item key={item.Id}>
                    <Icon type={item.icon} />
                    {item.typeName}
                </Menu.Item>
            )
        })
    }
</Menu>
```



## 动态引入

```
import dynamic from 'next/dynamic'
import '../public/style/pages/index.css'
const DynamicRibbon = dynamic(
    import('../assets/ribbon'),
    {
      ssr: false   //这个要加上,禁止使用 SSR
    }
)

<DynamicRibbon/>
```

