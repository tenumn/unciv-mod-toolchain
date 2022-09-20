"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Belief = void 0;
const Registry_1 = require("./Registry");
class Belief extends Registry_1.Registry {
    /**
     * @zh
     * 注册信仰
     * @param name
     * @param type
     */
    constructor(name, type) {
        super("Beliefs");
        this.put("name", name).put("type", type);
    }
    /**
     * @zh
     * 添加特质
     * @param unique
     * @returns
     */
    unique(unique) {
        this.put("uniques", unique.get("uniques"));
        return this;
    }
}
exports.Belief = Belief;
