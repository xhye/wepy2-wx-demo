"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = require('../config/index.js');

var _tips = _interopRequireDefault(require('tips.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Http =
/*#__PURE__*/
function () {
  function Http() {
    _classCallCheck(this, Http);
  }

  _createClass(Http, null, [{
    key: "Get",
    value: function Get(url, _ref) {
      var _ref$load = _ref.load,
          load = _ref$load === void 0 ? true : _ref$load,
          _ref$loadMsg = _ref.loadMsg,
          loadMsg = _ref$loadMsg === void 0 ? '加载中...' : _ref$loadMsg,
          _ref$header = _ref.header,
          header = _ref$header === void 0 ? {} : _ref$header;
      return request('GET', url, {}, load, loadMsg, header);
    }
  }, {
    key: "Post",
    value: function Post(url) {
      var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _ref2 = arguments.length > 2 ? arguments[2] : undefined,
          _ref2$load = _ref2.load,
          load = _ref2$load === void 0 ? true : _ref2$load,
          _ref2$loadMsg = _ref2.loadMsg,
          loadMsg = _ref2$loadMsg === void 0 ? '加载中...' : _ref2$loadMsg,
          _ref2$header = _ref2.header,
          header = _ref2$header === void 0 ? {} : _ref2$header;

      return request('POST', url, body, load, loadMsg, header);
    }
  }]);

  return Http;
}();

exports["default"] = Http;

function request(method, url) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var load = arguments.length > 3 ? arguments[3] : undefined;
  var loadMsg = arguments.length > 4 ? arguments[4] : undefined;
  var header = arguments.length > 5 ? arguments[5] : undefined;
  // AccessToken数据，如不需要请删除
  var app = getApp();
  console.log('app', app);
  console.log('app.$wepy.$app', app.$wepy.$app);
  var finalUrl = !url.startsWith('http') ? _config.domain + url : url;

  var finalHeader = _objectSpread({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'accessToken': wx.getStorageSync('accessToken')
  }, header);

  if (load !== undefined && load) {
    _tips["default"].loading(loadMsg);
  }

  return new Promise(function (resolve, reject) {
    // 不能开启 this.use('promisify')
    wx.request({
      url: finalUrl,
      method: method,
      data: params,
      header: finalHeader,
      // dataType: 'json',
      success: function success(res) {
        if (res.data.code !== 0) {// 失败逻辑处理
        } else {
          resolve(res.data);
        }
      },
      fail: function fail(err) {
        reject(err);
      },
      complete: function complete() {
        return load && _tips["default"].loaded();
      }
    });
  });
}