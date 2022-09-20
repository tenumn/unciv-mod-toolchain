import { Registry } from "./Registry";
import { Unique } from "./Unique";
import { VictoryType } from "./VictoryType";

export interface IHelloText {
	neutral?: string;
	hate?: string;
}

export class Leader extends Registry {
	constructor(name: string, preVictoryType: VictoryType | string) {
		super("noWrite");
		this.put("leaderName", name).put(
			"preferredVictoryType",
			preVictoryType instanceof VictoryType
				? preVictoryType.get("name")
				: preVictoryType
		);
	}

	/**
	 * @zh
	 * 设置启动介绍
	 * @param text1
	 * @param text2
	 * @returns
	 */
	public setStartIntro(text1: string, text2: string): Leader {
		this.put("startIntroPart1", text1).put("startIntroPart2", text2);
		return this;
	}

	/**
	 * @zh
	 * 宣战信息
	 * @param text
	 * @returns
	 */
	public setDeclaringWarText(text: string): Leader {
		this.put("declaringWar", text);
		return this;
	}

	/**
	 * @zh
	 * 攻击信息
	 * @param text
	 * @returns
	 */
	public setDttackedText(text: string): Leader {
		this.put("attacked", text);
		return this;
	}

	/**
	 * @zh
	 * 击败信息
	 * @param text
	 * @returns
	 */
	public setDefeatedText(text: string): Leader {
		this.put("defeated", text);
		return this;
	}

	/**
	 * @zh
	 * 介绍信息
	 * @param text
	 * @returns
	 */
	public setIntro(text: string): Leader {
		this.put("introduction", text);
		return this;
	}

	/**
	 * @zh
	 * 设置问候信息
	 * @param text
	 * @returns
	 */
	public setHelloText(text: IHelloText = {}): Leader {
		if (text.neutral) this.put("neutralHello", text);
		if (text.hate) this.put("hateHello", text);
		return this;
	}

	/**
	 * @zh
	 * 贸易请求
	 * @param text
	 * @returns
	 */
	public setTradeRequestText(text: string): Leader {
		this.put("tradeRequest", text);
		return this;
	}

	/**
	 * @zh
	 * 添加特质
	 * @param unique
	 * @returns
	 */
	public unique(unique: Unique): Leader {
		this.put("uniqueName", unique.get("uniqueName")).put(
			"uniques",
			unique.get("uniques")
		);
		return this;
	}
}
