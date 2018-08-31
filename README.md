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
