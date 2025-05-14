"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ninja = void 0;
const herobase_1 = require("../herobase");
class Ninja extends herobase_1.HeroBase {
    constructor(name) {
        super(name, 100, 50);
    }
    evade() {
        this.health += 10;
    }
}
exports.Ninja = Ninja;
