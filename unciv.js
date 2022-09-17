"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.Unciv = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var _local = {};
var _isInit = false;
var Unciv = /** @class */ (function () {
    function Unciv(root) {
        var _image = (0, path_1.join)(root, "Images");
        mkdir(_image);
        var _json = (0, path_1.join)(root, "jsons");
        mkdir(_json);
        this.dataGen();
        if (!_isInit) {
            for (var name_1 in _local) {
                if (name_1 != "noWrite") {
                    var json = JSON.stringify(_local[name_1], null, 4);
                    (0, fs_1.writeFileSync)((0, path_1.join)(_json, "".concat(name_1, ".json")), json);
                }
            }
            _isInit = true;
        }
    }
    Unciv.prototype.register = function (state) {
        var _a;
        var _b;
        ((_a = _local[_b = state._name]) !== null && _a !== void 0 ? _a : (_local[_b] = [])).push(state._json);
    };
    Unciv.prototype.dataGen = function () { };
    return Unciv;
}());
exports.Unciv = Unciv;
function mkdir(path) {
    if (!(0, fs_1.existsSync)(path)) {
        (0, fs_1.mkdirSync)(path);
    }
}
__exportStar(require("./api/Belief"), exports);
__exportStar(require("./api/Building"), exports);
__exportStar(require("./api/Leader"), exports);
__exportStar(require("./api/Nation"), exports);
__exportStar(require("./api/Unique"), exports);
__exportStar(require("./api/UnitType"), exports);
__exportStar(require("./api/VictoryType"), exports);
