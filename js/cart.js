const cartList = document.querySelector('.cart-list');

// add function to display cart
function showCart (){
    const products = JSON.parse(localStorage.getItem('cart'));
    products.map(item =>{
        cartList.innerHTML += `
        <ul>
            <li>Product name: ${item.name}</li>
            <li><img src="${item.image}" width="75" height="125"></li>
            <li>${item.price}$</li>
            <li>Number of items in stock: ${item.countInStock}</li>
        </ul>
        `;
    });
    
}

showCart();