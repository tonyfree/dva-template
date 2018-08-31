#### 使用dva
1. 安装dva
```
yarn add dva -S
``` 

2. 继续修改目录，添加model和service
```
dva-template                        
    └── src      
         ├── components                // 全局通用组件 
         ├── layouts                   
         ├── models                    // 全局dva model
         ├── pages                     
         |     ├── index               
         |     └── users               
         |          ├── index.js
         |          ├── index.css
         |          ├── model.js       // 路由对应的dva model
         |          └── service.js     // 路由对应的API      
         ├── services                  // 全局API
         ├── utils                     // 工具类
         ├── index.css
         ├── index.js                  
         └── registerServiceWorker.js  
```
3. 使用dva，参考：[dva文档](https://dvajs.com/)  

> 定义model
```javascript
// src/pages/users/model.js

export default {
  namespace: 'dashboard',   // 命名空间
  state: {
    name: 'tony',
    age: 100
  },
  reducers: {},             // 同步操作，唯一可以修改state的地方
  effects: {},              // 异步操作和业务逻辑
  subscriptions: {}         // 监听数据：history路由变化等
}
```

> 定义组件: 通过[connect](https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)把model注入到组件
```javascript
// src/pages/users/index.js

import React from 'react'
import { connect } from 'dva'

const Users = ({ users }) => (
  <div>
    <p>昵称：{users.name}</p>
    <p>年龄：{users.age}</p>
  </div>
)

export default connect(({ users }) => ({ users }))(Users)
```
> 设置全局路由
```javascript
// src/layouts/App.js

import React from 'react'
import { Router, Route } from 'dva/router'

import IndexPage from '../pages/index'
import Users from '../pages/users'

const App = ({history}) => {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/users" component={Users} />
      </div>
    </Router>  
  )
}

export default App
```
> dva启动应用
```javascript
// src/index.js

import React from 'react'
import dva from 'dva'
import './index.css'
import App from './layouts/App'

//  创建应用
const app = dva()

// 注册model
app.model(require('./pages/users/model').default)

// 注册视图
app.router(() => <App />)

// 启动应用
app.start('#root')


```