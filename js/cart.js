const cartList = document.querySelector('.cart-list');

// add function to display cart
function showCart (){
    const products = JSON.parse(localStorage.getItem('cart'));
    console.log(products);
    cartList.innerHTML += `
    <ul>
        <li>${products.name}</li>
        <li>${products.image}</li>
        <li>${products.price}</li>
        <li>${products.countInStock}</li>
    </ul>
    `;
}

showCart();