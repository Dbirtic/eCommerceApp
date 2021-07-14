const cartList = document.querySelector('.cart-list');

// add function to display cart
function showCart (){
    const products = JSON.parse(localStorage.getItem('cart'));
    products.map(item =>{
        cartList.innerHTML += `
        <tr>
            <td>Product name: ${item.name}</td>
            <td><img src="${item.image}" width="75" height="125"></td>
            <td>${item.price}$</td>
            <td>Number of items in stock: ${item.countInStock}</td>
        </tr>
        `;
    });
    
}

showCart();