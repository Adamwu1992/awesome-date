import * as QuarterUtils from './quarter';
import * as MonthUtils from './month';
import * as TransformUtils from './transform';

function install() {
    let f;
    for(f in QuarterUtils) {
        Date.prototype[f] = AwesomeDate[f];
    }
    for(f in MonthUtils) {
        Date.prototype[f] = AwesomeDate[f];
    }
    for(f in TransformUtils) {
        Date.prototype[f] = AwesomeDate[f];
    }
}

export default {
    ...QuarterUtils,
    ...MonthUtils,
    ...TransformUtils,
    install
};