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


describe('Archer fight with Knight test', () => {
    let archer: Archer;
    let mock_Knight: jest.Mocked<Knight>;

    beforeEach(()=>{
        archer = new Archer('robin_hood');
        mock_Knight =new Knight ('lancelot',40) as jest.Mocked<Knight>;
    });

    test('Archer perform special attack', () => {
        //expect(mock_Knight.health).toBe(200);
        archer.specialAttack(mock_Knight);
        expect(mock_Knight.health).toEqual( 140);
    })
});
// mock Ninja
jest.mock('../../../game_logics/heros/Ninja', () => ({
    Ninja: jest.fn().mockImplementation(() => ({
        name: 'Toshiko',
        health: 150,
        damage: 25,
        evade: jest.fn(),
    }))
}));
describe('Archer fight with Ninja test', () => {
    let archer: Archer;
    let mock_Ninja: jest.Mocked<Ninja>;

    beforeEach(()=>{
        archer = new Archer('robin_hood');
        mock_Ninja =new Ninja('Toshiko') as jest.Mocked<Ninja>;
    });

    test('Archer perform special attack', () => {

        archer.specialAttack(mock_Ninja);
        expect(mock_Ninja.health).toEqual( 90);
    })
});