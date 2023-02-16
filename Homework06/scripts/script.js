import Animal from "./models/animal.js";

const lion = new Animal("Simba", "carnivores", 4, 10); //10 feet
const pig = new Animal("Miss Piggy", "omnivore", 5, 6); //6 feet
const termite = new Animal("Isoptera", "herbivore", 2, 2);

lion.eat(pig);
pig.eat(lion);
lion.eat(termite);
termite.eat(pig);
