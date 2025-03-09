export abstract class Chair {
  abstract sitOn(): void;
}

export class ModernChair extends Chair {
  sitOn(): void {
    console.log("Sitting on a modern chair");
  }
}

export class VictorianChair extends Chair {
  sitOn(): void {
    console.log("Sitting on a victorian chair");
  }
}
