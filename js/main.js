import { getProducts } from "./ui/getProducts.js";
import { renderProducts } from "./ui/renderProducts.js";
// import { filterProducts } from "./ui/filterProducts.js";

// const search = document.querySelector(".search__form__input");
const productContainer = document.querySelector(".product-container");

async function main() {
    const products = await getProducts();
    productContainer.innerHTML = "";  
    renderProducts(products);
    //search.addEventListener('change', function(event) {
     // const filteredProducts = filterProducts(products);
     // renderProducts(filteredProducts);
   // })
  }
  
  main();