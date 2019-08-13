"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../../../../vendor.js')(0));

var _core = _interopRequireDefault(require('../../../../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  computed: {
    canIUse: function canIUse() {
      return wx.canIUse('button.open-type.getUserInfo');
    }
  },
  data: {
    isWechatEnvironment: true,
    projectName: '我是一个小程序'
  },
  mixins: [],
  methods: {
    /**
     * 微信用户信息
     * @returns {Promise<void>}
     */
    bindGetUserInfo: function () {
      var _bindGetUserInfo = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee(userInfoRes) {
        var session, detail;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return wx.$api.system.checkSession(this.isWechatEnvironment);

              case 2:
                session = _context.sent;
                console.log('微信session', session); // const res = await wx.$api.system.getUserInfo(this.isWechatEnvironment)

                detail = userInfoRes.$wx.detail;

                if (detail.iv && detail.encryptedData) {
                  this.$app.$options.globalData.userInfo = detail.userInfo;
                  console.log('微信用户信息', this.$app.$options.globalData.userInfo);
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function bindGetUserInfo(_x) {
        return _bindGetUserInfo.apply(this, arguments);
      }

      return bindGetUserInfo;
    }(),

    /**
     * 企业微信用户信息
     * @returns {Promise<void>}
     */
    bindqywxUerInfo: function () {
      var _bindqywxUerInfo = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var session, res;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return wx.$api.system.checkSession(this.isWechatEnvironment);

              case 2:
                session = _context2.sent;
                console.log('企业微信session', session);
                _context2.next = 6;
                return wx.$api.system.getUserInfo(this.isWechatEnvironment);

              case 6:
                res = _context2.sent;
                console.log('企业微信用户信息', res);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function bindqywxUerInfo() {
        return _bindqywxUerInfo.apply(this, arguments);
      }

      return bindqywxUerInfo;
    }()
  },
  onLoad: function () {
    var _onLoad = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee3() {
      var environment, res;
      return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              environment = wx.$api.system.checkEnvironment();
              this.isWechatEnvironment = environment;
              this.$app.$options.globalData.isWechatEnvironment = environment; // 登录测试

              _context3.next = 5;
              return wx.$api.system.login(environment);

            case 5:
              res = _context3.sent;
              console.log('登录数据', res);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function onLoad() {
      return _onLoad.apply(this, arguments);
    }

    return onLoad;
  }()
}, {info: {"components":{},"on":{}}, handlers: {'17-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }},'17-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindqywxUerInfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'17-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }},'17-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindqywxUerInfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'17-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }},'17-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindqywxUerInfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'17-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }},'17-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindqywxUerInfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'17-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }},'17-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindqywxUerInfo($event)
      })();
    
  }}}, models: {} });