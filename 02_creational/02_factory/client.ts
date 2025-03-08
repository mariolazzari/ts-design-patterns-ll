import { ConcreteFornitureFactory } from "./Factory";

function factoryClient() {
  const factory = new ConcreteFornitureFactory();

  const chair = factory.createForniture("chair");
  chair.assemble();

  const table = factory.createForniture("table");
  table.assemble();
}

factoryClient();
