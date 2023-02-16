import Human from "./human.js";

export default class Worker extends Human {
  constructor(name, age, gender) {
    super(name, age, gender);

    this.works = true;
    this.hasWorkEquipment = true;
    this.worksOnWeekends = false;
    this.workingHours = 8;
    this.hasPausa = true;
  }
  workAbility(ability = "Problem solving and decision making") {
    console.log(ability);
  }
}
