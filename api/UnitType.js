"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitType = void 0;
const Registry_1 = require("./Registry");
class UnitType extends Registry_1.Registry {
    constructor(name) {
        super("UnitTypes");
        this.put("name", name);
        this.movement("Air");
    }
    /**
     * @zh
     * 移动类型
     * @param type
     * @returns
     */
    movement(type) {
        this.put("movementType", type);
        return this;
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
exports.UnitType = UnitType;
