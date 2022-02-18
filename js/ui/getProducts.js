export async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products/");
    return await response.json();
  }


/*

const url = "https://fakestoreapi.com/products/";

async function getProducts() {

    const productContainer = document.querySelector(".product-container");

    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data)
        const products = data;

    } catch (error) {
        productContainer.innerHTML = `<div class="error">An error occured..</div>`;
    }
}

getProducts();*/