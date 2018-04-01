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
        if (!date) {
            date = this;
        }
        var month = date.getMonth();
        switch (month) {
            case 0:
            case 1:
            case 2:
                return 1;
            case 3:
            case 4:
            case 5:
                return 2;
            case 6:
            case 7:
            case 8:
                return 3;
            default:
                return 4;
        }
    }

    var QuarterUtils = /*#__PURE__*/Object.freeze({
        getQuarter: getQuarter
    });

    var classCallCheck = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };

    var createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    function binder(Base, Utils) {
        var f = void 0;
        for (f in Utils) {
            console.log(f);
            Base.prototype[f] = Utils[f];
        }
        console.log(Base.prototype);
    }

    var AwesomeDate = function () {
        function AwesomeDate() {
            classCallCheck(this, AwesomeDate);
        }

        createClass(AwesomeDate, null, [{
            key: 'install',
            value: function install() {
                binder(Date, QuarterUtils);
            }
        }]);
        return AwesomeDate;
    }();

    binder(AwesomeDate, QuarterUtils);

    return AwesomeDate;

})));
