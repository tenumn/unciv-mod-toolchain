"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nation = exports.NationColor = void 0;
const Registry_1 = require("./Registry");
class NationColor extends Registry_1.Registry {
    constructor() {
        super("noWrite");
    }
    /**
     * 外色
     * @param rgb
     * @returns
     */
    outer(r, g, b) {
        this.put("outerColor", [r, g, b]);
        return this;
    }
    /**
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
     * 种族
     * @param adjective
     * @returns
     */
    adjective(...adjective) {
        this.put("adjective", adjective);
        return this;
    }
    /**
     * 设置颜色
     * @param color
     */
    setColor(color) {
        this.put("outerColor", color.get("outerColor"));
        this.put("innerColor", color.get("innerColor"));
        return this;
    }
    /**
     * 添加城市
     * @param citie
     */
    addCitie(...citie) {
        let cities = this.get("cities") || [];
        cities.push(...citie);
        this.put("adjective", cities);
        return this;
    }
}
exports.Nation = Nation;
