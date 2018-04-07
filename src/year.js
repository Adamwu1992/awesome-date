function isLeap(year) {
    if (year > 3199 || year < 1) {
        throw new Error('year ' + year + ' is out of range');
    }
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}


export function isLeapYear(date) {
    let year;
    if (this instanceof Date) {
        year = this.getFullYear();
    } else if (date instanceof Date) {
        year = date.getFullYear();
    } else {
        year = parseInt(date);
    }
    if (isNaN(year)) return;

    return isLeap(year);
}