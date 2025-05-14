import {HeroBase} from "../herobase";

export class Archer extends HeroBase {
    constructor(name :string) {
        super(name, 100, 30);
    }

    specialAttack(target: HeroBase) {
        target.health -=this.damage * 2;
    }
}