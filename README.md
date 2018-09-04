#### 使用[rap2](http://rap2.taobao.org/)
> 目前关于dva和umi的案例都采用了本地mock数据，如果前后端分离不建议本地mock数据，建议使用接口管理平台(IAP的小伙伴可以找peter要rap2的账号，已经写好user模块的几个接口)

 1. 新增工具脚本
 ```
 yarn add axios -S
 ```
 ```
 src
  ├── utils     
       ├── request.js                                  
       └── config.js         
 ```

 2. 实现service：src/users/service.js

 3. 实现model：src/users/model.js，并在相应的组件src/components/Users/index.js中触发相应事件处理，注意需要把上一步中的初始化数据去掉

 4. 解决Hash history的一些bug(dva默认指定给路由用的是hashHistory)
 ```javascript
 // src/index.js

import createHistory from 'history/createBrowserHistory';
const app = dva({
  history: createHistory(),
});
 ```