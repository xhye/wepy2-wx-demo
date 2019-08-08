
export default class System {
  /**
   * 检查登录状态
   * @param isWechatEnvironment true:微信环境 false:企业微信环境
   */
  static checkSession(isWechatEnvironment) {
    if (isWechatEnvironment) {
      return this.wxCheckSession()
    } else {
      return this.qywxCheckSession()
    }
  }

  /**
   * 微信登录状态检查
   * @returns {Promise<any>}
   */
  static wxCheckSession() {
    return new Promise((resolve, reject) => {
      wx.checkSession({
        success: function() {
          // session_key 未过期，并且在本生命周期一直有效
          resolve(true)
        },
        fail: function() {
          // session_key 已经失效，需要重新执行登录流程
          resolve(false)
        }
      })
    })
  }
  /**
   * 企业微信登录状态检查
   * @returns {Promise<any>}
   */
  static qywxCheckSession() {
    return new Promise((resolve, reject) => {
      wx.qy.checkSession({
        success: function() {
          // session_key 未过期，并且在本生命周期一直有效
          resolve(true)
        },
        fail: function() {
          // session_key 已经失效，需要重新执行登录流程
          resolve(false)
        }
      })
    })
  }
  /**
   * 系统运行环境
   *  return true：微信运行 false: 企业微信运行
   */
  static checkEnvironment() {
    try {
      const res = wx.getSystemInfoSync()
      return res.environment === undefined
    } catch (e) {
      // Do something when catch error
      wx.$utils.tips.error('运行异常')
    }
  }

  /**
   * 获取用户信息
   * @param isWechatEnvironment true:微信环境 false:企业微信环境
   */
  static getUserInfo(isWechatEnvironment) {
    if (isWechatEnvironment) {
      return this.getwxUserInfo()
    } else {
      return this.getqywxUserInfo()
    }
  }
  /**
   * 获取微信用户信息
   */
  static getwxUserInfo() {
    return new Promise((resolve, reject) => {
      wx.getUserInfo({
        success: function (res) {
          console.log('wx.getUserInfo success', res)
          resolve(res)
        },
        fail: function(res) {
          console.log('wx.getUserInfo fail', res)
          reject(res.errMsg)
        },
        complete (res) {
          console.log('wx.getUserInfo complete', res)
        }
      })
    })
  }
  /**
   * 获取企业用户信息
   */
  static getqywxUserInfo() {
    return new Promise((resolve, reject) => {
      wx.qy.getEnterpriseUserInfo({
        success: function (res) {
          console.log('wx.qy.getEnterpriseUserInfo success', res)
          resolve(res)
        },
        fail: function(res) {
          console.log('wx.qy.getEnterpriseUserInfo fail', res)
          reject(res.errMsg)
        },
        complete (res) {
          console.log('wx.qy.getEnterpriseUserInfo complete', res)
        }
      })
    })
  }

  /**
   *  微信统一登录接口
   * @param isWechatEnvironment true:微信环境 false:企业微信环境
   */
  static login(isWechatEnvironment) {
    if (isWechatEnvironment) {
      return this.wxLogin()
    } else {
      return this.qywxLogin()
    }
  }
  // 微信登录
  static wxLogin() {
    return new Promise((resolve, reject) => {
      wx.login({
        success: function(res) {
          console.log('wx.login success', res)
          resolve(res)
        },
        fail: function(res) {
          console.log('wx.login fail', res)
          reject(res.errMsg)
        },
        complete (res) {
          console.log('wx.login complete', res)
        }
      })
    })
  }
  // 企业微信登录
  static qywxLogin() {
    return new Promise((resolve, reject) => {
      wx.qy.login({
        success: function(res) {
          console.log('wx.qy.login success', res)
          resolve(res)
        },
        fail: function(res) {
          console.log('wx.qy.login fail', res)
          reject(res.errMsg)
        },
        complete (res) {
          console.log('wx.qy.login complete', res)
        }
      })
    })
  }
}
