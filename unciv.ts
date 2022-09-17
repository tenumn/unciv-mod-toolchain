import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { Registry } from "./api/Registry";

let _local: any = {};
let _isInit: boolean = false;

export class Unciv {
	constructor(root: string) {
		let _image = join(root, "Images");
		mkdir(_image);
		let _json = join(root, "jsons");
		mkdir(_json);

		this.dataGen();
        if(!_isInit) {
            for (let name in _local) {
                if (name != "noWrite") {
                    let json = JSON.stringify(_local[name], null, 4);
                    writeFileSync(join(_json, `${name}.json`), json);
                }
            }
            _isInit = true;
        }
	}

	public register(state: Registry): void {
		(_local[state._name] ??= []).push(state._json);
	}

	public dataGen(): void {}
}

function mkdir(path: string) {
	if (!existsSync(path)) {
		mkdirSync(path);
	}
}

export * from "./api/Belief";
export * from "./api/Building";
export * from "./api/Leader";
export * from "./api/Nation";
export * from "./api/Unique";
export * from "./api/UnitType";
export * from "./api/VictoryType";