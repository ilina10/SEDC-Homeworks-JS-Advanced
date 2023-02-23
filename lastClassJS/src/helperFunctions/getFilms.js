const getFilms = () => {
  let filmsContent = document.querySelector(".content");
  async function fetchProducts(url) {
    let data = await fetch(url);
    let result = await data.json();
    console.log(result);
    for (let i = 0; i < result.results.length; i++) {
      filmsContent.innerHTML += `<div class="filmsCards">
              <div class="singleMovieCard">
                <h2><b>Title: ${result.results[i].title}</b></h2>
                <h3>Release date: ${result.results[i].release_date}</h3>
                <h3>Director: ${result.results[i].director}</h3>
                <h3>Episode_id: ${result.results[i].episode_id}</h3>
                <button>(more film info)</button>
                </div>
                </div>`;
    }
  }
  fetchProducts("https://swapi.dev/api/films");
};
export default getFilms;
