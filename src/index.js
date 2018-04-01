import * as QuarterUtils from './quarter';

const AwesomeDate = {
    ...QuarterUtils
}

export function install(Base) {
    let f;
    for(f in AwesomeDate) {
        Base.prototype[f] = AwesomeDate[f];
    }
}

export default AwesomeDate;