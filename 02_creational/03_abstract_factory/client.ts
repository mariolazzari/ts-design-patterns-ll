import {
  FornitureFactory,
  ModernFornitureFactory,
  VicorianFornitureFactory,
} from "./Forniture";

function fornitureFactory(factory: FornitureFactory) {
  const chair = factory.createChair();
  const table = factory.createTable();

  chair.sitOn();
  table.eatOn();
}

// modern forniture
fornitureFactory(new ModernFornitureFactory());

// victorian forniture
fornitureFactory(new VicorianFornitureFactory());
