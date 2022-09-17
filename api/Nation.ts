import { Registry } from "./Registry";
import { Leader } from "./Leader";

export class NationColor extends Registry {
	constructor() {
		super("noWrite");
	}

	/**
	 * 外色
	 * @param rgb
	 * @returns
	 */
	public outer(r: number, g: number, b: number): NationColor {
		this.put("outerColor", [r, g, b]);
		return this;
	}

	/**
	 * 内色
	 * @param rgb
	 * @returns
	 */
	public inner(r: number, g: number, b: number): NationColor {
		this.put("innerColor", [r, g, b]);
		return this;
	}
}

export class Nation extends Registry {
	constructor(name: string, leader: Leader) {
		super("Nations");
		this.put("name", name);
		let json = leader.get();
		for (let i in json) this.put(i, json[i]);
	}

	/**
	 * 种族
	 * @param adjective
	 * @returns
	 */
	public adjective(...adjective: string[]): Nation {
		this.put("adjective", adjective);
		return this;
	}

	/**
	 * 设置颜色
	 * @param color
	 */
	public setColor(color: NationColor): Nation {
		this.put("outerColor", color.get("outerColor"));
		this.put("innerColor", color.get("innerColor"));
		return this;
	}

	/**
	 * 添加城市
	 * @param citie
	 */
	public addCitie(...citie: string[]): Nation {
		let cities: string[] = this.get("cities") || [];
		cities.push(...citie);
		this.put("adjective", cities);
		return this;
	}
}
