import {HeroBase} from "../herobase";
export class Ninja extends HeroBase {
    constructor(name :string) {
        super(name, 100, 50);
    }

    evade(){
        this.health += 15;
    }
    assasinate(target: HeroBase) {
        target.health -= this.damage * 2.5;
        this.health += 10;
    }
}
