"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_inject_decorators_1 = __importDefault(require("inversify-inject-decorators"));
const inversify_1 = require("inversify");
const cat_1 = require("./cat");
let container = new inversify_1.Container();
let { lazyInject } = inversify_inject_decorators_1.default(container);
let TYPES = { Animal: "Animal" };
class Warrior {
    bark() {
        return this.weapon.bark();
    }
}
__decorate([
    lazyInject(TYPES.Animal)
], Warrior.prototype, "weapon", void 0);
container.bind(TYPES.Animal).to(cat_1.Cat);
let myCat = new cat_1.Cat();
console.log(myCat.bark());
