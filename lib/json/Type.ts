
export type JsonType = {
	[name: string]: |
	string |
	JsonType |
	JsonType[] |
	number |
	boolean |
	bigint |
	Buffer |
	Function;
}
export type JsonTypeFunction = {
	readonly toString: () => string;
	readonly map: (callbackfn: Function) => JsonType;
	readonly from: (json:JsonType) => JsonType;
}
export type TypeJson = JsonType & JsonTypeFunction;
export type JsonStringType = {
	readonly toJson: () => JsonType;
};
