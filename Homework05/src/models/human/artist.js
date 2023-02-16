import Human from "./human.js";

export default class Artist extends Human {
  constructor(name, age, gender) {
    super(name, age, gender);

    this.paints = true;
    this.lovesNature = true;
    this.numberOfBrushes = 20;
    this.salary = 10000;
    this.typeOfPaintings = "Painterly";
  }
}
