import { Chair } from "./Chair";
import { Forniture } from "./Forniture";
import { Table } from "./Table";

// Factory method
abstract class FornitureFactory {
  public abstract createForniture(type: string): Forniture;
}

export class ConcreteFornitureFactory extends FornitureFactory {
  public createForniture(type: string): Forniture {
    switch (type) {
      case "chair":
        return new Chair();

      case "table":
        return new Table();

      default:
        throw new Error("Forniture type not supported");
    }
  }
}
