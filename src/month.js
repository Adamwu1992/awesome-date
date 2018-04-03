/**
 * 获取月份的起始时间
 * @param {*} date 
 * @returns {Date}
 */
export function getMonthStart(date) {
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
export function getMonthEnd(date) {
    if (!(date instanceof Date)) {
        date = this;
    }
    if (!(date instanceof Date)) {
        return;
    }
    return new Date(date.getFullYear(), date.getMonth() + 1, 1, 0, 0, -1);
}