import { Member } from "./Member";

// composite
export class Roster extends Member {
  members: Member[] = [];

  constructor(private name: string) {
    super();
  }

  add(m: Member): void {
    this.members.push(m);
  }

  printMemberInfo(): void {
    console.log(`Roster team ${this.name} memebers:`);
    this.members.forEach(m => m.printMemberInfo());
  }
}
