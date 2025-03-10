import { TeamMember } from "./Member";
import { Roster } from "./Roster";

const mario = new TeamMember("Mario", 1, "Leader");
const maria = new TeamMember("Maria", 2, "Mother");
const mariarosa = new TeamMember("Mariarosa", 3, "Wife");

const roster = new Roster("Lazzari");
roster.add(mario);
roster.add(maria);
roster.add(mariarosa);

roster.printMemberInfo();
