"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
class Registry {
    constructor(name) {
        this._json = {};
        this._name = name;
    }
    put(name, data) {
        this._json[name] = data;
        return this;
    }
    get(name) {
        return typeof name == "string" ? this._json[name] : this._json;
    }
}
exports.Registry = Registry;
