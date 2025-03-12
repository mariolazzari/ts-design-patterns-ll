import { Animal } from "./Animal";

// strategy interface
export abstract class Strategy {
  abstract execute(): string;
}

// concrete strategy
export class SpeakStrategy extends Strategy {
  constructor(private animal: Animal) {
    super();
  }

  execute(): string {
    return this.animal.makeSound();
  }
}
