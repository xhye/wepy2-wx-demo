import { domain } from '../config'
import Tips from '../utils/tips'
export default class Http {
  static Get(url, { load = true, loadMsg = '加载中...', header = {} }) {
    return request('GET', url, {}, load, loadMsg, header)
  }

  static Post(url, body = {}, { load = true, loadMsg = '加载中...', header = {} }) {
    return request('POST', url, body, load, loadMsg, header)
  }
}

function request(method, url, params = {}, load, loadMsg, header) {
  // AccessToken数据，如不需要请删除
  // const userInfo = wepy.$instance.globalData.userInfo
  const finalUrl = !url.startsWith('http') ? domain + url : url
  const finalHeader = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'accessToken': wx.getStorageSync('accessToken'),
    ...header
  }
  if (load !== undefined && load) {
    Tips.loading(loadMsg)
  }
  return new Promise((resolve, reject) => { // 不能开启 this.use('promisify')
    wx.request({
      url: finalUrl,
      method: method,
      data: params,
      header: finalHeader,
      // dataType: 'json',
      success: (res) => {
        if (res.data.code !== 0) {
          // 失败逻辑处理
        } else {
          resolve(res.data)
        }
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => load && Tips.loaded()
    })
  })
}
