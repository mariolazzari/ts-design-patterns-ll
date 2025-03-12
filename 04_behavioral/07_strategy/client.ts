import { Cat, Dog } from "./Animal";
import { Context } from "./Context";
import { SpeakStrategy } from "./Strategy";

const cat = new Cat();
const dog = new Dog();

const speak = new SpeakStrategy(cat);
const ctx = new Context(speak);
console.log(ctx.executeStrategy());
