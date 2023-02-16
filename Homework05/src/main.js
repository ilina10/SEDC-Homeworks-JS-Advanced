import Horse from "./models/animal/horse.js";
import Pudlica from "./models/animal/pudlica.js";
import Sarplaninec from "./models/animal/sarplaninec.js";
import Mammal from "./models/mammal.js";
import Dog from "./models/animal/dog.js";
import Human from "./models/human/human.js";
import Worker from "./models/human/worker.js";
import Musician from "./models/human/musician.js";
import Artist from "./models/human/artist.js";

const horse1 = new Horse("Goce", 7, "Male");

horse1.die();

const sarplaninec1 = new Sarplaninec("Sarko", 5, "male");
sarplaninec1.bark();

console.log(sarplaninec1);
console.log(horse1);

const pudlica1 = new Pudlica("Lea", 5, "female");

pudlica1.printSpec();
horse1.printSpec();

const human1 = new Human("ilina", 22, "female");
human1.abilityToLearn();
console.log(human1);

const worker1 = new Worker("Mario", 35, "male");
worker1.workAbility();
console.log(worker1);

const musician1 = new Musician("Leo", 24, "Male");
musician1.playOnDrums();
console.log(musician1);

const artist1 = new Artist("Pablo", 30, "male");
console.log(artist1);
