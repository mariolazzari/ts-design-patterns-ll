// component interface
export abstract class Member {
  abstract printMemberInfo(): void;
}

// leaf
export class TeamMember extends Member {
  constructor(
    private name: string,
    private code: number,
    private position: string
  ) {
    super();
  }

  printMemberInfo(): void {
    console.log(
      `Team member info: ${this.name} - ${this.code} - ${this.position}`
    );
  }
}
