import { Registry } from "./Registry";

export declare type NativeVictoryType =
	| "Scientific"
	| "Cultural"
	| "Domination"
	| "Diplomatic"
	| "Time";

export class VictoryType extends Registry {
	constructor(name: string) {
		super("VictoryTypes");
		this.put("name", name);
	}

	/**
	 * @zh
	 * 设置胜利介绍
	 * @param text
	 * @returns
	 */
	public setVictoryIntro(text: string): VictoryType {
		this.put("victoryScreenHeader", text);
		return this;
	}

	/**
	 * @zh
	 * 设置胜利条件
	 * @param part
	 * @returns
	 */
	public milestones(...part: string[]): VictoryType {
		this.put("milestones", part);
		return this;
	}

	/**
	 * @zh
	 * 设置胜利信息
	 * @param text
	 * @returns
	 */
	public setVictoryText(text: string): VictoryType {
		this.put("victoryString", text);
		return this;
	}

	/**
	 * @zh
	 * 设置失败信息
	 * @param text
	 * @returns
	 */
	public setDefeatText(text: string): VictoryType {
		this.put("defeatString", text);
		return this;
	}

	/**
	 * @zh
	 * 是否在胜利选项中显示
	 * @param isHidden
	 * @returns
	 */
	public isHidden(isHidden: boolean): VictoryType {
		this.put("hiddenInVictoryScreen", isHidden);
		return this;
	}
}
