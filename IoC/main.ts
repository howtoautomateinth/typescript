import "reflect-metadata"
import getDecorators from "inversify-inject-decorators";
import { Container, injectable, tagged, named } from "inversify";
import { Animal } from "./animal"
import { Cat } from "./cat"

let container = new Container();
let { lazyInject } = getDecorators(container);
let TYPES = { Animal: "Animal" };

class Warrior {
    @lazyInject(TYPES.Animal)
    public weapon!: Animal;
    public bark(): string {
        return this.weapon.bark();
    }
}
 
container.bind<Animal>(TYPES.Animal).to(Cat);
 
let myCat = new Cat();
console.log(myCat.bark());