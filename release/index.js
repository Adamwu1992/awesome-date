(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.AwesomeDate = factory());
}(this, (function () { 'use strict';

    /**
     * 获取指定日期所在季度
     * @param {Date} date 
     * @returns {Number} quarter
     */
    function getQuarter(date) {
        if (!(date instanceof Date)) {
            date = this;
        }
        if (!(date instanceof Date)) {
            return;
        }
        var month = date.getMonth();
        return Math.floor((month + 3) / 3);
    }

    /**
     * 获取季度的起始时间
     * @param {*} date 
     * @returns {Date}
     */
    function getQuarterStart(date) {
        if (!(date instanceof Date)) {
            date = this;
        }
        if (!(date instanceof Date)) {
            return;
        }
        var q = getQuarter(date);
        var m = 3 * (q - 1);
        return new Date(date.getFullYear(), m, 1);
    }

    /**
     * 获取季度的结束时间
     * @param {*} date
     * @returns {Date} 
     */
    function getQuarterEnd(date) {
        if (!(date instanceof Date)) {
            date = this;
        }
        if (!(date instanceof Date)) {
            return;
        }
        var q = getQuarter(date);
        var m = 3 * q - 1;
        return new Date(date.getFullYear(), m + 1, 1, 0, 0, -1);
    }

    var QuarterUtils = /*#__PURE__*/Object.freeze({
        getQuarter: getQuarter,
        getQuarterStart: getQuarterStart,
        getQuarterEnd: getQuarterEnd
    });

    /**
     * 获取月份的起始时间
     * @param {*} date 
     * @returns {Date}
     */
    function getMonthStart(date) {
        if (!(date instanceof Date)) {
            date = this;
        }
        if (!(date instanceof Date)) {
            return;
        }
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }

    /**
     * 获取月份的结束时间
     * @param {*} date 
     * @returns {Date}
     */
    function getMonthEnd(date) {
        if (!(date instanceof Date)) {
            date = this;
        }
        if (!(date instanceof Date)) {
            return;
        }
        return new Date(date.getFullYear(), date.getMonth() + 1, 1, 0, 0, -1);
    }

    var MonthUtils = /*#__PURE__*/Object.freeze({
        getMonthStart: getMonthStart,
        getMonthEnd: getMonthEnd
    });

    var defineProperty = function (obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    };

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    var slicedToArray = function () {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"]) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }

      return function (arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();

    function stringify(date) {
        var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-MM-dd hh:mm:ss';

        var entry = void 0;
        // 判断调用方式
        if (this instanceof Date) {
            // 如果绑定到日期原型链 忽略参数date
            if (typeof date === 'string') {
                fmt = date;
            }
            entry = this;
        } else {
            entry = date;
        }
        if (!(entry instanceof Date)) {
            return;
        }
        var o = {
            'M+': entry.getMonth() + 1,
            'd+': entry.getDate(),
            'h+': entry.getHours(),
            'm+': entry.getMinutes(),
            's+': entry.getSeconds(),
            'q+': Math.floor((entry.getMonth() + 3) / 3),
            S: entry.getMilliseconds()
        };

        var str = fmt;

        if (/(y+)/.test(fmt)) {
            str = str.replace(RegExp.$1, ('' + entry.getFullYear()).substr(4 - RegExp.$1.length));
        }

        Object.entries(o).forEach(function (_ref) {
            var _ref2 = slicedToArray(_ref, 2),
                k = _ref2[0],
                v = _ref2[1];

            if (new RegExp('(' + k + ')').test(str)) {
                str = str.replace(RegExp.$1, RegExp.$1.length === 1 ? v : ('00' + v).substr(('' + v).length));
            }
        });

        return str;
    }

    function parse(str) {
        var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-MM-dd hh:mm:ss';

        if (!str) return;
        var t = Date.parse(str);
        if (!isNaN(t)) return new Date(t);
        var col = ['y+', 'M+', 'd+', 'h+', 'm+', 's+'];
        // 为特殊字符转义
        var reg = fmt.replace(/(?=(\$|\(|\)|\*|\+|\.|\[|\?|\\|\^|\{|\|))/g, '\\');
        var con = [];
        col.forEach(function (p) {
            if (new RegExp('(' + p + ')').test(fmt)) {
                var _m2 = RegExp.$1;
                reg = reg.replace(_m2, '([0-9]{' + _m2.length + '})');
                con.push(p);
            }
        });
        var matches = str.match(new RegExp(reg));
        if (!matches) return;

        var m = con.map(function (p, index) {
            return defineProperty({}, p, matches[index + 1]);
        }).reduce(function (prev, cur) {
            return _extends({}, prev, cur);
        });

        var _m = m['M+'] ? parseInt(m['M+']) - 1 : 1;
        return new Date(m['y+'] || 0, _m, m['d+'] || 1, m['h+'] || 0, m['m+'] || 0, m['s+'] || 0);
    }

    var TransformUtils = /*#__PURE__*/Object.freeze({
        stringify: stringify,
        parse: parse
    });

    function install() {
        var f = void 0;
        for (f in QuarterUtils) {
            Date.prototype[f] = AwesomeDate[f];
        }
        for (f in MonthUtils) {
            Date.prototype[f] = AwesomeDate[f];
        }
        for (f in TransformUtils) {
            Date.prototype[f] = AwesomeDate[f];
        }
    }

    var index = _extends({}, QuarterUtils, MonthUtils, TransformUtils, {
        install: install
    });

    return index;

})));
