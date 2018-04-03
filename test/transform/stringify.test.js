import { stringify } from '../../src/transform';


/**
 * stringify year
 */
test('test stringify yyyy to 2018', () => {
    expect(stringify(new Date(2018, 3, 1), 'yyyy')).toBe('2018');
});

/**
 * stringify month
 */
function _testMonth() {
    let i = 0;
    for (i; i < 12; i++) {
        (month => {
            test(`test stringify M to ${month + 1}`, () => {
                expect(stringify(new Date(2018, month, 10), 'M'))
                    .toBe(`${month + 1}`);
            });
        })(i);

        (month => {
            let out = month < 9 ? `0${month + 1}` : `${month + 1}`;
            test(`test stringify MM to ${out}`, () => {
                expect(stringify(new Date(2018, month, 10), 'MM'))
                    .toBe(out);
            });
        })(i);
    }
}
_testMonth();

/**
 * stringify date
 */
test('test stringify dd to 01', () => {
    expect(stringify(new Date(2018, 1, 1), 'dd')).toBe('01');
});
test('test stringify d to 1', () => {
    expect(stringify(new Date(2018, 1, 1), 'd')).toBe('1');
});
test('test stringify d to 11', () => {
    expect(stringify(new Date(2018, 1, 11), 'd')).toBe('11');
});

/**
 * stringify hour
 */
test('test stringify hh to 05', () => {
    expect(stringify(new Date(2018, 1, 1, 5, 1, 1, 1), 'hh')).toBe('05');
});
test('test stringify h to 5', () => {
    expect(stringify(new Date(2018, 1, 1, 5, 1, 1, 1), 'h')).toBe('5');
});
test('test stringify h to 15', () => {
    expect(stringify(new Date(2018, 1, 1, 15, 1, 1, 1), 'h')).toBe('15');
});

/**
 * stringify minute
 */
test('test stringify mm to 09', () => {
    expect(stringify(new Date(2018, 1, 1, 1, 9, 1), 'mm')).toBe('09');
});
test('test stringify m to 9', () => {
    expect(stringify(new Date(2018, 1, 1, 1, 9, 1), 'm')).toBe('9');
});
test('test stringify m to 19', () => {
    expect(stringify(new Date(2018, 1, 1, 1, 19, 1), 'm')).toBe('19');
});

/**
 * stringify second
 */
test('test stringify ss to 02', () => {
    expect(stringify(new Date(2018, 1, 1, 1, 1, 2), 'ss')).toBe('02');
});
test('test stringify s to 2', () => {
    expect(stringify(new Date(2018, 1, 1, 1, 1, 2), 's')).toBe('2');
});
test('test stringify s to 12', () => {
    expect(stringify(new Date(2018, 1, 1, 1, 1, 12), 's')).toBe('12');
});

/**
 * stringify quarter
 */
function _testQuarter() {
    let i = 0;
    for (i; i < 12; i++) {
        (month => {
            let q;
            switch (month) {
                case 0:
                case 1:
                case 2: q = 1; break;
                case 3:
                case 4:
                case 5: q = 2; break;
                case 6:
                case 7:
                case 8: q = 3; break;
                default: q = 4;
            }
            test(`stringify q to ${q}`, () => {
                expect(stringify(new Date(2018, month, 1), 'q')).toBe(`${q}`);
            });
            test(`stringify qq to 0${q}`, () => {
                expect(stringify(new Date(2018, month, 1), 'qq')).toBe(`0${q}`);
            });
        })(i);
    }
}
_testQuarter();

/**
 * stringify millisecond
 */
test('stringify S to 123', () => {
    expect(stringify(new Date(2018, 1, 1, 1, 1, 1, 123), 'S')).toBe('123');
});

/**
 * stringify defult
 */
test('stringify default to 20180401', () => {
    expect(stringify(new Date(2018, 3, 1))).toBe('20180401');
});

test('stringify with no param', () => expect(stringify()).toBeUndefined());