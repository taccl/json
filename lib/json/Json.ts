import {
	TypeJson,
	JsonType
} from './Type';
const js = JSON.stringify;
const jp = JSON.parse;
const oe = Object.entries;
const fe = Object.fromEntries;
export class Json implements TypeJson {
	[name: string]: |
	string |
	number |
	bigint |
	boolean |
	Function |
	JsonType |
	JsonType[] |
	Buffer;

	constructor (json: JsonType) {
		oe(json).forEach(([k, v]) => {
			this[k] = v;
		});
	}

	from (json: JsonType): JsonType {
		oe(json).forEach(([k, v]) => {
			this[k] = v;
		});
		return this;
	}

	map (callback: Function): any {
		const _oe: any = oe(this);
		const _oea: any = _oe.map((entry: any) => callback(entry));
		const _fe: any = fe(_oea);
		return _fe;
	}

	toJson () {
		return jp(js(this));
	}

	toString () {
		return js(this, null, 2);
	}
}
