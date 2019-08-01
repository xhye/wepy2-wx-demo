const domains = {
  development: 'http://127.0.0.1:8080/', // 开发api接口
  production: 'http://127.0.0.1:8080/' // 生产api接口
}
export const domain = domains[process.env.NODE_ENV]
export const name = 'wepy2-wx-demo' // 项目名
export const buried = { // 埋点用
  open: true,
  routerMaps: {
    'pages/index': '首页'
  }
}
