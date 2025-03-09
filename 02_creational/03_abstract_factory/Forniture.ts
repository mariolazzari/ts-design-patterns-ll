import { Chair, ModernChair, VictorianChair } from "./Chair";
import { ModernTable, Table, VictorianTable } from "./Table";

export abstract class FornitureFactory {
  abstract createChair(): Chair;
  abstract createTable(): Table;
}

export class ModernFornitureFactory extends FornitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }

  createTable(): Table {
    return new ModernTable();
  }
}

export class VicorianFornitureFactory extends FornitureFactory {
  createChair(): Chair {
    return new VictorianChair();
  }

  createTable(): Table {
    return new VictorianTable();
  }
}
