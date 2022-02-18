import { displayMessage } from "./displayMessage.js";

export async function getProducts() {

    try {
        const response = await fetch("https://fakestoreapi.com/products/");
        return await response.json();
    }
    catch (error) {
        console.log(error);
        displayMessage("error");
    }
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