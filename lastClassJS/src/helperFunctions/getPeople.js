const getPeople = () => {
  let peopleContent = document.querySelector(".content");
  async function fetchProducts(url) {
    let data = await fetch(url);
    let result = await data.json();
    console.log(result);
    for (let i = 0; i < result.results.length; i++) {
      peopleContent.innerHTML += `<div class="peopleCards">
              <div class="singlePersonCard">
                <h2><b>Name: ${result.results[i].name}</b></h2>
                <h3>Gender: ${result.results[i].gender}</h3>
                <h3>Height: ${result.results[i].height}</h3>
                <h3>Mass: ${result.results[i].mass}</h3>
                <button>(more person info)</button>
                </div>
                </div>`;
    }
  }
  fetchProducts("https://swapi.dev/api/people");
};
export default getPeople;
