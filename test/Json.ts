
import { isJSON, Json } from '../lib/json';
const json: Json = new Json({
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
const jsonResult = isJSON({
	a: 'b',
	c: 'd' // object
});
const bufferResult = isJSON(
	Buffer.from(
		[0xe, 0xf] // buffer
	)
);
const stringResult = isJSON(
	'gh'		// string
);
const numberResult = isJSON(
	0.123421	// number
);
const undefinedResult = isJSON(
	undefined //	undefined
);
console.log(
	new Json({
		jsonResult,
		bufferResult,
		stringResult,
		numberResult,
		undefinedResult
	}).toString()
);
