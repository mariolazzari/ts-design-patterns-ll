import { Animal } from "./Animal";

export class Owl extends Animal {
  // override
  public move() {
    super.move();
    console.log("move!");
  }
}
