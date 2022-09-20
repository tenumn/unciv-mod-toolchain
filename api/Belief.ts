import { Registry } from "./Registry";
import { Unique } from "./Unique";

export declare type BeliefType =
	| "Pantheon"
	| "Follower"
	| "Founder"
	| "Enhancer";

export class Belief extends Registry {
	/**
	 * @zh
	 * 注册信仰
	 * @param name
	 * @param type
	 */
	constructor(name: string, type: BeliefType) {
		super("Beliefs");
		this.put("name", name).put("type", type);
	}

	/**
	 * @zh
	 * 添加特质
	 * @param unique
	 * @returns
	 */
	public unique(unique: Unique): Belief {
		this.put("uniques", unique.get("uniques"));
		return this;
	}
}
