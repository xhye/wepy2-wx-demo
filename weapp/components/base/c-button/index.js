"use strict";

var _core = _interopRequireDefault(require('../../../vendor.js')(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  name: 'CButton',
  props: {
    backgroundColor: {
      type: String,
      "default": '#217AED'
    },
    fontColor: {
      type: String,
      "default": '#FFFFFF'
    },
    marginTop: {
      type: Number,
      "default": 80
    }
  },
  computed: {},
  events: {},
  watch: {},
  methods: {
    /**
     * 按钮事件，父组件调用的回调
     */
    btnClick: function btnClick() {// this.$emit('btnClick')
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} });