"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Building = void 0;
const Leader_1 = require("./Leader");
const Registry_1 = require("./Registry");
class Building extends Registry_1.Registry {
    /**
     * 注册建筑
     * @param name
     */
    constructor(name) {
        super("Buildings");
        this.put("name", name);
    }
    /**
     * 生产力消耗
     * @param cost
     * @returns
     */
    cost(cost) {
        this.put("cost", cost);
        return this;
    }
    /**
     * 文明独特建筑
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
    /**
     * 是否是奇观
     * @param isWonder
     * @param isNational
     * @returns
     */
    isWonder(isWonder, isNational) {
        if (typeof isNational == "boolean") {
            this.put("isNationalWonder", isNational);
            return this;
        }
        this.put("isWonder", isWonder);
        return this;
    }
    /**
     * 前置建筑
     */
    required(building) {
        if (building instanceof Building) {
            this.required(building.get("name"));
        }
        else {
            this.put("requiredBuilding", building);
        }
        return this;
    }
}
exports.Building = Building;
