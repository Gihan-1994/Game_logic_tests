export abstract class HeroBase {
    protected constructor(public name: string, public health: number, public damage: number) {
    }
    attack(target: HeroBase) {
        target.health -= this.damage;
    }
}