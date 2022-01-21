"use strict";
exports.__esModule = true;
exports.Json = void 0;
var js = JSON.stringify;
var jp = JSON.parse;
var oe = Object.entries;
var fe = Object.fromEntries;
var Json = /** @class */ (function () {
    function Json(json) {
        var _this = this;
        oe(json).forEach(function (_a) {
            var k = _a[0], v = _a[1];
            _this[k] = v;
        });
    }
    Json.prototype.from = function (json) {
        var _this = this;
        oe(json).forEach(function (_a) {
            var k = _a[0], v = _a[1];
            _this[k] = v;
        });
        return this;
    };
    Json.prototype.map = function (callback) {
        var _oe = oe(this);
        var _oea = _oe.map(function (entry) { return callback(entry); });
        var _fe = fe(_oea);
        return _fe;
    };
    Json.prototype.toJson = function () {
        return jp(js(this));
    };
    Json.prototype.toString = function () {
        return js(this, null, 2);
    };
    return Json;
}());
exports.Json = Json;
