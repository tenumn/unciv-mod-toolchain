import { Registry } from "./Registry";

export class VictoryType extends Registry {
	constructor(name: string) {
		super("VictoryTypes");
		this.put("name", name);
	}

	/**
	 * 设置胜利介绍
	 * @param text
	 * @returns
	 */
	public setVictoryIntro(text: string): VictoryType {
		this.put("victoryScreenHeader", text);
		return this;
	}

	/**
	 * 设置胜利条件
	 * @param part
	 * @returns
	 */
	public milestones(...part: string[]): VictoryType {
		this.put("milestones", part);
		return this;
	}

	/**
	 * 设置胜利信息
	 * @param text
	 * @returns
	 */
	public setVictoryText(text: string): VictoryType {
		this.put("victoryString", text);
		return this;
	}

	/**
	 * 设置失败信息
	 * @param text
	 * @returns
	 */
	public setDefeatText(text: string): VictoryType {
		this.put("defeatString", text);
		return this;
	}

	/**
	 * 是否在胜利选项中显示
	 * @param isHidden
	 * @returns
	 */
	public isHidden(isHidden: boolean): VictoryType {
		this.put("hiddenInVictoryScreen", isHidden);
		return this;
	}
}

export namespace VictoryType {
	export const Scientific = new VictoryType('Scientific');
	export const Cultural = new VictoryType('Cultural');
	export const Domination = new VictoryType('Domination');
	export const Diplomatic = new VictoryType('Diplomatic');
	export const Time = new VictoryType('Time');
}