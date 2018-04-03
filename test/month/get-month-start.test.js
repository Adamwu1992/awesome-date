import { getMonthStart } from '../../src/month';

function _testMonthStart() {
    let index = 0;
    const std = month => new Date(2018, month, 1).getTime();
    for (index; index < 12; index++) {
        (month => test(`get month start with month ${index}`, () => {
            expect(getMonthStart(new Date(2018, month, 10, 1, 2, 3)).getTime()).toBe(std(month));
        }))(index);
    }
}
_testMonthStart();

test('get month start with no param', () => expect(getMonthStart()).toBeUndefined());