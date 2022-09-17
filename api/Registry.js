"use strict";
exports.__esModule = true;
exports.Registry = void 0;
var Registry = /** @class */ (function () {
    function Registry(name) {
        this._json = {};
        this._name = name;
    }
    Registry.prototype.put = function (name, data) {
        this._json[name] = data;
        return this;
    };
    Registry.prototype.get = function (name) {
        return typeof name == "string" ? this._json[name] : this._json;
    };
    return Registry;
}());
exports.Registry = Registry;
