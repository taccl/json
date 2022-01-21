"use strict";
exports.__esModule = true;
exports.isJSON = void 0;
var js = JSON.stringify;
var jp = JSON.parse;
function isJSON(value) {
    return !((function (v) {
        try {
            var _s = js(v);
            var _p = jp(_s);
            return _p;
        }
        catch (err) {
            return err;
        }
    })(value) instanceof Error);
}
exports.isJSON = isJSON;
