const getSpecies = () => {
  let speciesContent = document.querySelector(".content");
  async function fetchProducts(url) {
    let data = await fetch(url);
    let result = await data.json();
    console.log(result);
    for (let i = 0; i < result.results.length; i++) {
      speciesContent.innerHTML += `<div class="speciesCards">
                <div class="singleSpecieCard">
                  <h2><b>Name: ${result.results[i].name}</b></h2>
                  <h3>Classification: ${result.results[i].classification}</h3>
                  <h3>Language: ${result.results[i].language}</h3>
                  <h3>Designation: ${result.results[i].designation}</h3>
                  <button>(more specie info)</button>
                  </div>
                  </div>`;
    }
  }
  fetchProducts("https://swapi.dev/api/species");
};
export default getSpecies;
