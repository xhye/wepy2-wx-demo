"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('vendor.js')(0));

var _core = _interopRequireDefault(require('vendor.js')(2));

var _eventHub = _interopRequireDefault(require('common/eventHub.js'));

var _x = _interopRequireDefault(require('vendor.js')(1));

var _locales = _interopRequireDefault(require('utils/locales.js'));

var _i18n = _interopRequireDefault(require('utils/i18n.js'));

var _api = _interopRequireDefault(require('api/index.js'));

var _utils = _interopRequireDefault(require('utils/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 使用vuex
_core["default"].use(_x["default"]); // 简化事件


wx.$event = _eventHub["default"]; // 简化api

wx.$api = _api["default"]; // 简化utils

wx.$utils = _utils["default"]; // 用 /utils/locales 注册了 locale

_i18n["default"].registerLocale(_locales["default"]); // 将 T 注册到 wx 之下，这样在任何地方都可以调用 wx.T.getLanguage() 来得到当前的语言对象了。


wx.$T = _i18n["default"];

_core["default"].app({
  hooks: {
    // App 级别 hook，对整个 App 生效
    // 同时存在 Page hook 和 App hook 时，优先执行 Page hook，返回值再交由 App hook 处
    'before-setData': function beforeSetData(dirty) {
      console.log('app setData dirty: ', dirty);
      return dirty;
    },
    // 监控整个app的事件
    'before-event': function beforeEvent(data) {// console.log(`Its's a ${data.event.type} event, there are ${data.params.length} arguments`)
    }
  },
  globalData: {
    isWechatEnvironment: true,
    // 小程序环境运行 true：微信运行 false: 企业微信运行
    userInfo: {} // 微信/企业微信用户信息

  },
  onLaunch: function () {
    var _onLaunch = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      var locale;
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              locale = 'zh_cn'; // 设置语言信息 默认中文

              wx.$T.setLocale(locale);
              wx.setStorageSync('language', locale); // --------监听语言改变事件-----------

              wx.$event.$on('language-change', function (locale, _this) {
                // 监听事件 触发事件 eventHub.$emit('app-launch', (...args))
                wx.setStorageSync('language', locale);
                wx.$T.setLocale(locale);
                _this.language = wx.$T.getLanguage();
                console.log("----------\u5207\u6362\u8BED\u8A00\uFF1A".concat(locale, " -----------"));
              }); // --------监听语言切换事件结束-----------

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function onLaunch() {
      return _onLaunch.apply(this, arguments);
    }

    return onLaunch;
  }(),
  methods: {}
}, {a: 1}, {a: 1}, {a: 1});