// abstract component
abstract class AIceCream {
  abstract addToppings(): string;
}

// concrete component
export class IceCream extends AIceCream {
  constructor(private flavor: string) {
    super();
  }

  addToppings(): string {
    return `2 scoops of ${this.flavor}`;
  }
}

// base decorator
abstract class IceCreamDecorator {
  abstract makeIceCream(): void;
}

// concrete decorator
export class Sprinkles extends IceCreamDecorator {
  constructor(private iceCream: AIceCream) {
    super();
  }

  addToppings() {
    const currentOrder = this.iceCream.addToppings();
    return `${currentOrder} & Rainbow Sprinkles`;
  }

  makeIceCream(): void {
    console.log("Here is your iceCream");
    console.log(this.addToppings());
    console.log();
  }
}

// concrete decorator
export class Syrup extends IceCreamDecorator {
  constructor(private iceCream: AIceCream) {
    super();
  }

  addToppings() {
    const currentOrder = this.iceCream.addToppings();
    return `${currentOrder} & Chocolate Syrup`;
  }

  makeIceCream(): void {
    console.log("Here is your iceCream");
    console.log(this.addToppings());
    console.log();
  }
}
