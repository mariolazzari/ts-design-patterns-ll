import { Strategy } from "./Strategy";

export class Context {
  constructor(private strategy: Strategy) {}

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  executeStrategy(): string {
    return this.strategy.execute();
  }
}
