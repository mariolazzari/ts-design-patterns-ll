import { Mediator } from "./Mediator";
import { Package } from "./Package";

export class UPSPackage extends Package {
  constructor(private mediator: Mediator) {
    super();
  }

  allowShipping(): void {
    if (this.mediator.canShip(this)) {
      console.log("UPS package waiting...");
    }
  }

  deliver(): void {
    console.log("Delivering UPS package");
    this.mediator.notify();
  }

  ship(): void {
    console.log("UPS package ready for shipping");
  }
}
