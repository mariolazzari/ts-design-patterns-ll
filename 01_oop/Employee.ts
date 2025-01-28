import { AEmployee } from "./AEmployee";

// encapsulation
export class Employee {
  private jobCode: number;
  public name: string;

  constructor(name: string, jobCode: number) {
    this.name = name;
    this.jobCode = jobCode;
  }

  public showDetails(): string {
    return `${this.name} has code ${this.jobCode}`;
  }
}
