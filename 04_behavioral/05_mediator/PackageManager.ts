import { Mediator } from "./Mediator";
import { Package } from "./Package";

// Concrete mediator
export class PackageManager extends Mediator {
  constructor(private isPacked: boolean, private packages: Package[] = []) {
    super();
  }

  canShip(pack: Package): boolean {
    if (this.isPacked) {
      this.isPacked = false;
      return true;
    }

    this.packages.push(pack);
    return false;
  }

  notify(): void {
    if (!this.isPacked) {
      this.isPacked = true;
    }

    if (this.packages.length > 0) {
      const first = this.packages[0];
      this.packages.shift();
      first.allowShipping();
    }
  }
}
