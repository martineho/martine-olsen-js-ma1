export function filterProducts (products) {

    const search = document.querySelector(".search__form__input")

    search.onkeyup = function (event) {

        const productValue = event.target.value;

        //console.log(productValue);

        const filterProducts = products.filter(function (product) {
            if (product <= productValue) {
                return true;
            } 
        
        });

    getProducts(filterProducts);
    
    };
}