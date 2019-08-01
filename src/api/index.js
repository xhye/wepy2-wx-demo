import http from '../utils/http'
import user from './user'
export default class Api {
  // 用户相关接口
  static user = user
  // 测试 post
  static testPost(params, op = {}) {
    return http.Post('demo/post', params, op)
  }
  // 测试 get
  static testGet(url, op = {}) {
    return http.Get('demo/get', op)
  }
}
