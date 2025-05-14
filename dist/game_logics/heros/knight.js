"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knight = void 0;
const herobase_1 = require("../herobase");
class Knight extends herobase_1.HeroBase {
    constructor(name) {
        super(name, 150, 10);
    }
    defend() {
        this.health += 10;
    }
}
exports.Knight = Knight;
