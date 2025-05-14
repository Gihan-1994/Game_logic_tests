
import {Archer} from "../../game_logics/heros/archer";
import {Knight} from "../../game_logics/heros/knight";

describe('GameLogic test', () => {
    test('hero can attack each other', () => {
        const archer = new Archer('robin_hood');
        const knight = new Knight('lancelot',40);
        archer.attack(knight);
        expect(knight.health).toEqual(13);
    })

});

jest.mock('../../game_logics/heros/knight')