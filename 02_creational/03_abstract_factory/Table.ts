export abstract class Table {
  abstract eatOn(): void;
}

export class ModernTable extends Table {
  eatOn(): void {
    console.log("Sitting on a modern table");
  }
}

export class VictorianTable extends Table {
  eatOn(): void {
    console.log("Sitting on a victorian table");
  }
}
