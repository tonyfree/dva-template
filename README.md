#### 使用antd
1. 把src/pages/index重命名为src/pages/home

2. create-react-app默认不开启[css-module](https://github.com/css-modules/css-modules), 开启css-module和antd的按需加载、定制主题有冲突，目前只有在eject下配置有效，这里先开启css-module和antd的按需加载, antd定制主题的解决方案后续再讲(todo)

3. 安装antd，实现按需加载，参考antd文档：[在 create-react-app 中使用](https://ant.design/docs/react/use-with-create-react-app-cn) 
```
yarn add antd -S
yarn add react-app-rewired babel-plugin-import -D
```
修改package.json里的scripts配置
```json 
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test --env=jsdom",
}
```
在项目根目录创建一个 config-overrides.js，配置antd按需加载和开启css-module
```javascript
const { injectBabelPlugin } = require('react-app-rewired')
const cloneDeep = require('lodash').cloneDeep

module.exports = function override(config, env) {
  // antd按需加载
  config = injectBabelPlugin(
    ['import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: "css"
      }
    ],
    config,
  )

  // css-module开启，同时需解决把antd样式覆盖的问题
  const cssModuleRule = config.module.rules[1].oneOf[2]
  const antdRule = cloneDeep(cssModuleRule)
  cssModuleRule.use[1].options.modules = true
  cssModuleRule.use[1].options.localIdentName = '[name]__[local]-[hash:base64:5]'
  cssModuleRule.exclude = /node_modules|antd\.css/
  antdRule.include = /node_modules|antd\.css/
  config.module.rules[1].oneOf.splice(3, 0, antdRule)

  return config;
}
```
4. 