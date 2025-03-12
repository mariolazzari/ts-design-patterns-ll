// Object interface
export abstract class Animal {
  abstract makeSound(): string;
}

// concrete obj
export class Cat extends Animal {
  makeSound(): string {
    return "miao";
  }
}

export class Dog extends Animal {
  makeSound(): string {
    return "bau";
  }
}
