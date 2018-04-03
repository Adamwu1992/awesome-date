import { getQuarterEnd } from '../../src/quarter';

function _testGetQuarterEnd() {
    let index = 0;
    const std = month => {
        switch (month) {
            case 0:
            case 1:
            case 2: return new Date(2018, 3, 1, 0, 0, -1).getTime();
            case 3:
            case 4:
            case 5: return new Date(2018, 6, 1, 0, 0, -1).getTime();
            case 6:
            case 7:
            case 8: return new Date(2018, 9, 1, 0, 0, -1).getTime();
            default: return new Date(2018, 12, 1, 0, 0, -1).getTime();
        }
    }
    for(index; index < 11; index++) {
        (month => {
            const date = new Date(2018, month, 15)
            test(`get quarter end of ${date}`, () => {
                expect(getQuarterEnd(date).getTime()).toBe(std(month))
            })
        })(index);
    }
}

_testGetQuarterEnd();

test('get quarter end with no param', () => {
    expect(getQuarterEnd()).toBeUndefined();
});