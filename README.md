#### 钩子[hooks](https://dvajs.com/api/#app-use-hooks)，例如：
1. 全局错误处理
```javascript
import { message } from 'antd';
const app = dva({
  onError(e) {
    message.error(e.message, /* duration */3);
  },
})
```
2. 打印日志：[redux-logger](https://github.com/evgenyrodionov/redux-logger)
```
yarn add redux-logger -S
```
```javascript
import { createLogger } from 'redux-logger';
const app = dva({
  onAction: createLogger(),
})

```

#### 插件
1. [dva-loading](https://github.com/dvajs/dva/tree/master/packages/dva-loading):自动处理 loading 状态
```
yarn add dva-loading -S
```
在相应的组件中使用:
```javascript
// src/components/Users/index.js

function Users({ loading}) {
  return (
    <Table loading={loading} />
  )
}

function mapStateToProps(state) {
  return {
    lading: state.loading.models.users
  }
}
```