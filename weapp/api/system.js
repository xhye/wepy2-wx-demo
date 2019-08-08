"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var System =
/*#__PURE__*/
function () {
  function System() {
    _classCallCheck(this, System);
  }

  _createClass(System, null, [{
    key: "checkSession",

    /**
     * 检查登录状态
     * @param isWechatEnvironment true:微信环境 false:企业微信环境
     */
    value: function checkSession(isWechatEnvironment) {
      if (isWechatEnvironment) {
        return this.wxCheckSession();
      } else {
        return this.qywxCheckSession();
      }
    }
    /**
     * 微信登录状态检查
     * @returns {Promise<any>}
     */

  }, {
    key: "wxCheckSession",
    value: function wxCheckSession() {
      return new Promise(function (resolve, reject) {
        wx.checkSession({
          success: function success() {
            // session_key 未过期，并且在本生命周期一直有效
            resolve(true);
          },
          fail: function fail() {
            // session_key 已经失效，需要重新执行登录流程
            resolve(false);
          }
        });
      });
    }
    /**
     * 企业微信登录状态检查
     * @returns {Promise<any>}
     */

  }, {
    key: "qywxCheckSession",
    value: function qywxCheckSession() {
      return new Promise(function (resolve, reject) {
        wx.qy.checkSession({
          success: function success() {
            // session_key 未过期，并且在本生命周期一直有效
            resolve(true);
          },
          fail: function fail() {
            // session_key 已经失效，需要重新执行登录流程
            resolve(false);
          }
        });
      });
    }
    /**
     * 系统运行环境
     *  return true：微信运行 false: 企业微信运行
     */

  }, {
    key: "checkEnvironment",
    value: function checkEnvironment() {
      try {
        var res = wx.getSystemInfoSync();
        return res.environment === undefined;
      } catch (e) {
        // Do something when catch error
        wx.$utils.tips.error('运行异常');
      }
    }
    /**
     * 获取用户信息
     * @param isWechatEnvironment true:微信环境 false:企业微信环境
     */

  }, {
    key: "getUserInfo",
    value: function getUserInfo(isWechatEnvironment) {
      if (isWechatEnvironment) {
        return this.getwxUserInfo();
      } else {
        return this.getqywxUserInfo();
      }
    }
    /**
     * 获取微信用户信息
     */

  }, {
    key: "getwxUserInfo",
    value: function getwxUserInfo() {
      return new Promise(function (resolve, reject) {
        wx.getUserInfo({
          success: function success(res) {
            console.log('wx.getUserInfo success', res);
            resolve(res);
          },
          fail: function fail(res) {
            console.log('wx.getUserInfo fail', res);
            reject(res.errMsg);
          },
          complete: function complete(res) {
            console.log('wx.getUserInfo complete', res);
          }
        });
      });
    }
    /**
     * 获取企业用户信息
     */

  }, {
    key: "getqywxUserInfo",
    value: function getqywxUserInfo() {
      return new Promise(function (resolve, reject) {
        wx.qy.getEnterpriseUserInfo({
          success: function success(res) {
            console.log('wx.qy.getEnterpriseUserInfo success', res);
            resolve(res);
          },
          fail: function fail(res) {
            console.log('wx.qy.getEnterpriseUserInfo fail', res);
            reject(res.errMsg);
          },
          complete: function complete(res) {
            console.log('wx.qy.getEnterpriseUserInfo complete', res);
          }
        });
      });
    }
    /**
     *  微信统一登录接口
     * @param isWechatEnvironment true:微信环境 false:企业微信环境
     */

  }, {
    key: "login",
    value: function login(isWechatEnvironment) {
      if (isWechatEnvironment) {
        return this.wxLogin();
      } else {
        return this.qywxLogin();
      }
    } // 微信登录

  }, {
    key: "wxLogin",
    value: function wxLogin() {
      return new Promise(function (resolve, reject) {
        wx.login({
          success: function success(res) {
            console.log('wx.login success', res);
            resolve(res);
          },
          fail: function fail(res) {
            console.log('wx.login fail', res);
            reject(res.errMsg);
          },
          complete: function complete(res) {
            console.log('wx.login complete', res);
          }
        });
      });
    } // 企业微信登录

  }, {
    key: "qywxLogin",
    value: function qywxLogin() {
      return new Promise(function (resolve, reject) {
        wx.qy.login({
          success: function success(res) {
            console.log('wx.qy.login success', res);
            resolve(res);
          },
          fail: function fail(res) {
            console.log('wx.qy.login fail', res);
            reject(res.errMsg);
          },
          complete: function complete(res) {
            console.log('wx.qy.login complete', res);
          }
        });
      });
    }
  }]);

  return System;
}();

exports["default"] = System;