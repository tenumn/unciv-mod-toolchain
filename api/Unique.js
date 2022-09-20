"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unique = void 0;
const Registry_1 = require("./Registry");
class Unique extends Registry_1.Registry {
    constructor(name = "null") {
        super("noWrite");
        this.put("uniqueName", name);
    }
    /**
     * @zh
     * 添加特质
     * @param unique
     * @returns
     */
    add(...unique) {
        let uniques = this.get("uniques") || [];
        uniques.push(...unique);
        this.put("uniques", uniques);
        return this;
    }
}
exports.Unique = Unique;
