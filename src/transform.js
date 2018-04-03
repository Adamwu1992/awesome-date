export function stringify(date, fmt = 'yyyyMMdd') {
    if (!(date instanceof Date)) {
        date = this;
    }
    if (!(date instanceof Date)) {
        return;
    }
    const o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        S: date.getMilliseconds(),
    };

    let str = fmt;

    if (/(y+)/.test(fmt)) {
        str = str.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length));
    }

    Object.entries(o).forEach(([k, v]) => {
        if (new RegExp(`(${k})`).test(str)) {
            str = str.replace(RegExp.$1, RegExp.$1.length === 1 ? v : `00${v}`.substr(`${v}`.length));
        }
    });

    return str;
}

export function parse(str, fmt = 'yyyyMMdd hh:mm:ss') {
    if (!str) return;
    const t = Date.parse(str);
    if (!isNaN(t)) return new Date(t);
    const col = [
        'y+',
        'M+',
        'd+',
        'h+',
        'm+',
        's+'
    ]
    // 为特殊字符转义
    let reg = fmt.replace(/(?=(\$|\(|\)|\*|\+|\.|\[|\?|\\|\^|\{|\|))/g, '\\');
    const con = [];
    col.forEach(p => {
        if (new RegExp(`(${p})`).test(fmt)) {
            const m = RegExp.$1;
            reg = reg.replace(m, `([0-9]{${m.length}})`);
            con.push(p);
        }
    });
    const matches = str.match(new RegExp(reg));
    if (!matches) return;

    const m = con.map((p, index) => ({
        [p]: matches[index + 1]
    })).reduce((prev, cur) => {
        return { ...prev, ...cur};
    });

    const _m = m['M+'] ? parseInt(m['M+']) - 1 : 1;
    return new Date(
        m['y+'] || 0,
        _m,
        m['d+'] || 1,
        m['h+'] || 0,
        m['m+'] || 0,
        m['s+'] || 0
    );
}