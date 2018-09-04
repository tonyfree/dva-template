### 配置webpack路径别名
为了与node模块区分，别名前面统一添加@
```javascript
// config-overrides.js

const resolve = require('path').resolve

module.exports = function override(config, env) {
  config.resolve = {
    alias: {
      '@components': resolve(__dirname, "./src/components"),
      '@layouts': resolve(__dirname, "./src/layouts"),
      '@models': resolve(__dirname, "./src/models"),
      '@pages': resolve(__dirname, "./src/pages"),
      '@services': resolve(__dirname, "./src/services"),
      '@utils': resolve(__dirname, "./src/utils")
    }
  }
  return config
}
```
举例：修改../../components为@components即可

### 