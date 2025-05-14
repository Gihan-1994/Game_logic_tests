import {Archer} from "../../../game_logics/heros/archer";
import {Knight} from "../../../game_logics/heros/knight";
import {Ninja} from "../../../game_logics/heros/Ninja";

//mock Knight
jest.mock('../../../game_logics/heros/knight', () => ({
    Knight: jest.fn().mockImplementation(() => ({
        name: 'lancelot',
        health: 200,
        damage: 15,
        defend: jest.fn(),
    }))
}));

describe('Ninja fight with Knight test', () => {
    let ninja: Ninja;
    let mock_Knight: jest.Mocked<Knight>;

    beforeEach(()=>{
       ninja = new Ninja('robin_hood');
        mock_Knight =new Knight ('lancelot',40) as jest.Mocked<Knight>;
    });

    test('Ninja perform special attack', () => {
        //expect(mock_Knight.health).toBe(200);
        ninja.assasinate(mock_Knight);
        expect(mock_Knight.health).toEqual(75);
        expect(ninja.health).toEqual(110);
    })

    test('Ninja performs evade',() => {
        ninja.evade();
        console.log(ninja.health);
        expect(ninja.health).toEqual(115);
    })
});