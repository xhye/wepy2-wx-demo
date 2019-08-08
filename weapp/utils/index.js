"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _date = _interopRequireDefault(require('date.js'));

var _tips = _interopRequireDefault(require('tips.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 工具汇总
 */
var Utils = function Utils() {
  _classCallCheck(this, Utils);
};

exports["default"] = Utils;

_defineProperty(Utils, "date", _date["default"]);

_defineProperty(Utils, "tips", _tips["default"]);