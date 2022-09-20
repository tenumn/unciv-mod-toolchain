"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = void 0;
const Leader_1 = require("./Leader");
const Registry_1 = require("./Registry");
const UnitType_1 = require("./UnitType");
class Unit extends Registry_1.Registry {
    constructor(name, type) {
        super("Units");
        this.put("name", name);
        let _type = type instanceof UnitType_1.UnitType ? type.get("name") : type;
        this.put("unitType", _type);
    }
    /**
     * @zh
     * 移动范围
     * @param move
     * @returns
     */
    movement(move) {
        this.put("movement", move);
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
    /**
     * @zh
     * 价格
     * @param cost
     * @param modifier
     * @returns
     */
    cost(cost, modifier) {
        if (typeof modifier == "number")
            this.put("hurryCostModifier", modifier);
        this.put("cost", cost);
        return this;
    }
    /**
     * @zh
     * 单一文明专属
     * @param leader
     */
    uniqueTo(leader) {
        if (leader instanceof Leader_1.Leader) {
            this.uniqueTo(leader.get("name"));
        }
        else {
            this.put("uniqueTo", leader);
        }
        return this;
    }
}
exports.Unit = Unit;
