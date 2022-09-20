"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = exports.emitter = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const events_1 = require("events");
exports.emitter = new events_1.EventEmitter();
var _local = {};
class Registry {
    constructor(name = "noWrite") {
        this._json = {};
        this._name = name;
        exports.emitter.on("preload", () => {
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
}
exports.Registry = Registry;
exports.emitter.on("write-json", () => {
    let _path = (0, path_1.join)(__dirname, "..", "..", "..", "jsons");
    if (!(0, fs_1.existsSync)(_path))
        (0, fs_1.mkdirSync)(_path);
    for (let name in _local) {
        if (name != "noWrite") {
            let _json = JSON.stringify(_local[name], null, 4);
            (0, fs_1.writeFileSync)(`${_path}/${name}.json`, _json);
        }
    }
});
