### 联调
前后端分离的方案中，前端和后台基于接口管理平台各自独立开发，进入联调阶段时，前端需要连接真实的后台接口，配置代理：
```json
//  package.json

{
  "proxy": {
    "/api": {
      "target": "http://rap2api.taobao.org/app/mock/83449",
      "changeOrigin": true,
      "pathRewrite": {"^/api": ""}
    }
  }
}

```
调整 src/utils/config.js
```javascript
// const host = 'http://rap2api.taobao.org/app/mock/83449'
const host = '/api'
```

### 打包
> 在step4中我们开启了css-module，在开发环境下是正常的，因为打包的webpack配置和开发环境下不同，之前的css-module配置方式不适用于打包，我们暂时关闭css-module(后续处理 todo)  

路由的异步加载处理：使用[dva/dynamic](https://dvajs.com/api/#dva-dynamic)
```javascript
// src/index.js  入库不加载路由model，只加载全局model

// app.model(require('./pages/users/model').default)
```
```javascript
// src/layouts/App.js 路由数据异步加载

import dynamic from 'dva/dynamic'

const App = ({history, app}) => {
  const IndexPage = dynamic({
    app,
    component: () => import(/* webpackChunkName: "home-view" */ '../pages/home')
  })
  const Users = dynamic({
    app,
     models: () => [import(/* webpackChunkName: "users-module" */ '../pages/users/model')],
    component: () => import(/* webpackChunkName: "users-view" */ '../pages/users')
  })
  const Error = dynamic({
    app,
    component: () => import(/* webpackChunkName: "error-view" */ '../pages/404')
  }) 
  return ( )
}
```

### 部署
+ 前端代码独立部署，可以通过nginx代理
+ 建议使用自动化部署
