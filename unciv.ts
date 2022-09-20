import { existsSync, mkdirSync } from "fs";
import { join } from "path";
import { emitter, Registry } from "./api/Registry";

export function Unciv(dataGen: () => void) {
	dataGen();
	emitter.emit("preload");
	emitter.emit('write-json');
}

export * from "./api/Belief";
export * from "./api/Building";
export * from "./api/Leader";
export * from "./api/Nation";
export * from "./api/Unique";
export * from "./api/UnitType";
export * from "./api/VictoryType";
