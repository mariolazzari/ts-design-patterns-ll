abstract class ShapeState {
  abstract draw(): void;
  abstract erase(): void;
}

export class CircleState extends ShapeState {
  draw(): void {
    console.log("Draw circle");
  }

  erase(): void {
    console.log("Erase circle");
  }
}

export class RectangleState extends ShapeState {
  draw(): void {
    console.log("Draw rectangle");
  }

  erase(): void {
    console.log("Erase rectangle");
  }
}

// context
export class Shape {
  constructor(private state: ShapeState) {}

  draw(): void {
    this.state.draw();
  }

  erase(): void {
    this.state.erase();
  }
}
