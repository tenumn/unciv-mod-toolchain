import { Leader } from "./Leader";
import { Registry } from "./Registry";
import { Unique } from "./Unique";
import { UnitType } from "./UnitType";

export class Unit extends Registry {
	constructor(name: string, type: UnitType | string) {
		super("Units");
		this.put("name", name);
		let _type = type instanceof UnitType ? type.get("name") : type;
		this.put("unitType", _type);
	}

	/**
	 * @zh
	 * 移动范围
	 * @param move
	 * @returns
	 */
	public movement(move: number): Unit {
		this.put("movement", move);
		return this;
	}

	/**
	 * @zh
	 * 添加特质
	 * @param unique
	 * @returns
	 */
	public unique(unique: Unique): Unit {
		this.put("uniques", unique.get("uniques"));
		return this;
	}

    /**
     * @zh
     * 价格
     * @param cost 
     * @param modifier 
     * @returns 
     */
	public cost(cost: number, modifier?: number): Unit {
		if (typeof modifier == "number")
			this.put("hurryCostModifier", modifier);
		this.put("cost", cost);
		return this;
	}

	/**
	 * @zh
	 * 单一文明专属
	 * @param leader
	 */
	public uniqueTo(leader: Leader | string): Unit {
		if (leader instanceof Leader) {
			this.uniqueTo(leader.get("name"));
		} else {
			this.put("uniqueTo", leader);
		}
		return this;
	}
}
