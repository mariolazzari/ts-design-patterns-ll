export class Burger {
  constructor(
    private name: string,
    private cheese: boolean,
    private bacon: boolean,
    private lettuce: boolean,
    private tomato: boolean
  ) {}

  public showDetails(): string {
    let details = `This ${this.name} burger has: `;

    if (this.cheese) {
      details += " cheese, ";
    }

    if (this.bacon) {
      details += " bacon, ";
    }

    if (this.lettuce) {
      details += " lettuce, ";
    }

    if (this.tomato) {
      details += " tomato, ";
    }

    return details;
  }
}
