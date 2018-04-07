function toT(num = 1234567) {
    const reg = /\B(?=(\d{3})+(\D+|$))/g
    let s = `${num}`;
    return s.replace(reg, ',');
}
console.log(toT());

function toCamel(s = 'to-camel-string') {
    const reg = /-(\w)/g;
    return s.replace(reg, (input, match) => match.toUpperCase());
}
console.log(toCamel());

function toHyphenate(s = 'toCamelString') {
    const reg = /([a-z])([A-Z])/g
    return s.replace(reg, '$1-$2').toLowerCase();
}
console.log(toHyphenate());