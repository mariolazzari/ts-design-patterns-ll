import { Animal } from "./Animal";
import { Dog } from "./Dog";
import { Employee } from "./Employee";
import { Owl } from "./Owl";
import { Person } from "./Person";

// classes
const person: Person = new Person("Mario");
console.log(person.greet());

// inheritance
const dog: Dog = new Dog();
dog.bark();
dog.move();

// encapsulation
const emp: Employee = new Employee("Mario", 1);
const empDetails = emp.showDetails();
// emo.jobCode -> error
console.log(empDetails);

// polymorphism
const owl: Animal = new Owl();
owl.move();
