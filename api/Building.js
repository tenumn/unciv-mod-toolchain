"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Building = void 0;
var Leader_1 = require("./Leader");
var Registry_1 = require("./Registry");
var Building = /** @class */ (function (_super) {
    __extends(Building, _super);
    /**
     * 注册建筑
     * @param name
     */
    function Building(name) {
        var _this = _super.call(this, "Buildings") || this;
        _this.put("name", name);
        return _this;
    }
    /**
     * 生产力消耗
     * @param cost
     * @returns
     */
    Building.prototype.cost = function (cost) {
        this.put("cost", cost);
        return this;
    };
    /**
     * 文明独特建筑
     * @param leader
     */
    Building.prototype.uniqueTo = function (leader) {
        if (leader instanceof Leader_1.Leader) {
            this.uniqueTo(leader.get("name"));
        }
        else {
            this.put("uniqueTo", leader);
        }
        return this;
    };
    /**
     * 是否是奇观
     * @param isWonder
     * @param isNational
     * @returns
     */
    Building.prototype.isWonder = function (isWonder, isNational) {
        if (typeof isNational == "boolean") {
            this.put("isNationalWonder", isNational);
            return this;
        }
        this.put("isWonder", isWonder);
        return this;
    };
    /**
     * 前置建筑
     */
    Building.prototype.required = function (building) {
        if (building instanceof Building) {
            this.required(building.get("name"));
        }
        else {
            this.put("requiredBuilding", building);
        }
        return this;
    };
    return Building;
}(Registry_1.Registry));
exports.Building = Building;
