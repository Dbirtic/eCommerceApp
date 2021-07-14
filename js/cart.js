const cartList = document.querySelector('.cart-list');

// add function to display cart
function showCart (){
    const products = JSON.parse(localStorage.getItem('cart'));
    console.log(products);
    console.log(products[0]);
    cartList.innerHTML += `
    <ul>
        <li>Product name: ${products.name}</li>
        <li><img src="${products.image}" width="75" height="125"></li>
        <li>${products.price}$</li>
        <li>Number of items in stock: ${products.countInStock}</li>
    </ul>
    `;
}

showCart();