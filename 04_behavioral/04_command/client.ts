import { AddPassengerCommand, MoveTrainCommand } from "./Command";
import { Invoker } from "./Invoker";
import { Train } from "./Train";

const train1 = new Train("Train One", "Station A", []);
const addPassenger = new AddPassengerCommand("Mario");
const moveTrain = new MoveTrainCommand("Riva del Garda");

const invoker = new Invoker();
invoker.setCommand(addPassenger);
invoker.executeCommand(train1);
invoker.setCommand(moveTrain);
invoker.executeCommand(train1);
