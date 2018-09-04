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

### [antd国际化](https://ant.design/docs/react/i18n-cn)
在src/components/Users/index.js中添加antd-DatePicker组件，默认的文案(这里为placeholder)为英文，配置为中文：
```javascript
// src/layouts/App.js

import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'

const App = ({history, app}) => {
    return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        ...
      </Router>  
    </LocaleProvider>
  )
}

```
antd并没有实现完全的国际化，如果整个项目需要国际化可参考：[react-intl](https://github.com/yahoo/react-intl)、[intl-example](https://github.com/ant-design/intl-example)

### 自动格式化代码
安装插件：
```
yarn add husky lint-staged prettier -D
```
配置package.json
```json
{
  "scripts": {
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "src/**/*.{js,jsx,json,css}": [
      "prettier --single-quote --write",
      "git add"
    ]
  }
}
```

### 分析webpack打包后的模块大小
安装插件
```
yarn add source-map-explorer -D
```
配置package.json
```json
{
   "scripts": {
      "analyze": "source-map-explorer build/static/js/main.*"
   }
}
```
打包后通过此命令进行分析打包后的模块大小