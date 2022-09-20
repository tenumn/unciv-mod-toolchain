import { Registry } from "./Registry";

export class Unique extends Registry {
	constructor(name: string = "null") {
		super("noWrite");
		this.put("uniqueName", name);
	}

	/**
	 * @zh
	 * 添加特质
	 * @param unique
	 * @returns
	 */
	public add(...unique: string[]): Unique {
		let uniques: string[] = this.get("uniques") || [];
		uniques.push(...unique);
		this.put("uniques", uniques);
		return this;
	}
}
