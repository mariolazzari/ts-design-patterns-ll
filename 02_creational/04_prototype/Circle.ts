import { Shape } from "./Shape";

export class Circle extends Shape {
  constructor(private color: string) {
    super();
  }

  print(): void {
    console.log(`${this.color} circle`);
  }

  clone(): Shape {
    console.log("Cloning");
    this.print();

    return new Circle(this.color);
  }
}
