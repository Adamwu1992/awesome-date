import { getQuarter } from '../../src/quarter';


function _testGetQuarter() {
    let index = 0;
    const q = month => {
        switch (month) {
            case 0:
            case 1:
            case 2: return 1;
            case 3:
            case 4:
            case 5: return 2;
            case 6:
            case 7:
            case 8: return 3;
            default: return 4;
        }
    }
    for(index; index < 12; index++) {
        ((m) => {
            test(`get quarter with month ${m}`, () => {
                expect(getQuarter(new Date(2018, m, 1))).toBe(q(m));
            })
        })(index)
    }
}
_testGetQuarter();

test('get quarter with no param', () => expect(getQuarter()).toBeUndefined());

