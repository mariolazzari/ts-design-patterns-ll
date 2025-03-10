import { TeamMember } from "./TeamMember";

// abstract iterator
export abstract class AIterator {
  abstract next(): TeamMember;
  abstract hasNext(): boolean;
}

// concrete iterator
export class TeamMemeberIterator extends AIterator {
  index: number = 0;

  constructor(private teamMembers: TeamMember[] = []) {
    super();
  }

  hasNext(): boolean {
    return this.index < this.teamMembers.length;
  }

  next(): TeamMember {
    return this.teamMembers[this.index++];
  }
}
