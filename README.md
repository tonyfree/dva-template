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
在src/components/Users/index.js中添加antd-DatePicker组件，默认的文案(这里为placeholder)为英文
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