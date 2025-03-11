import { CircleState, RectangleState, Shape } from "./Shape";

const circle = new Shape(new CircleState());
circle.draw();
circle.erase();

const rect = new Shape(new RectangleState());
rect.draw();
rect.erase();
