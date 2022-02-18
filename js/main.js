import { getProducts } from "./ui/getProducts.js";
import { renderProducts } from "./ui/renderProducts.js";
import { filterProducts } from "./ui/filterProducts.js";

const search = document.querySelector(".search__form__input");

async function main() {
    const products = await getProducts();
    renderProducts(products);
    search.addEventListener('onchange', function(event) {
      const filteredProducts = filterProducts(products);
      renderProducts(filteredProducts);
    })
  }
  
  main();