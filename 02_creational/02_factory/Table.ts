import { Forniture } from "./Forniture";

// concrete product
export class Table extends Forniture {
  public assemble(): void {
    console.log("Assembling a table...");
  }
}
