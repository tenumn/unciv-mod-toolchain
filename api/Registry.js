"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
var _local = {};
var _list = [];
class Registry {
    constructor(name = "noWrite") {
        this._json = {};
        this._name = name;
        _list.push(() => {
            var _a;
            var _b;
            ((_a = _local[_b = this._name]) !== null && _a !== void 0 ? _a : (_local[_b] = [])).push(this._json);
        });
    }
    put(name, data) {
        this._json[name] = data;
        return this;
    }
    get(name) {
        return typeof name == "string" ? this._json[name] : this._json;
    }
    static write(path) {
        if (!(0, fs_1.existsSync)(path))
            (0, fs_1.mkdirSync)(path);
        for (let list of _list)
            list();
        for (let i in _local) {
            if (i != "noWrite") {
                let json = JSON.stringify(_local[i], null, 4);
                (0, fs_1.writeFileSync)((0, path_1.join)(path, `${i}.json`), json);
            }
        }
    }
}
exports.Registry = Registry;
