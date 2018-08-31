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
```
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