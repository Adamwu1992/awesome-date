(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.AwesomeDate = {})));
}(this, (function (exports) { 'use strict';

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

    var AwesomeDate = _extends({}, QuarterUtils);

    function install(Base) {
        var f = void 0;
        for (f in AwesomeDate) {
            Base.prototype[f] = AwesomeDate[f];
        }
    }

    exports.install = install;
    exports.default = AwesomeDate;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
