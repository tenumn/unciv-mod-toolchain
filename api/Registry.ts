export class Registry {
	constructor(name: string) {
		this._name = name;
	}

	public _name: string;

	public _json: any = {};

	public put(name: string, data: any): Registry {
		this._json[name] = data;
		return this;
	}

	public get(name?: string): any {
		return typeof name == "string" ? this._json[name] : this._json;
	}
}
