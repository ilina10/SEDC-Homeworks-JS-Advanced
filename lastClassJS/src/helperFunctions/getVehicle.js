const getVehicle = () => {
  let vehicleContent = document.querySelector(".content");
  async function fetchProducts(url) {
    let data = await fetch(url);
    let result = await data.json();
    console.log(result);
    for (let i = 0; i < result.results.length; i++) {
      vehicleContent.innerHTML += `<div class="vehiclesCards">
                  <div class="singleVehicleCard">
                    <h2><b>Name: ${result.results[i].name}</b></h2>
                    <h3>Model: ${result.results[i].model}</h3>
                    <h3>Hyperdrive rating: ${result.results[i].hyperdrive_rating}</h3>
                    <h3>Lenght: ${result.results[i].length}</h3>
                    <button>(more vehicle info)</button>
                    </div>
                    </div>`;
    }
  }
  fetchProducts("https://swapi.dev/api/vehicles");
};
export default getVehicle;
