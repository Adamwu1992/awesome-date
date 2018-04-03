
/**
 * 获取指定日期所在季度
 * @param {Date} date 
 * @returns {Number} quarter
 */
export function getQuarter(date) {
    if (!(date instanceof Date)) {
        date = this;
    }
    if (!(date instanceof Date)) {
        return;
    }
    const month = date.getMonth();
    return Math.floor((month + 3) / 3);
}

/**
 * 获取季度的起始时间
 * @param {*} date 
 * @returns {Date}
 */
export function getQuarterStart(date) {
    if (!(date instanceof Date)) {
        date = this;
    }
    if (!(date instanceof Date)) {
        return;
    }
    const q = getQuarter(date);
    const m = 3 * (q - 1);
    return new Date(date.getFullYear(), m, 1);
}

/**
 * 获取季度的结束时间
 * @param {*} date
 * @returns {Date} 
 */
export function getQuarterEnd(date) {
    if (!(date instanceof Date)) {
        date = this;
    }
    if (!(date instanceof Date)) {
        return;
    }
    const q = getQuarter(date);
    const m = 3 * q - 1;
    return new Date(date.getFullYear(), m + 1, 1, 0, 0, -1);
}
