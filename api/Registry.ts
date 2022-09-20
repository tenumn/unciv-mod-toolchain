import { join } from "path";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { EventEmitter } from "events";

export var emitter = new EventEmitter();

var _local: { [key: string]: any } = {};

export class Registry {
	constructor(name: string = "noWrite") {
		this._name = name;
		emitter.on("preload", () => {
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
}

emitter.on("write-json", () => {
	let _path = join(__dirname, "..", "..", "..", "jsons");
	if (!existsSync(_path)) mkdirSync(_path);
	for (let name in _local) {
		if (name != "noWrite") {
			let _json = JSON.stringify(_local[name], null, 4);
			writeFileSync(`${_path}/${name}.json`, _json);
		}
	}
});
