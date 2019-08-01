"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _http = _interopRequireDefault(require('../utils/http.js'));

var _user = _interopRequireDefault(require('user.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Api =
/*#__PURE__*/
function () {
  function Api() {
    _classCallCheck(this, Api);
  }

  _createClass(Api, null, [{
    key: "testPost",
    // 用户相关接口
    // 测试 post
    value: function testPost(params) {
      var op = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _http["default"].Post('demo/post', params, op);
    } // 测试 get

  }, {
    key: "testGet",
    value: function testGet(url) {
      var op = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _http["default"].Get('demo/get', op);
    }
  }]);

  return Api;
}();

exports["default"] = Api;

_defineProperty(Api, "user", _user["default"]);