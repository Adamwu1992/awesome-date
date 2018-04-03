import { getMonthEnd } from '../../src/month';

function _testMonthEnd() {
    let index = 0;
    const std = month => new Date(2018, month + 1, 1, 0, 0, -1).getTime();
    for (index; index < 12; index++) {
        (month => test(`get month end with month ${index}`, () => {
            expect(getMonthEnd(new Date(2018, month, 10, 1, 2, 3)).getTime()).toBe(std(month));
        }))(index);
    }
}
_testMonthEnd();

test('get month end with no param', () => expect(getMonthEnd()).toBeUndefined());