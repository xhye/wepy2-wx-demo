"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buried = exports.name = exports.domain = void 0;
var domains = {
  development: 'http://127.0.0.1:8080/',
  // 开发api接口
  production: 'http://127.0.0.1:8080/' // 生产api接口

};
var domain = domains["development"];
exports.domain = domain;
var name = 'wepy2-wx-demo'; // 项目名

exports.name = name;
var buried = {
  // 埋点用
  open: true,
  routerMaps: {
    'pages/index': '首页'
  }
};
exports.buried = buried;