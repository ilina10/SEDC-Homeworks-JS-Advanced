import Mammal from "../mammal.js";

export default class Human extends Mammal {
  constructor(name, age, gender) {
    super(name, age, gender);

    this.hasEMBG = true;
    this.hasConsciousness = true;
    this.hasConscience = true;
    this.numberOfHands = 2;
    this.speaks = true;
    this.NumberOfLegs = 2;
    this.hasFur = false;
    this.walkingUpright = true;
  }
  abilityToLearn(learn = "Can study different sciences") {
    console.log(learn);
  }
}
