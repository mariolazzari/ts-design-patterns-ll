// abstract
export abstract class AEmployee {
  // private jobCode: number;
  // public name: string;
  public abstract showDetails(): string;

  // constructor(name: string, jobCode: number) {
  //   this.name = name;
  //   this.jobCode = jobCode;
  // }

  constructor(private name: string, public jobCode: number) {}
}
