import { getQuarterStart } from '../../src/quarter';

function _testGetQuarterStart() {
    let index = 0;
    const std = month => {
        switch (month) {
            case 0:
            case 1:
            case 2: return new Date(2018, 0, 1).getTime();
            case 3:
            case 4:
            case 5: return new Date(2018, 3, 1).getTime();
            case 6:
            case 7:
            case 8: return new Date(2018, 6, 1).getTime();
            default: return new Date(2018, 9, 1).getTime();
        }
    }
    for(index; index < 11; index++) {
        (month => {
            const date = new Date(2018, month, 15)
            test(`get quarter start of ${date}`, () => {
                expect(getQuarterStart(date).getTime()).toBe(std(month))
            })
        })(index);
    }
}

_testGetQuarterStart();

test('get quarter start with no param', () => {
    expect(getQuarterStart()).toBeUndefined();
});