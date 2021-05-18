const { override,addWebpackAlias, fixBabelImports, addLessLoader } = require('customize-cra');
const path = require('path')

const resolve = function (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {},
  }),
  addWebpackAlias({
    "@": resolve('src'),
    "common": resolve('src/common')
  })
);
