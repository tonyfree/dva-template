#### 创建项目
1. 安装[node](https://nodejs.org/en/)，建议通过[nvm](https://github.com/creationix/nvm)来安装，便于版本切换
2. 包管理工具：node自带[npm](https://www.npmjs.com/)，可以通[nrm](https://github.com/Pana/nrm)设置registry，或者用[yarn](https://yarnpkg.com/zh-Hans/)进行包管理(本文后续统一使用yarn)，如果公司内部搭建了私有仓库：
``` 
npm config set registry your-registry

yarn config set registry "your-registry"
```
3. 创建项目，参考：[create-react-app](https://github.com/facebook/create-react-app)
``` 
yarn create react-app my-app 
```
4. 目录结构说明：
```
dva-template
    ├── README.md                      // 说明文档
    ├── node_modules                   // 依赖模块
    ├── package.json                   // 项目信息
    ├── .gitignore                     // git忽略配置
    ├── public                         // 静态资源，不会被webpack处理，直接拷贝到build文件夹下
    │     ├── favicon.ico
    │     ├── index.html               // 入口页面
    │     └── manifest.json            // PWA扩展配置
    └── src                            // 开发源码，webpack只编译此目录下的代码
         ├── App.css            
         ├── App.js                    // React根组件
         ├── App.test.js               // 组件测试
         ├── index.css
         ├── index.js                  // 入口js
         ├── logo.svg
         └── registerServiceWorker.js  // React对PWA的实现,线上服务器需要https协议
```
5. 其他补充资料  
+ [package.json](https://docs.npmjs.com/files/package.json)
+ [gitignore](https://git-scm.com/docs/gitignore)
+ [manifest.json](https://developer.mozilla.org/zh-CN/docs/Web/Manifest)
+ [Your First Progressive Web App](https://codelabs.developers.google.com/codelabs/your-first-pwapp/#0)