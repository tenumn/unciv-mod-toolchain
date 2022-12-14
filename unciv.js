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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unciv = void 0;
const Registry_1 = require("./api/Registry");
function Unciv(dataGen) {
    dataGen();
    Registry_1.emitter.emit("preload");
    Registry_1.emitter.emit('write-json');
}
exports.Unciv = Unciv;
__exportStar(require("./api/Belief"), exports);
__exportStar(require("./api/Building"), exports);
__exportStar(require("./api/Leader"), exports);
__exportStar(require("./api/Nation"), exports);
__exportStar(require("./api/Unique"), exports);
__exportStar(require("./api/UnitType"), exports);
__exportStar(require("./api/VictoryType"), exports);
