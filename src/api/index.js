import http from '../utils/http'
import user from './user'
import system from './system'
export default class Api {
  // 用户相关接口
  static user = user
  // 用户相关接口
  static system = system
  // 测试 post
  static testPost(params, op = {}) {
    return http.Post('demo/post', params, op)
  }
  // 测试 get
  static testGet(url, op = {}) {
    return http.Get('demo/get', op)
  }
}
