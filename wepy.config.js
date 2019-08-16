const path = require('path')
const prod = process.env.NODE_ENV === 'production'

module.exports = {
  wpyExt: '.wpy',
  static: ['src/images', 'src/styles'], // , 'src/components/vant'
  eslint: true,
  cliLogs: !prod,
  build: {},
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      'Mixins': path.join(__dirname, 'src/mixins/globalMixins.js'), // 混合
      'Vant': path.join(__dirname, 'src/components/vant'), // van组件
      'Base': path.join(__dirname, 'src/components/base')// 自定义组件
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: prod
    },
    babel: {
      sourceMap: true,
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@wepy/babel-plugin-import-regenerator',
        '@babel/plugin-proposal-class-properties',  // 使用class编写代码
        'transform-node-env-inline' // js页面也可以获取 process.env.NODE_ENV
      ]
    }
  },
  plugins: [],
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}
