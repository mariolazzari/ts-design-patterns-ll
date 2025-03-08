import { BurgerBuilder } from "./BurgerBuilder";

function builderClient() {
  const allBurgerBuilder: BurgerBuilder = new BurgerBuilder("All");
  allBurgerBuilder.addBacon().addCheese().addLettuce().addTomato();

  const allBurger = allBurgerBuilder.build();
  console.log(allBurger.showDetails());

  const cheeseBurgerBuilder = new BurgerBuilder("Cheese");
  const cheeseBurder = cheeseBurgerBuilder.addCheese().addLettuce().build();
  console.log(cheeseBurder.showDetails());
}

builderClient();
