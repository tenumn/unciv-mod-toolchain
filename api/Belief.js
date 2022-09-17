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
exports.Belief = void 0;
var Registry_1 = require("./Registry");
var Belief = /** @class */ (function (_super) {
    __extends(Belief, _super);
    /**
     * 注册信仰
     * @param name
     * @param type
     */
    function Belief(name, type) {
        var _this = _super.call(this, "Beliefs") || this;
        _this.put("name", name).put("type", type);
        return _this;
    }
    /**
     * 添加特质
     * @param unique
     * @returns
     */
    Belief.prototype.unique = function (unique) {
        this.put("uniques", unique.get("uniques"));
        return this;
    };
    return Belief;
}(Registry_1.Registry));
exports.Belief = Belief;
