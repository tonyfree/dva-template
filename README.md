### 基于create-react-app的dva模板

#### 前提说明
+ 建议开始之前阅读此文：[JavaScript fundamentals before learning React](https://www.robinwieruch.de/javascript-fundamentals-react-requirements/) ( [中文版](https://mp.weixin.qq.com/s/2HLrU43Qsc61gaeJj2Q2Og) )
+ 本模板基于react技术栈和ES6语法，假设你已掌握以下相关技术：[react](https://reactjs.org/)、[react-router](https://reacttraining.com/react-router/web/guides/philosophy)、[redux](https://redux.js.org)、[redux-saga](https://redux-saga.js.org/)、[ECMAScript 6 入门](http://es6.ruanyifeng.com/)
+ 无状态函数组件是定义React组件的首选方法，但若需要内部数据(state)和在生命周期中操作的请使用类组件，如数据初始化(异步请求)、第三方DOM插件如Swiper调用(在componentDidMount中调用)和销毁(在componentWillUnmount中销毁)
+ React使用了很多函数式编程的概念，推荐gitbook：[JS函数式编程指南](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/)
+ 参考项目：[github-stars](https://github.com/sorrycc/github-stars)、[dva-example-user-dashboard](https://github.com/dvajs/dva-example-user-dashboard)、[ant-design-pro](https://github.com/ant-design/ant-design-pro)、[dva-boot-admin](https://github.com/LANIF-UI/dva-boot-admin)


#### [step1：用create-react-app初始化项目](https://github.com/tonyfree/dva-template/tree/step1)

#### [step2：参考umi目录约定修改目录结构](https://github.com/tonyfree/dva-template/tree/step2)

#### [step3：使用dva](https://github.com/tonyfree/dva-template/tree/step3)

#### [step4：使用antd](https://github.com/tonyfree/dva-template/tree/step4)

#### [step5：使用rap2、实现dva-model的reducers、effects、subscriptions](https://github.com/tonyfree/dva-template/tree/step5)