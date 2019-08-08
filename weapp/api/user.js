"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _http = _interopRequireDefault(require('../utils/http.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  // 登录
  getUser: function getUser(params) {
    return _http["default"].Get("user", {});
  }
};
exports["default"] = _default;