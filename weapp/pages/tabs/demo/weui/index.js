"use strict";

var _core = _interopRequireDefault(require('../../../../vendor.js')(2));

var _Mixins = _interopRequireDefault(require('../../../../mixins/globalMixins.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
  methods: {},
  created: function created() {}
}, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} });