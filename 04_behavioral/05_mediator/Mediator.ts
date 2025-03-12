import { Package } from "./Package";

// Mediator interface
export abstract class Mediator {
  abstract canShip(pack: Package): boolean;
  abstract notify(): void;
}
