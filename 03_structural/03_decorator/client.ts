import { IceCream, Sprinkles, Syrup } from "./IceCream";

const iceCream = new IceCream("Choccolate");
const sprinkles = new Sprinkles(iceCream);
const syrup = new Syrup(iceCream);

sprinkles.makeIceCream();
syrup.makeIceCream();
