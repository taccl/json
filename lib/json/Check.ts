const js = JSON.stringify;
const jp = JSON.parse;
export function isJSON (value: any) {
	return !(
		(function (v: any) {
			try {
				const _s = js(v);
				const _p = jp(_s);
				return _p;
			} catch (err: any) {
				return err;
			}
		})(value) instanceof Error
	);
}
