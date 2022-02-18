

export function renderProduct(product) {

    const productContainer = document.querySelector(".product-container");

    productContainer.innerHTML = "";
    
    for(let i = 0; i < product.length; i++ ){
    
    const productName = product.title;
    const productPrice = product.price;

    productContainer.innerHTML += `<div class="product">
                                        <h4>${productName}</h4>
                                        <div class="price">${productPrice}</div>
                                        </div>`;
    }
}

export function renderProducts(listOfProducts) {
    listOfProducts.forEach(renderProduct);
  }