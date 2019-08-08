"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 时间格式化
 */
var DateFmt =
/*#__PURE__*/
function () {
  function DateFmt() {
    _classCallCheck(this, DateFmt);
  }

  _createClass(DateFmt, null, [{
    key: "fmt",

    /**
     * fmt yyyy-MM-dd hh:mm:ss
     * date date()
     * @returns {Promise<any>}
     */
    value: function fmt(_fmt, date) {
      var ampm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var o = {
        'M+': date.getMonth() + 1,
        // 月份
        'd+': date.getDate(),
        // 日
        'h+': date.getHours(),
        // 小时
        'm+': date.getMinutes(),
        // 分
        's+': date.getSeconds(),
        // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3),
        // 季度
        'S': date.getMilliseconds() // 毫秒

      };
      var suffix;

      if (ampm) {
        if (o['h+'] > 12) {
          o['h+'] -= 12;
          suffix = 'PM';
        } else {
          suffix = 'AM';
        }
      }

      if (/(y+)/.test(_fmt)) {
        _fmt = _fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
      }

      for (var k in o) {
        if (new RegExp('(' + k + ')').test(_fmt)) {
          _fmt = _fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
      }

      if (ampm) {
        _fmt += suffix;
      }

      return _fmt;
    }
  }]);

  return DateFmt;
}();

exports["default"] = DateFmt;