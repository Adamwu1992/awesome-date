"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getQuarter = getQuarter;

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