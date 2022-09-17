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
exports.Nation = exports.NationColor = void 0;
var Registry_1 = require("./Registry");
var NationColor = /** @class */ (function (_super) {
    __extends(NationColor, _super);
    function NationColor() {
        return _super.call(this, "noWrite") || this;
    }
    /**
     * 外色
     * @param rgb
     * @returns
     */
    NationColor.prototype.outer = function (r, g, b) {
        this.put("outerColor", [r, g, b]);
        return this;
    };
    /**
     * 内色
     * @param rgb
     * @returns
     */
    NationColor.prototype.inner = function (r, g, b) {
        this.put("innerColor", [r, g, b]);
        return this;
    };
    return NationColor;
}(Registry_1.Registry));
exports.NationColor = NationColor;
var Nation = /** @class */ (function (_super) {
    __extends(Nation, _super);
    function Nation(name, leader) {
        var _this = _super.call(this, "Nations") || this;
        _this.put("name", name);
        var json = leader.get();
        for (var i in json)
            _this.put(i, json[i]);
        return _this;
    }
    /**
     * 种族
     * @param adjective
     * @returns
     */
    Nation.prototype.adjective = function () {
        var adjective = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            adjective[_i] = arguments[_i];
        }
        this.put("adjective", adjective);
        return this;
    };
    /**
     * 设置颜色
     * @param color
     */
    Nation.prototype.setColor = function (color) {
        this.put("outerColor", color.get("outerColor"));
        this.put("innerColor", color.get("innerColor"));
        return this;
    };
    /**
     * 添加城市
     * @param citie
     */
    Nation.prototype.addCitie = function () {
        var citie = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            citie[_i] = arguments[_i];
        }
        var cities = this.get("cities") || [];
        cities.push.apply(cities, citie);
        this.put("adjective", cities);
        return this;
    };
    return Nation;
}(Registry_1.Registry));
exports.Nation = Nation;
