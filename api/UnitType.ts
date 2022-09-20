import { Registry } from "./Registry";
import { Unique } from "./Unique";

export declare type MoveType = "Air" | "Land" | "Water";

export class UnitType extends Registry {
	constructor(name: string) {
		super("UnitTypes");
		this.put("name", name);
		this.movement("Air");
	}

	/**
	 * @zh
	 * 移动类型
	 * @param type
	 * @returns
	 */
	public movement(type: MoveType): UnitType {
		this.put("movementType", type);
		return this;
	}

	/**
	 * @zh
	 * 添加特质
	 * @param unique
	 * @returns
	 */
	public unique(unique: Unique): UnitType {
		this.put("uniques", unique.get("uniques"));
		return this;
	}
}
