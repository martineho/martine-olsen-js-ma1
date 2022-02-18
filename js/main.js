import { getProducts } from "./ui/getProducts.js";
import { renderProducts } from "./ui/renderProducts.js";
import { filterProducts } from "./ui/filterProducts.js";

const productContainer = document.querySelector(".product-container");

async function main() {
    const products = await getProducts();

    productContainer.innerHTML = "";  

    renderProducts(products);
    
    const search = document.querySelector(".search__form__input")
    search.onkeyup = function (event) {
       const filteredProducts = filterProducts(products);
       renderProducts(filteredProducts);
    }
  }
  main();



