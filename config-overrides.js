const { injectBabelPlugin } = require('react-app-rewired')
const cloneDeep = require('lodash').cloneDeep

module.exports = function override(config, env) {

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

  const cssModuleRule = config.module.rules[1].oneOf[2]
  const antdRule = cloneDeep(cssModuleRule)
  cssModuleRule.use[1].options.modules = true
  cssModuleRule.use[1].options.localIdentName = '[name]__[local]-[hash:base64:5]'
  cssModuleRule.exclude = /node_modules|antd\.css/
  antdRule.include = /node_modules|antd\.css/
  config.module.rules[1].oneOf.splice(3, 0, antdRule)

  if (env === 'development') {
    config = injectBabelPlugin(['dva-hmr'], config);
  } 

  return config;
}