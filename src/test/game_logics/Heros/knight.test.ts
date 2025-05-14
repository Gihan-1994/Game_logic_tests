import {Archer} from "../../../game_logics/heros/archer";
import {Knight} from "../../../game_logics/heros/knight";
import {Ninja} from "../../../game_logics/heros/Ninja";



// mock archer
 jest.mock('../../../game_logics/heros/archer', () => ({
    Archer: jest.fn().mockImplementation(() => ({
        name: 'Legolas',
        health: 180,
        damage: 18,
        specialAttack: jest.fn(),
    }))
}))

describe('Knight fight with Archer test', () => {
    let knight: Knight;
    let mock_Archer: jest.Mocked<Archer>;

    beforeEach(()=>{
        knight = new Knight('Lancelot',40);
        mock_Archer =new Archer('Legolas') as jest.Mocked<Archer>;
    });
    test('Knight perform Swordsmash attack', () => {
        knight.swordSmash(mock_Archer);
        expect(mock_Archer.health).toEqual( 150);
        expect(knight.armour).toEqual(35);

    })



})