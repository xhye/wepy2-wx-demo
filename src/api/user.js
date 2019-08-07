import http from '../utils/http'

export default {
  // 登录
  getUser(params) {
    return http.Get(`user`, {})
  }
}
