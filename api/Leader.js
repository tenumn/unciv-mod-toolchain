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
exports.Leader = void 0;
var Registry_1 = require("./Registry");
var VictoryType_1 = require("./VictoryType");
var Leader = /** @class */ (function (_super) {
    __extends(Leader, _super);
    function Leader(name, preVictoryType) {
        var _this = _super.call(this, "noWrite") || this;
        _this.put("leaderName", name).put("preferredVictoryType", preVictoryType instanceof VictoryType_1.VictoryType
            ? preVictoryType.get("name")
            : preVictoryType);
        return _this;
    }
    /**
     * 设置启动介绍
     * @param text1
     * @param text2
     * @returns
     */
    Leader.prototype.setStartIntro = function (text1, text2) {
        this.put("startIntroPart1", text1).put("startIntroPart2", text2);
        return this;
    };
    /**
     * 宣战信息
     * @param text
     * @returns
     */
    Leader.prototype.setDeclaringWarText = function (text) {
        this.put("declaringWar", text);
        return this;
    };
    /**
     * 攻击信息
     * @param text
     * @returns
     */
    Leader.prototype.setDttackedText = function (text) {
        this.put("attacked", text);
        return this;
    };
    /**
     * 击败信息
     * @param text
     * @returns
     */
    Leader.prototype.setDefeatedText = function (text) {
        this.put("defeated", text);
        return this;
    };
    /**
     * 介绍信息
     * @param text
     * @returns
     */
    Leader.prototype.setIntro = function (text) {
        this.put("introduction", text);
        return this;
    };
    /**
     * 设置问候信息
     * @param text
     * @returns
     */
    Leader.prototype.setHelloText = function (text) {
        if (text === void 0) { text = {}; }
        if (text.neutral)
            this.put("neutralHello", text);
        if (text.hate)
            this.put("hateHello", text);
        return this;
    };
    /**
     * 贸易请求
     * @param text
     * @returns
     */
    Leader.prototype.setTradeRequestText = function (text) {
        this.put("tradeRequest", text);
        return this;
    };
    /**
     * 添加特质
     * @param unique
     * @returns
     */
    Leader.prototype.unique = function (unique) {
        this.put("uniqueName", unique.get("uniqueName")).put("uniques", unique.get("uniques"));
        return this;
    };
    return Leader;
}(Registry_1.Registry));
exports.Leader = Leader;
