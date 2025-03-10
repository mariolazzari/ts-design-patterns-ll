import { AIterator, TeamMemeberIterator } from "./Iterator";
import { TeamMember } from "./TeamMember";

// abstract collection
abstract class Aggregator {
  abstract getIterator(): AIterator;
}

// concrete collection
export class Roster extends Aggregator {
  constructor(private teamMembers: TeamMember[] = []) {
    super();
  }

  getIterator(): TeamMemeberIterator {
    return new TeamMemeberIterator(this.teamMembers);
  }
}
