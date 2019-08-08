export default {
  data: {
    locale: wx.getStorageSync('language') | 'zh_cn', // 当前语言类型
    language: {} // 当前语言
  },
  methods: {
    /**
     * 改变语言
     */
    changeLanguage(locale) {
      wx.$event.$emit('language-change', locale, this)
    }
  },
  onLoad() {
    // 设置默认语言
    this.language = wx.$T.getLanguage()
  }
}
