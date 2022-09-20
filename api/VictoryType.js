"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VictoryType = void 0;
const Registry_1 = require("./Registry");
class VictoryType extends Registry_1.Registry {
    constructor(name) {
        super("VictoryTypes");
        this.put("name", name);
    }
    /**
     * @zh
     * 设置胜利介绍
     * @param text
     * @returns
     */
    setVictoryIntro(text) {
        this.put("victoryScreenHeader", text);
        return this;
    }
    /**
     * @zh
     * 设置胜利条件
     * @param part
     * @returns
     */
    milestones(...part) {
        this.put("milestones", part);
        return this;
    }
    /**
     * @zh
     * 设置胜利信息
     * @param text
     * @returns
     */
    setVictoryText(text) {
        this.put("victoryString", text);
        return this;
    }
    /**
     * @zh
     * 设置失败信息
     * @param text
     * @returns
     */
    setDefeatText(text) {
        this.put("defeatString", text);
        return this;
    }
    /**
     * @zh
     * 是否在胜利选项中显示
     * @param isHidden
     * @returns
     */
    isHidden(isHidden) {
        this.put("hiddenInVictoryScreen", isHidden);
        return this;
    }
}
exports.VictoryType = VictoryType;
