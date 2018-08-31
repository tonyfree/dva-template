#### 参考umi目录约定修改目录结构
便于后续平滑过渡到umi，项目目录参考umi的预定方式，可参考[umi目录约定](https://umijs.org/guide/app-structure.html#%E7%9B%AE%E5%BD%95%E5%8F%8A%E7%BA%A6%E5%AE%9A)和案例[antd-admin](https://github.com/zuiidea/antd-admin)的目录  

调整后目录如下：
```
dva-template
    ├── README.md                      
    ├── node_modules                   
    ├── package.json                   
    ├── .gitignore                     
    ├── public                         
    └── src       
         ├── layouts                   // umi默认src/layouts/index.js为全局路由，我们略做调整
         |     ├── App.css    
         |     ├── App.js              // 全局布局
         |     ├── App.test.js
         |     └── logo.svg
         ├── pages                     // umi约定pages为路由目录
         |     ├── index               // 首页
         |     └── users               // 用户管理面板
         |          ├── index.js
         |          └── index.css
         ├── index.css
         ├── index.js                  
         └── registerServiceWorker.js  
```
