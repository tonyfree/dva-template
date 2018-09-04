const { injectBabelPlugin } = require('react-app-rewired')
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

  if (env === 'development') {
    config = injectBabelPlugin(['dva-hmr'], config);
  } 

  config = injectBabelPlugin('transform-decorators-legacy', config);

  return config;
}