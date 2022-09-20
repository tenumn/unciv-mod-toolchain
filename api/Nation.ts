import { Registry } from "./Registry";
import { Leader } from "./Leader";

export class NationColor extends Registry {
	constructor() {
		super("noWrite");
	}

	/**
	 * @zh
	 * 外色
	 * @param rgb
	 * @returns
	 */
	public outer(r: number, g: number, b: number): NationColor {
		this.put("outerColor", [r, g, b]);
		return this;
	}

	/**
	 * @zh
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
	 * @zh
	 * 种族
	 * @param adjective
	 * @returns
	 */
	public adjective(...adjective: string[]): Nation {
		let adjectives: string[] = this.get("adjective") || [];
		adjectives.push(...adjective);
		this.put("adjective", adjectives);
		return this;
	}

	/**
	 * @zh
	 * 设置颜色
	 * @param color
	 */
	public setColor(color: NationColor): Nation {
		this.put("outerColor", color.get("outerColor"));
		this.put("innerColor", color.get("innerColor"));
		return this;
	}

	/**
	 * @zh
	 * 添加城市名称
	 * @param citie
	 */
	public addCitieName(...citie: string[]): Nation {
		let _data: string[] = this.get("cities") || [];
		_data.push(...citie);
		this.put("cities", _data);
		return this;
	}

	/**
	 * @zh
	 * 添加间谍名称
	 * @param spy 
	 * @returns 
	 */
	public addSpyName(...spy: string[]): Nation {
		let _data: string[] = this.get("spyNames") || [];
		_data.push(...spy);
		this.put("spyNames", _data);
		return this;
	}
}
