const products = document.querySelector('.product-data');
const productPrice = document.querySelector('.product-price');

const url = document.location.pathname.split('/');

const productNumArr = url[2].split('.');
const productNum = productNumArr[0];

// TO DO: use map function and compare the data with the product number to display it's data
// data can be also taken from the localStorage

const data = JSON.parse(localStorage.getItem('product'));

/*console.log(typeof data);
console.log(data['data']); */

data['data'].map(product => {
    if(product._id === productNum){
        console.log(product.image);
        products.innerHTML = `
        <div class="products">
            <ul>
                <li>Name: ${product.name}</li>
                <li>Category: ${product.category}</li>
                <li><img src="../${product.image}" width="300" height="450"></li>
                <li>Price: ${product.price}$</li>
                <li>${product.brand}</li>
            </ul>
        </div>
        `;
        productPrice.innerHTML = `Product price is: ${product.price}$`;
    }
});

