import { Burger } from "./Burger";

export class BurgerBuilder {
  private cheese: boolean;
  private bacon: boolean;
  private lettuce: boolean;
  private tomato: boolean;

  constructor(private name: string) {}

  addCheese(): BurgerBuilder {
    this.cheese = true;
    return this;
  }

  addBacon(): BurgerBuilder {
    this.bacon = true;
    return this;
  }

  addLettuce(): BurgerBuilder {
    this.lettuce = true;
    return this;
  }

  addTomato(): BurgerBuilder {
    this.tomato = true;
    return this;
  }

  build(): Burger {
    return new Burger(
      this.name,
      this.cheese,
      this.bacon,
      this.lettuce,
      this.tomato
    );
  }
}
