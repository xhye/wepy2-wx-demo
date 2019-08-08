"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  data: {
    locale: wx.getStorageSync('language') | 'zh_cn',
    // 当前语言类型
    language: {} // 当前语言

  },
  methods: {
    /**
     * 改变语言
     */
    changeLanguage: function changeLanguage(locale) {
      wx.event.$emit('language-change', locale, this);
    }
  },
  onLoad: function onLoad() {
    // 设置默认语言
    this.language = wx.T.getLanguage();
  }
};
exports["default"] = _default;