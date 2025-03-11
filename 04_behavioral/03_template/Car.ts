abstract class Car {
  abstract drive(): void;

  start(): void {
    console.log("Start engine");
  }

  stop(): void {
    console.log("Stop engine");
  }

  // template method
  run(): void {
    this.start();
    this.drive();
    this.stop();
  }
}

export class Yaris extends Car {
  drive(): void {
    console.log("Drive a Yaris");
  }
}

export class Aygo extends Car {
  drive(): void {
    console.log("Drive an Aygo");
  }
}
