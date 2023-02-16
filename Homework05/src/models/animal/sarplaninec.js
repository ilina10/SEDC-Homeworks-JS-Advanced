import Dog from "./dog.js";

export default class Sarplaninec extends Dog {
  constructor(name, age, gender) {
    super(name, age, gender);

    this.isShepherd = true;
    this.doesntAfraidOfBears = true;
    this.scaresWolves = true;
  }
  bark(whatToBark) {
    super.bark();
    console.log("UUGH WOLVES ARE SCARED");
  }
}
