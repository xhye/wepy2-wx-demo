"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var T = {
  locale: null,
  locales: {},
  // 语言包内容
  langCode: ['zh_cn', 'zh_fan', 'en']
};

T.registerLocale = function (locales) {
  T.locales = locales; // 将语言包里的对象赋给当前对象的locales属性
};

T.setLocale = function (code) {
  T.locale = code; // 存储当前语言的种类('zh_cn'或者'zh_hk')
};

T.getLanguage = function () {
  return T.locales[T.locale];
};

var _default = T;
exports["default"] = _default;