"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 提示与加载工具类
 */
var Tips =
/*#__PURE__*/
function () {
  function Tips() {
    _classCallCheck(this, Tips);

    this.isLoading = false;
    this.pause = false;
  }

  _createClass(Tips, null, [{
    key: "success",
    value: function success(title) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
      wx.showToast({
        title: title,
        icon: 'success',
        mask: true,
        duration: duration
      });

      if (duration > 0) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, duration);
        });
      }
    }
  }, {
    key: "modal",
    value: function modal(text) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return new Promise(function (resolve, reject) {
        wx.showModal({
          title: title,
          content: text,
          showCancel: false,
          confirmColor: '#ff6900',
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(res) {
            reject(res);
          }
        });
      });
    }
  }, {
    key: "confirm",
    value: function confirm(text) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var cancelText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '取消';
      var confirmText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '确定';
      return new Promise(function (resolve, reject) {
        wx.showModal({
          title: title,
          content: text,
          showCancel: true,
          confirmColor: '#ff6900',
          cancelText: cancelText,
          confirmText: confirmText,
          success: function success(res) {
            if (res.confirm) {
              resolve('ok');
            } else if (res.cancel) {
              resolve(null);
            }
          },
          fail: function fail(res) {
            reject(res);
          }
        });
      });
    }
  }, {
    key: "toast",
    value: function toast(title, onHide) {
      var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'none';
      wx.showToast({
        title: title,
        icon: icon,
        mask: true,
        duration: 1000
      });

      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }
  }, {
    key: "alert",
    value: function alert(title, image) {
      wx.showToast({
        title: title,
        image: image,
        mask: true,
        duration: 500
      });
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve();
        }, 500);
      });
    }
  }, {
    key: "error",
    value: function error(title, onHide) {
      wx.showToast({
        title: title,
        image: '/images/error.png',
        mask: true,
        duration: 1000
      });

      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }
  }, {
    key: "loading",
    value: function loading() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中';

      if (Tips.isLoading) {
        return;
      }

      Tips.isLoading = true;

      if (wx.showLoading) {
        wx.showLoading({
          title: title,
          mask: true
        });
      }
    }
  }, {
    key: "navLoading",
    value: function navLoading() {
      if (Tips.isLoading) {
        return;
      }

      Tips.isLoading = true;
      wx.showNavigationBarLoading();
    }
  }, {
    key: "loaded",
    value: function loaded() {
      if (Tips.isLoading) {
        Tips.isLoading = false; // if (tips.hideLoading) {

        wx.hideLoading();
        wx.hideNavigationBarLoading(); // }
      }
    }
  }, {
    key: "action",
    value: function action() {
      for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
        items[_key] = arguments[_key];
      }

      return new Promise(function (resolve, reject) {
        wx.showActionSheet({
          itemList: items,
          itemColor: '#A53334',
          success: function success(res) {
            var result = {
              index: res.tapIndex,
              text: items[res.tapIndex]
            };
            resolve(result);
          },
          fail: function fail(res) {
            reject(res.errMsg);
          }
        });
      });
    }
  }, {
    key: "actionWithFunc",
    value: function actionWithFunc(items, color) {
      for (var _len2 = arguments.length, functions = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        functions[_key2 - 2] = arguments[_key2];
      }

      wx.showActionSheet({
        itemList: items,
        itemColor: color,
        success: function success(res) {
          var index = res.tapIndex;

          if (index >= 0 && index < functions.length) {
            functions[index]();
          }
        }
      });
    }
  }, {
    key: "share",
    value: function share(title, url, desc) {
      return {
        title: title,
        path: url,
        desc: desc,
        success: function success(res) {
          Tips.toast('分享成功');
        }
      };
    }
  }, {
    key: "setLoading",
    value: function setLoading() {
      Tips.isLoading = true;
    }
  }]);

  return Tips;
}();

exports["default"] = Tips;
Tips.isLoading = false;