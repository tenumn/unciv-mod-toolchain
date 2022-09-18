import { join } from "path";
import { writeFileSync, existsSync, mkdirSync } from "fs";

var _local: { [key: string]: any[] } = {};

var _list: (() => void)[] = [];

export class Registry {
	constructor(name: string = "noWrite") {
		this._name = name;
		_list.push(() => {
			(_local[this._name] ??= []).push(this._json);
		});
	}

	private _name: string;

	private _json: any = {};

	public put(name: string, data: any): Registry {
		this._json[name] = data;
		return this;
	}

	public get(name?: string): any {
		return typeof name == "string" ? this._json[name] : this._json;
	}

	public static write(path: string) {
		if (!existsSync(path)) mkdirSync(path);
		for (let list of _list) list();
		for (let i in _local) {
			if (i != "noWrite") {
				let json = JSON.stringify(_local[i], null, 4);
				writeFileSync(join(path, `${i}.json`), json);
			}
		}
	}
}
