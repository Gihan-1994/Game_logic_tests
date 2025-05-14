"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroBase = void 0;
class HeroBase {
    constructor(name, health, damage) {
        this.name = name;
        this.health = health;
        this.damage = damage;
    }
    attack(target) {
        target.health -= this.damage;
    }
}
exports.HeroBase = HeroBase;
