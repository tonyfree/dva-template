const resolve = require('path').resolve
const { injectBabelPlugin } = require('react-app-rewired')
const rewireModules = require('./react-app-rewire-modules')

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