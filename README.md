#### 使用antd
1. 把src/pages/index重命名为src/pages/home

2. create-react-app默认不开启[css-module](https://github.com/css-modules/css-modules), 开启css-module和antd的按需加载和定制主题有冲突，目前只有在eject下配置有效，解决方案后续再讲(todo)

3. 安装antd，实现按需加载和定制主题，参考antd文档：[在 create-react-app 中使用](https://ant.design/docs/react/use-with-create-react-app-cn) 
```
yarn add antd -S
yarn add react-app-rewired babel-plugin-import react-app-rewire-less -D
```
修改package.json里的scripts配置
```json 
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test --env=jsdom",
}
```
在项目根目录创建一个 config-overrides.js，配置按需加载
```javascript
const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

module.exports = function override(config, env) {

  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config,
  )

  config = rewireLess.withLoaderOptions({
    modifyVars: {
      "@primary-color": "#1DA57A"
    },
    javascriptEnabled: true,
  })(config, env)

  return config;
}
```
