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
exports.Unique = void 0;
var Registry_1 = require("./Registry");
var Unique = /** @class */ (function (_super) {
    __extends(Unique, _super);
    function Unique(name) {
        if (name === void 0) { name = "null"; }
        var _this = _super.call(this, "noWrite") || this;
        _this.put("uniqueName", name);
        return _this;
    }
    /**
     * 添加特质
     * @param unique
     * @returns
     */
    Unique.prototype.add = function () {
        var unique = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            unique[_i] = arguments[_i];
        }
        var uniques = this.get("uniques") || [];
        uniques.push.apply(uniques, unique);
        this.put("uniques", uniques);
        return this;
    };
    return Unique;
}(Registry_1.Registry));
exports.Unique = Unique;
