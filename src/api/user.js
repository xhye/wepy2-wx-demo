import http from '../utils/http'

export default class User {
  // 登录
  test(params) {
    return http.Get(`user`, {})
  }
}
