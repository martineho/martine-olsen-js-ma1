
export function renderProduct(products) {

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
}

export function renderProducts(listOfProducts) {
    listOfProducts.forEach(renderProduct);
  }