"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archer = void 0;
const herobase_1 = require("../herobase");
class Archer extends herobase_1.HeroBase {
    constructor(name) {
        super(name, 100, 20);
    }
    specialAttack(target) {
        target.health -= this.damage * 2;
    }
}
exports.Archer = Archer;
