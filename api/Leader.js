"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leader = void 0;
const Registry_1 = require("./Registry");
const VictoryType_1 = require("./VictoryType");
class Leader extends Registry_1.Registry {
    constructor(name, preVictoryType) {
        super("noWrite");
        this.put("leaderName", name).put("preferredVictoryType", preVictoryType instanceof VictoryType_1.VictoryType
            ? preVictoryType.get("name")
            : preVictoryType);
    }
    /**
     * @zh
     * 设置启动介绍
     * @param text1
     * @param text2
     * @returns
     */
    setStartIntro(text1, text2) {
        this.put("startIntroPart1", text1).put("startIntroPart2", text2);
        return this;
    }
    /**
     * @zh
     * 宣战信息
     * @param text
     * @returns
     */
    setDeclaringWarText(text) {
        this.put("declaringWar", text);
        return this;
    }
    /**
     * @zh
     * 攻击信息
     * @param text
     * @returns
     */
    setDttackedText(text) {
        this.put("attacked", text);
        return this;
    }
    /**
     * @zh
     * 击败信息
     * @param text
     * @returns
     */
    setDefeatedText(text) {
        this.put("defeated", text);
        return this;
    }
    /**
     * @zh
     * 介绍信息
     * @param text
     * @returns
     */
    setIntro(text) {
        this.put("introduction", text);
        return this;
    }
    /**
     * @zh
     * 设置问候信息
     * @param text
     * @returns
     */
    setHelloText(text = {}) {
        if (text.neutral)
            this.put("neutralHello", text);
        if (text.hate)
            this.put("hateHello", text);
        return this;
    }
    /**
     * @zh
     * 贸易请求
     * @param text
     * @returns
     */
    setTradeRequestText(text) {
        this.put("tradeRequest", text);
        return this;
    }
    /**
     * @zh
     * 添加特质
     * @param unique
     * @returns
     */
    unique(unique) {
        this.put("uniqueName", unique.get("uniqueName")).put("uniques", unique.get("uniques"));
        return this;
    }
}
exports.Leader = Leader;
