import { Circle } from "./Circle";

const blue = new Circle("blue");
const red = new Circle("red");

const blueClone = blue.clone();
const redClone = red.clone();

blue.print();
blueClone.print();
red.print();
redClone.print();
