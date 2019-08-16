let T = {
  locale: null,
  locales: {},           // 语言包内容
  langCode: ['zh_cn', 'zh_fan', 'en']
}

T.registerLocale = (locales) => {
  T.locales = locales      // 将语言包里的对象赋给当前对象的locales属性
}

T.setLocale = (code, router) => {
  T.locale = code          // 存储当前语言的种类('zh_cn'或者'zh_hk')
  const temp = router || 'pages/tabs/index/index' // router === undefine 默认首页
  T.setTabBarLang()
  T.setNavigationBarTitle(temp)
}

T.getLanguage = () => {
  return T.locales[T.locale]
}

// 设置导航栏标题
T.setNavigationBarTitle = (router) => {
  console.log('改变NavigationBarTitle语言:', router)
  const title = T.locales.navigationBarTitles[T.locale][router]
  wx.setNavigationBarTitle({
    title: title
  })
}

// 设置 TabBar 语言
T.setTabBarLang = () => {
  console.log('改变TabarTitle语言')
  let tabBarLang = T.locales.tabBarTitles[T.locale]
  tabBarLang.forEach((item, index) => {
    wx.setTabBarItem({
      'index': index,
      'text': item
    })
  })
}

export default T
