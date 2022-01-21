"use strict";
exports.__esModule = true;
var json_1 = require("../lib/json");
var json = new json_1.Json({
    a: 'b'
});
console.log(json);
console.log(json.toString());
json.from({
    a: 'q',
    b: 'e'
});
console.log(json);
console.log(json.toString());
var jsonResult = (0, json_1.isJSON)({
    a: 'b',
    c: 'd' // object
});
var bufferResult = (0, json_1.isJSON)(Buffer.from([0xe, 0xf] // buffer
));
var stringResult = (0, json_1.isJSON)('gh' // string
);
var numberResult = (0, json_1.isJSON)(0.123421 // number
);
var undefinedResult = (0, json_1.isJSON)(undefined //	undefined
);
console.log(new json_1.Json({
    jsonResult: jsonResult,
    bufferResult: bufferResult,
    stringResult: stringResult,
    numberResult: numberResult,
    undefinedResult: undefinedResult
}).toString());
