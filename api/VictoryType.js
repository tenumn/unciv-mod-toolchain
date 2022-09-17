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
exports.VictoryType = void 0;
var Registry_1 = require("./Registry");
var VictoryType = /** @class */ (function (_super) {
    __extends(VictoryType, _super);
    function VictoryType(name) {
        var _this = _super.call(this, "VictoryTypes") || this;
        _this.put("name", name);
        return _this;
    }
    /**
     * 设置胜利介绍
     * @param text
     * @returns
     */
    VictoryType.prototype.setVictoryIntro = function (text) {
        this.put("victoryScreenHeader", text);
        return this;
    };
    /**
     * 设置胜利条件
     * @param part
     * @returns
     */
    VictoryType.prototype.milestones = function () {
        var part = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            part[_i] = arguments[_i];
        }
        this.put("milestones", part);
        return this;
    };
    /**
     * 设置胜利信息
     * @param text
     * @returns
     */
    VictoryType.prototype.setVictoryText = function (text) {
        this.put("victoryString", text);
        return this;
    };
    /**
     * 设置失败信息
     * @param text
     * @returns
     */
    VictoryType.prototype.setDefeatText = function (text) {
        this.put("defeatString", text);
        return this;
    };
    /**
     * 是否在胜利选项中显示
     * @param isHidden
     * @returns
     */
    VictoryType.prototype.hiddenInVictoryScreen = function (isHidden) {
        this.put("hiddenInVictoryScreen", isHidden);
        return this;
    };
    return VictoryType;
}(Registry_1.Registry));
exports.VictoryType = VictoryType;
