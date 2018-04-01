export function stringify(fmt = 'yyyyMMdd') {
    const o = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds(),
    };

    let str = fmt;

    if (/(y+)/.test(fmt)) {
        str = str.replace(RegExp.$1, `${this.getFullYear()}`.substr(4 - RegExp.$1.length));
    }

    Object.entries(o).forEach(([k, v]) => {
        if (new RegExp(`(${k})`).test(str)) {
            str = str.replace(RegExp.$1, RegExp.$1.length === 1 ? v : `00${v}`.substr(`${v}`.length));
        }
    });

    return str;
}

export function parse(str, fmt = 'yyyyMMdd') {
    
}