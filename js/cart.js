const cartList = document.querySelector('.cart-list');

// add function to display cart
function showCart (){
    const products = JSON.parse(localStorage.getItem('cart'));
    console.log(products);
    //cartList.innerHTML += ``
}

showCart();