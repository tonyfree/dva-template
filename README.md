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