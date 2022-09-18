import { join } from "path";
import { Registry } from "./api/Registry";

export function Unciv(dataGen: () => void) {
	dataGen();
	Registry.write(join(__dirname, "..", "..", "jsons"));
}

export * from "./api/Belief";
export * from "./api/Building";
export * from "./api/Leader";
export * from "./api/Nation";
export * from "./api/Unique";
export * from "./api/UnitType";
export * from "./api/VictoryType";
