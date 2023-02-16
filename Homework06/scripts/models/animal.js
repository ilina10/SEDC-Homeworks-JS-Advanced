export default class Animal {
  constructor(name, type, age, size) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.size = size;
    this.isEaten = false;
  }
  eat(animal) {
    if (animal instanceof Animal && this.type == "herbivore") {
      console.log(`${this.name} is herbivore and does not eat other animals`);
    } else if (animal instanceof Animal && this.type != "herbivore") {
      this.isEaten = true;
      console.log(`${this.name} ate the ${animal.name}.`);
    } else if (animal.size > this.size) {
      console.log(
        `${this.name} tried to eat the ${animal.name} but it was too large.`
      );
    }
  }
}
