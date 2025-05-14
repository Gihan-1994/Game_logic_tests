import {HeroBase} from "../herobase";
export class Knight extends HeroBase {
    constructor(name :string ,public armour :number) {
        super(name, 200, 10);
        this.armour = 40;
    }
    defend() {
        this.health += 10;
    }
    swordSmash(target: HeroBase) {
        target.health -= this.damage * 3;
        this.armour -= 5;
    }
}