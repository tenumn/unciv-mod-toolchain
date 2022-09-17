import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { Registry } from "./api/Registry";

let _local: any = {};
let _isInit: boolean = false;

export class Unciv {
	constructor(root: string) {
		this.dataGen();
        if(!_isInit) {
			let _json = join(root, "jsons");
			if (!existsSync(_json)) mkdirSync(_json);

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

export * from "./api/Belief";
export * from "./api/Building";
export * from "./api/Leader";
export * from "./api/Nation";
export * from "./api/Unique";
export * from "./api/UnitType";
export * from "./api/VictoryType";