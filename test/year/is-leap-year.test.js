import { isLeapYear } from '../../src/year';

describe('is leap year', () => {
    let y = 1;
    const _isLeapYear = y => new Date(y, 1, 29).getMonth() === 1;
    for (y; y < 3200; y++) {
        (year => {
            test(`for year ${year}`, () => expect(isLeapYear(year)).toBe(_isLeapYear(year)));
        })(y);
    }
})