import { parse } from '../../src/transform';

const std_time = new Date(2018, 3, 2, 0, 0, 0).getTime();
test('parse default(yyyyMMdd hh:mm:ss)', () => {
    expect(parse('20180402 00:00:00').getTime())
        .toBe(std_time);
});
test('parse yyyy-MM-dd hh:mm:ss', () => {
    expect(parse('2018-04-02 00:00:00', 'yyyy-MM-dd hh:mm:ss').getTime())
        .toBe(std_time);
});
test('parse yyyy/MM/dd hh:mm:ss', () => {
    expect(parse('2018/04/02 00:00:00', 'yyyy/MM/dd hh:mm:ss').getTime())
        .toBe(std_time);
});
test('parse yyyy年M月d日h时m分s秒', () => {
    expect(parse('2018年4月2日0时0分0秒', 'yyyy年M月d日h时m分s秒').getTime())
        .toBe(std_time);
});
test('parse yyyy年MM月dd日hh时mm分ss秒', () => {
    expect(parse('2018年11月20日10时11分12秒', 'yyyy年MM月dd日hh时mm分ss秒').getTime())
        .toBe(new Date(2018, 10, 20, 10, 11, 12).getTime());
});

test('parse with no param', () => expect(parse()).toBeUndefined());