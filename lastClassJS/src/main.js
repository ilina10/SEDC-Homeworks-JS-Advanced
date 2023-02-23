import getPlanets from "./helperFunctions/getPlanets.js";
import getFilms from "./helperFunctions/getFilms.js";
import getPeople from "./helperFunctions/getPeople.js";
import getSpecies from "./helperFunctions/getSpecies.js";
import getStarships from "./helperFunctions/getStarships.js";
import getVehicle from "./helperFunctions/getVehicle.js";

let mainDiv = document.querySelector(".content");
const plantesButton = document.getElementById("planets");
const peopleButton = document.getElementById("people");
const speciesButton = document.getElementById("species");
const filmsButton = document.getElementById("films");
const starshipsButton = document.getElementById("starships");
const vehiclesButton = document.getElementById("vehicles");
// const swapiUrl = "https://swapi.dev/api/";

function clearContent() {
  mainDiv.innerHTML = "";
}

plantesButton.addEventListener("click", () => {
  getPlanets();
  clearContent();
});

peopleButton.addEventListener("click", () => {
  getPeople();
  clearContent();
});
speciesButton.addEventListener("click", () => {
  getSpecies();
  clearContent();
});
filmsButton.addEventListener("click", () => {
  getFilms();
  clearContent();
});
starshipsButton.addEventListener("click", () => {
  getStarships();
  clearContent();
});

vehiclesButton.addEventListener("click", () => {
  getVehicle();
  clearContent();
});
