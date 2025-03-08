import { Forniture } from "./Forniture";

// concrete product
export class Chair extends Forniture {
  public assemble(): void {
    console.log("Assembling a chair...");
  }
}
