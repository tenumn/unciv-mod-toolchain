"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nation = exports.NationColor = void 0;
const Registry_1 = require("./Registry");
class NationColor extends Registry_1.Registry {
    constructor() {
        super("noWrite");
    }
    /**
     * @zh
     * 外色
     * @param rgb
     * @returns
     */
    outer(r, g, b) {
        this.put("outerColor", [r, g, b]);
        return this;
    }
    /**
     * @zh
     * 内色
     * @param rgb
     * @returns
     */
    inner(r, g, b) {
        this.put("innerColor", [r, g, b]);
        return this;
    }
}
exports.NationColor = NationColor;
class Nation extends Registry_1.Registry {
    constructor(name, leader) {
        super("Nations");
        this.put("name", name);
        let json = leader.get();
        for (let i in json)
            this.put(i, json[i]);
    }
    /**
     * @zh
     * 种族
     * @param adjective
     * @returns
     */
    adjective(...adjective) {
        let adjectives = this.get("adjective") || [];
        adjectives.push(...adjective);
        this.put("adjective", adjectives);
        return this;
    }
    /**
     * @zh
     * 设置颜色
     * @param color
     */
    setColor(color) {
        this.put("outerColor", color.get("outerColor"));
        this.put("innerColor", color.get("innerColor"));
        return this;
    }
    /**
     * @zh
     * 添加城市名称
     * @param citie
     */
    addCitieName(...citie) {
        let _data = this.get("cities") || [];
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
    addSpyName(...spy) {
        let _data = this.get("spyNames") || [];
        _data.push(...spy);
        this.put("spyNames", _data);
        return this;
    }
}
exports.Nation = Nation;
