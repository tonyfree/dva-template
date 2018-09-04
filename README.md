### 解决css-module和antd按需加载、自定义主题的冲突
方案参考：[react-app-rewire-css-modules](https://github.com/codebandits/react-app-rewire-css-modules)  
在项目根目录下创建react-app-rewire-modules，根据上面方案的源码修改  
配置config-overrides.js
```javascript
const rewireModules = require('./react-app-rewire-modules')
module.exports = function override(config, env) {

  config = injectBabelPlugin(
    ['import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
      }
    ],
    config,
  )

  config = rewireModules(config, env, {
    modifyVars: {
      "@primary-color": "#1DA57A"
    },
    javascriptEnabled: true
  })

  return config
}
```
需要模块化的css和less文件需要改名为*.module.css和*.module.less，不加module的文件没有css-module效果