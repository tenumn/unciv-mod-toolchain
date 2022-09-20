import { Leader } from "./Leader";
import { Registry } from "./Registry";

export class Building extends Registry {
	/**
	 * @zh
	 * 注册建筑
	 * @param name
	 */
	constructor(name: string) {
		super("Buildings");
		this.put("name", name);
	}

	/**
	 * @zh
	 * 生产力消耗
	 * @param cost
	 * @returns
	 */
	public cost(cost: number): Building {
		this.put("cost", cost);
		return this;
	}

	/**
	 * @zh
	 * 单一文明专属
	 * @param leader
	 */
	public uniqueTo(leader: Leader | string): Building {
		if (leader instanceof Leader) {
			this.uniqueTo(leader.get("name"));
		} else {
			this.put("uniqueTo", leader);
		}
		return this;
	}

	/**
	 * @zh
	 * 是否是奇观
	 * @param isWonder
	 * @param isNational
	 * @returns
	 */
	public isWonder(isWonder: boolean, isNational?: boolean): Building {
		if (typeof isNational == "boolean") {
			this.put("isNationalWonder", isNational);
			return this;
		}
		this.put("isWonder", isWonder);
		return this;
	}

	/**
	 * @zh
	 * 前置建筑
	 */
	public required(building: Building | string): Building {
		if (building instanceof Building) {
			this.required(building.get("name"));
		} else {
			this.put("requiredBuilding", building);
		}
		return this;
	}
}
