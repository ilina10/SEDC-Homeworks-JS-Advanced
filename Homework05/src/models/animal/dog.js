import Animal from "./animal.js";

export default class Dog extends Animal {
  constructor(name, age, gender) {
    super(name, age, gender);

    this.numberOfLegs = 4;
    this.barks = true;
  }
  bark(whatToBark = "bark bark bark") {
    if (!this.isAlive) return;
    if (this.name === "Sharko") {
      whatToBark = "Sharko ne lae na domasni";
    }

    console.log(whatToBark);
  }
  die(causeOfDeath = "kola go zgazilo") {
    super.die(causeOfDeath);
    this.barks = false;
  }
}
