"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const archer_1 = require("../../game_logics/heros/archer");
const knight_1 = require("../../game_logics/heros/knight");
(0, node_test_1.describe)('GameLogic test', () => {
    test('hero can attack each other', () => {
        const archer = new archer_1.Archer('robin_hood');
        const knight = new knight_1.Knight('lancelot');
        archer.attack(knight);
        expect(knight.health).toEqual(120);
    });
});
