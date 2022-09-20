"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitPromotion = void 0;
const Registry_1 = require("./Registry");
const UnitType_1 = require("./UnitType");
class UnitPromotion extends Registry_1.Registry {
    constructor(name) {
        super("UnitPromotions");
        this.put("name", name);
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
    /**
     * @zh
     * 需要的前置升级类型
     * @param prerequisite
     * @returns
     */
    require(...prerequisite) {
        let _data = this.get("prerequisites") || [];
        for (let pre of prerequisite) {
            let _pre = pre instanceof UnitPromotion ? pre.get("name") : pre;
            _data.push(_pre);
        }
        this.put("prerequisites", _data);
        return this;
    }
    /**
     * @zh
     * 绑定到单位类型
     * @param unitType
     */
    bindToUnitType(...unitType) {
        let _data = this.get("unitTypes") || [];
        for (let type of unitType) {
            let _type = type instanceof UnitType_1.UnitType ? type.get("name") : type;
            _data.push(_type);
        }
        this.put("unitTypes", _data);
        return this;
    }
}
exports.UnitPromotion = UnitPromotion;
