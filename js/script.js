import { searchProducts } from "./ui/filterProducts.js";

const url = "https://fakestoreapi.com/products/";
// console.log(search);

const productContainer = document.querySelector(".product-container");

async function getProducts() {

    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data)
        const products = data;

        const productContainer = document.querySelector(".product-container");

        productContainer.innerHTML = "";
    
        for(let i = 0; i < products.length; i++ ){
           
           const productName = products[i].title;
           const productPrice = products[i].price;
    
           productContainer.innerHTML += `<div class="product">
                                            <h4>${productName}</h4>
                                            <div class="price">${productPrice}</div>
                                            </div>`;
        } 
    
    searchProducts(products);

    } catch (error) {
        productContainer.innerHTML = `<div class="error">An error occured..</div>`;
    }
}

getProducts();
