const getStarships = () => {
  let starshipsContent = document.querySelector(".content");
  async function fetchProducts(url) {
    let data = await fetch(url);
    let result = await data.json();
    console.log(result);
    for (let i = 0; i < result.results.length; i++) {
      starshipsContent.innerHTML += `<div class="starshipsCards">
                <div class="singleStarshipCard">
                  <h2><b>Name: ${result.results[i].name}</b></h2>
                  <h3>Model: ${result.results[i].model}</h3>
                  <h3>Hyperdrive rating: ${result.results[i].hyperdrive_rating}</h3>
                  <h3>Lenght: ${result.results[i].length}</h3>
                  <button>(more starship info)</button>
                  </div>
                  </div>`;
    }
  }
  fetchProducts("https://swapi.dev/api/starships");
};
export default getStarships;
