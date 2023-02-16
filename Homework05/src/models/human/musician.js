import Human from "./human.js";

export default class Musician extends Human {
  constructor(name, age, gender) {
    super(name, age, gender);

    this.hasEarForMusic = true;
    this.lovesMusic = true;
    this.daysOfPractice = 5;
    this.playDrums = true;
  }
  playOnDrums(play = "BUM bum BUM bum") {
    console.log(play);
  }
}
