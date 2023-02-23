const getPlanets = () => {
  let planetsContent = document.querySelector(".content");
  async function fetchProducts(url) {
    let data = await fetch(url);
    let result = await data.json();
    console.log(result);
    for (let i = 0; i < result.results.length; i++) {
      planetsContent.innerHTML += `<div class="planetsCards">
          <div class="singlePlanetCard">
            <h2><b>Planet Name: ${result.results[i].name}</b></h2>
            <h3>Climate: ${result.results[i].climate}</h3>
            <h3>Population: ${result.results[i].population}</h3>
            <h3>Gravity: ${result.results[i].gravity}</h3>
            <button class="planetName">(more planet info)</button>
            </div>
            </div>`;
    }
  }
  fetchProducts("https://swapi.dev/api/planets");
};

export default getPlanets;
