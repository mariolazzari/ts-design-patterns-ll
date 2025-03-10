import { Roster } from "./Aggregator";
import { TeamMember } from "./TeamMember";

const mario = new TeamMember("Mario", 1, "Leader");
const maria = new TeamMember("Maria", 2, "Mother");
const mariarosa = new TeamMember("Mariarosa", 3, "Wife");

const roster = new Roster([mario, maria, mariarosa]);
const iterator = roster.getIterator();

while (iterator.hasNext()) {
  iterator.next().printMemberInfo();
}
