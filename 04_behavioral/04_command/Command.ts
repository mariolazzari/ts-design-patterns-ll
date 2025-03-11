import { Train } from "./Train";

// command interface
export abstract class Command {
  abstract execute(train: Train): void;
}

// concrete command
export class AddPassengerCommand extends Command {
  constructor(private passenger: string) {
    super();
  }

  execute(train: Train): void {
    train.passengers.push(this.passenger);
    console.log(`New passenger on board: ${this.passenger}`);
  }
}

// concrete command
export class MoveTrainCommand extends Command {
  constructor(private location: string) {
    super();
  }

  execute(train: Train): void {
    train.location = this.location;
    console.log(`Move train to: ${this.location}`);
  }
}
