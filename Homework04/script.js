const maleButton = document.getElementById("mensClothingButtonName");
const femaleButton = document.getElementById("womensClothingButtonName");
const electroButton = document.getElementById("electronicsButtonName");
const jewButton = document.getElementById("jeweleryButtonName");
const products = document.querySelector(".content");

async function getAllProducts() {
  let response = await fetch("https://fakestoreapi.com/products");
  let allProducts = await response.json();
  return allProducts;
}
async function printAllProducts() {
  try {
    let docs = await getAllProducts();
    docs.forEach((product) => {
      products.innerHTML += `<div class="product">
      <img src="${product.image}" alt="" class="product-img" width=100px/>
      </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}
printAllProducts();

function clearContent() {
  products.innerHTML = "";
}

const getJeweleryProducts = () => {
  let jeweleryContent = document.querySelector(".content");
  async function fetchProducts(url) {
    let data = await fetch(url);
    let result = await data.json();
    console.log(result);
    for (let i = 0; i < result.length; i++) {
      jeweleryContent.innerHTML += `
      <div class="jewProductsDiv"
        <div class="jewProduct>
        <h2 class="product-title"><b>${result[i].title}</b></h2>
        <p class="product-description">${result[i].description}</p>
         <img src="${result[i].image}" alt="" class="product-img" width=60px/>
         
         <p class="product-price"><b>BUY NOW $:${result[i].price}</b></p>
        </div>
        </div>`;
    }
  }
  fetchProducts("https://fakestoreapi.com/products/category/jewelery");
};

const getElectronicsProducts = () => {
  let electronics = document.querySelector(".content");
  async function fetchProducts(url) {
    let data = await fetch(url);
    let result = await data.json();
    console.log(result);
    for (let i = 0; i < result.length; i++) {
      electronics.innerHTML += `
         <div class="electroProductDiv">
         <div class="electronicsProducts">
          <h2 class="product-title"><b>${result[i].title}</b></h2>
          <p class="product-description">${result[i].description}</p>
          <img src="${result[i].image}" alt="" class="product-img" width=60px/>
          <p class="product-price"><b>BUY NOW $:${result[i].price}</b></p>
         </div>
        </div>`;
    }
  }
  fetchProducts("https://fakestoreapi.com/products/category/electronics");
};

const getFemaleProducts = () => {
  let femaleProduct = document.querySelector(".content");
  async function fetchProducts(url) {
    let data = await fetch(url);
    let result = await data.json();
    console.log(result);
    for (let i = 0; i < result.length; i++) {
      femaleProduct.innerHTML += `
      <div class="womensProductDiv">
        <div class="womensProduct">
         <h2 class="product-title"><b>${result[i].title}</b></h2>
         <p class="product-description">${result[i].description}</p>
         <img src="${result[i].image}" alt="" class="product-img" width=60px/>
         <p class="product-price"><b>BUY NOW $:${result[i].price}</b></p>
        </div>
      </div>
      `;
    }
  }
  fetchProducts("https://fakestoreapi.com/products/category/women's clothing");
};

const getMaleProducts = () => {
  let maleProduct = document.querySelector(".content");
  async function fetchProducts(url) {
    let data = await fetch(url);
    let result = await data.json();
    console.log(result);
    for (let i = 0; i < result.length; i++) {
      maleProduct.innerHTML += `
      <div class="maleProductDiv">
        <div class="maleProductsDiv">
         <h2 class="product-title"><b>${result[i].title}</b></h2>
         <p class="product-description">${result[i].description}</p>
         <img src="${result[i].image}" alt="" class="product-img" width=100px/>
         <p class="product-price"><b>BUY NOW $:${result[i].price}</b></p>
        </div>
      </div>`;
    }
  }
  fetchProducts("https://fakestoreapi.com/products/category/men's clothing");
};

jewButton.addEventListener("click", () => {
  clearContent();
  getJeweleryProducts();
});

electroButton.addEventListener("click", () => {
  clearContent();
  getElectronicsProducts();
});

femaleButton.addEventListener("click", () => {
  clearContent();
  getFemaleProducts();
});

maleButton.addEventListener("click", () => {
  clearContent();
  getMaleProducts();
});
