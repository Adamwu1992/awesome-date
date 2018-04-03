export function stringify(date, fmt = 'yyyy-MM-dd hh:mm:ss') {
    let entry;
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
    const o = {
        'M+': entry.getMonth() + 1,
        'd+': entry.getDate(),
        'h+': entry.getHours(),
        'm+': entry.getMinutes(),
        's+': entry.getSeconds(),
        'q+': Math.floor((entry.getMonth() + 3) / 3),
        S: entry.getMilliseconds(),
    };

    let str = fmt;

    if (/(y+)/.test(fmt)) {
        str = str.replace(RegExp.$1, `${entry.getFullYear()}`.substr(4 - RegExp.$1.length));
    }

    Object.entries(o).forEach(([k, v]) => {
        if (new RegExp(`(${k})`).test(str)) {
            str = str.replace(RegExp.$1, RegExp.$1.length === 1 ? v : `00${v}`.substr(`${v}`.length));
        }
    });

    return str;
}

export function parse(str, fmt = 'yyyy-MM-dd hh:mm:ss') {
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