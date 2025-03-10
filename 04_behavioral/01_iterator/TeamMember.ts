export class TeamMember {
  constructor(
    private name: string,
    private teamNumber: number,
    private position: string
  ) {}

  printMemberInfo() {
    console.log(`${this.name} - ${this.teamNumber} - ${this.position}`);
  }
}
