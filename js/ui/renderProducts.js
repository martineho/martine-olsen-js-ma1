const productContainer = document.querySelector(".product-container");

export function renderProduct(product) {
   
    const productName = product.title;
    const productPrice = product.price;

    productContainer.innerHTML += `<div class="product">
                                        <h4>${productName}</h4>
                                        <div class="price">${productPrice}</div>
                                        </div>`;                                
}

export function renderProducts(listOfProducts) {
    productContainer.innerHTML = "";
    listOfProducts.forEach(renderProduct);
  }