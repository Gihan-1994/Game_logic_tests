
import {Archer} from "../../game_logics/heros/archer";
import {Knight} from "../../game_logics/heros/knight";

describe('GameLogic test', () => {
    test('hero can attack each other', () => {
        const archer = new Archer('robin_hood');
        const knight = new Knight('lancelot',40);
        archer.attack(knight);
        console.log(knight.health);
        expect(knight.health).toBe(170);
    })

});

