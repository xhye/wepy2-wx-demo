"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../../../vendor.js')(0));

var _core = _interopRequireDefault(require('../../../vendor.js')(1));

var _Mixins = _interopRequireDefault(require('../../../mixins/globalMixins.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  hooks: {
    // Page 级别 hook, 只对当前 Page 的 setData 生效。
    'before-setData': function beforeSetData(dirty) {
      return dirty;
    }
  },
  mixins: [_Mixins["default"]],
  data: {},
  computed: {},
  methods: {
    changeLanguageHandler: function changeLanguageHandler(locale) {
      this.changeLanguage(locale);
    },
    request: function () {
      var _request = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var _ref, data, _ref2, data1;

        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return wx.$api.testPost();

              case 2:
                _ref = _context.sent;
                data = _ref.data;
                console.log('data', data);
                _context.next = 7;
                return wx.$api.testGet();

              case 7:
                _ref2 = _context.sent;
                data1 = _ref2.data1;
                console.log('data1', data1);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function request() {
        return _request.apply(this, arguments);
      }

      return request;
    }(),
    toDemo: function toDemo(value) {
      wx.navigateTo({
        url: "/pages/tabs/demo/".concat(value, "/index")
      });
    }
  },
  created: function created() {}
}, {info: {"components":{"c-button":{"path":"..\\..\\..\\components\\base\\c-button\\index"}},"on":{"18-0":["tap"],"18-1":["tap"],"18-2":["tap"],"18-3":["tap"],"18-4":["tap"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('zh_cn')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('en')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.request($event)
      })();
    
  }},'18-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('van')
      })();
    
  }},'18-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('weui')
      })();
    
  }}}, models: {} }, {info: {"components":{"c-button":{"path":"..\\..\\..\\components\\base\\c-button\\index"}},"on":{"18-0":["tap"],"18-1":["tap"],"18-2":["tap"],"18-3":["tap"],"18-4":["tap"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('zh_cn')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('en')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.request($event)
      })();
    
  }},'18-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('van')
      })();
    
  }},'18-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('weui')
      })();
    
  }}}, models: {} }, {info: {"components":{"c-button":{"path":"..\\..\\..\\components\\base\\c-button\\index"}},"on":{"18-0":["tap"],"18-1":["tap"],"18-2":["tap"],"18-3":["tap"],"18-4":["tap"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('zh_cn')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('en')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.request($event)
      })();
    
  }},'18-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('van')
      })();
    
  }},'18-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('weui')
      })();
    
  }}}, models: {} }, {info: {"components":{"c-button":{"path":"..\\..\\..\\components\\base\\c-button\\index"}},"on":{"18-0":["tap"],"18-1":["tap"],"18-2":["tap"],"18-3":["tap"],"18-4":["tap"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('zh_cn')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('en')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.request($event)
      })();
    
  }},'18-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('van')
      })();
    
  }},'18-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('weui')
      })();
    
  }}}, models: {} }, {info: {"components":{"c-button":{"path":"..\\..\\..\\components\\base\\c-button\\index"}},"on":{"18-0":["tap"],"18-1":["tap"],"18-2":["tap"],"18-3":["tap"],"18-4":["tap"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('zh_cn')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('en')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.request($event)
      })();
    
  }},'18-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('van')
      })();
    
  }},'18-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('weui')
      })();
    
  }}}, models: {} }, {info: {"components":{"c-button":{"path":"..\\..\\..\\components\\base\\c-button\\index"}},"on":{"18-0":["tap"],"18-1":["tap"],"18-2":["tap"],"18-3":["tap"],"18-4":["tap"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('zh_cn')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('en')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.request($event)
      })();
    
  }},'18-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('van')
      })();
    
  }},'18-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('weui')
      })();
    
  }}}, models: {} }, {info: {"components":{"c-button":{"path":"..\\..\\..\\components\\base\\c-button\\index"}},"on":{"18-0":["tap"],"18-1":["tap"],"18-2":["tap"],"18-3":["tap"],"18-4":["tap"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('zh_cn')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('en')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.request($event)
      })();
    
  }},'18-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('van')
      })();
    
  }},'18-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('weui')
      })();
    
  }}}, models: {} }, {info: {"components":{"c-button":{"path":"..\\..\\..\\components\\base\\c-button\\index"}},"on":{"18-0":["tap"],"18-1":["tap"],"18-2":["tap"],"18-3":["tap"],"18-4":["tap"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('zh_cn')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('en')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.request($event)
      })();
    
  }},'18-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('van')
      })();
    
  }},'18-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('weui')
      })();
    
  }}}, models: {} }, {info: {"components":{"c-button":{"path":"..\\..\\..\\components\\base\\c-button\\index"}},"on":{"18-0":["tap"],"18-1":["tap"],"18-2":["tap"],"18-3":["tap"],"18-4":["tap"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('zh_cn')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('en')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.request($event)
      })();
    
  }},'18-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('van')
      })();
    
  }},'18-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('weui')
      })();
    
  }}}, models: {} }, {info: {"components":{"c-button":{"path":"..\\..\\..\\components\\base\\c-button\\index"}},"on":{"18-0":["tap"],"18-1":["tap"],"18-2":["tap"],"18-3":["tap"],"18-4":["tap"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('zh_cn')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('en')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.request($event)
      })();
    
  }},'18-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('van')
      })();
    
  }},'18-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('weui')
      })();
    
  }}}, models: {} }, {info: {"components":{"c-button":{"path":"..\\..\\..\\components\\base\\c-button\\index"}},"on":{"18-0":["tap"],"18-1":["tap"],"18-2":["tap"],"18-3":["tap"],"18-4":["tap"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('zh_cn')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('en')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.request($event)
      })();
    
  }},'18-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('van')
      })();
    
  }},'18-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('weui')
      })();
    
  }}}, models: {} }, {info: {"components":{"c-button":{"path":"..\\..\\..\\components\\base\\c-button\\index"}},"on":{"18-0":["tap"],"18-1":["tap"],"18-2":["tap"],"18-3":["tap"],"18-4":["tap"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('zh_cn')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('en')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.request($event)
      })();
    
  }},'18-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('van')
      })();
    
  }},'18-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('weui')
      })();
    
  }}}, models: {} }, {info: {"components":{"c-button":{"path":"..\\..\\..\\components\\base\\c-button\\index"}},"on":{"18-0":["tap"],"18-1":["tap"],"18-2":["tap"],"18-3":["tap"],"18-4":["tap"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('zh_cn')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('en')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.request($event)
      })();
    
  }},'18-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('van')
      })();
    
  }},'18-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('weui')
      })();
    
  }}}, models: {} }, {info: {"components":{"c-button":{"path":"..\\..\\..\\components\\base\\c-button\\index"}},"on":{"18-0":["tap"],"18-1":["tap"],"18-2":["tap"],"18-3":["tap"],"18-4":["tap"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('zh_cn')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('en')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.request($event)
      })();
    
  }},'18-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('van')
      })();
    
  }},'18-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('weui')
      })();
    
  }}}, models: {} }, {info: {"components":{"c-button":{"path":"..\\..\\..\\components\\base\\c-button\\index"}},"on":{"18-0":["tap"],"18-1":["tap"],"18-2":["tap"],"18-3":["tap"],"18-4":["tap"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('zh_cn')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('en')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.request($event)
      })();
    
  }},'18-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('van')
      })();
    
  }},'18-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('weui')
      })();
    
  }}}, models: {} }, {info: {"components":{"c-button":{"path":"..\\..\\..\\components\\base\\c-button\\index"}},"on":{"18-0":["tap"],"18-1":["tap"],"18-2":["tap"],"18-3":["tap"],"18-4":["tap"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('zh_cn')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('en')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.request($event)
      })();
    
  }},'18-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('van')
      })();
    
  }},'18-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('weui')
      })();
    
  }}}, models: {} }, {info: {"components":{"c-button":{"path":"..\\..\\..\\components\\base\\c-button\\index"}},"on":{"18-0":["tap"],"18-1":["tap"],"18-2":["tap"],"18-3":["tap"],"18-4":["tap"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('zh_cn')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('en')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.request($event)
      })();
    
  }},'18-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('van')
      })();
    
  }},'18-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('weui')
      })();
    
  }}}, models: {} }, {info: {"components":{"c-button":{"path":"..\\..\\..\\components\\base\\c-button\\index"}},"on":{"18-0":["tap"],"18-1":["tap"],"18-2":["tap"],"18-3":["tap"],"18-4":["tap"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('zh_cn')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('en')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.request($event)
      })();
    
  }},'18-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('van')
      })();
    
  }},'18-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('weui')
      })();
    
  }}}, models: {} }, {info: {"components":{"c-button":{"path":"..\\..\\..\\components\\base\\c-button\\index"}},"on":{"18-0":["tap"],"18-1":["tap"],"18-2":["tap"],"18-3":["tap"],"18-4":["tap"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('zh_cn')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeLanguageHandler('en')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.request($event)
      })();
    
  }},'18-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('van')
      })();
    
  }},'18-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.toDemo('weui')
      })();
    
  }}}, models: {} });