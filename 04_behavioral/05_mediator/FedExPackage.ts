import { Mediator } from "./Mediator";
import { Package } from "./Package";

export class FedExPackage extends Package {
  constructor(private mediator: Mediator) {
    super();
  }

  allowShipping(): void {
    if (this.mediator.canShip(this)) {
      console.log("FedEx package waiting...");
    }
  }

  deliver(): void {
    console.log("Delivering FedEx package");
    this.mediator.notify();
  }

  ship(): void {
    console.log("FedEx package ready for shipping");
  }
}
