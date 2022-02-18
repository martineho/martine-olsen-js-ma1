import { getProducts } from "./ui/getProducts.js";
import { renderProducts } from "./ui/renderProducts.js";
import { filterProducts } from "./ui/filterProducts.js";

const productContainer = document.querySelector(".product-container");

async function main() {
    const products = await getProducts();

    productContainer.innerHTML = "";  

    renderProducts(products);
    filterProducts();
  }
  main();



