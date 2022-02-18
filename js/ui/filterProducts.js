const search = document.querySelector(".search__form__input");

export function filterProducts (product) { 

    search.addEventListener('onkeyup', function(event) {
      const productValue = event.target.value;
  
      if (product.price <= productValue) {
        return true;
    }
}) 
}


/* const search = document.querySelector(".search__form__input");

function filterProducts (product) { 
    search.addEventListener('change', function(event) {
      const productValue = event.target.value;
  
      if (Number(product.price) <= Number(productValue)) {
        return true;
    }
  }




const search = document.querySelector(".search__form__input");

search.addEventListener('change', function(event) {
    // const filterProducts = filteredProducts(products);
    const productValue = event.target.value;

    const filterProducts = product.filter(function (product) {
     if (Number(product.price) <= Number(productValue)) {
         return true;
     } 
    }


export function filterProducts (product) {

    const search = document.querySelector(".search__form__input")

    search.onkeyup = function (event) {

        const productValue = event.target.value;

        const filteredProducts = product.filter(function (product) {
            if (Number(product.price) <= Number(productValue)) {
                return true;
            } 
}
*/