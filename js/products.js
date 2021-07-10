const products = document.querySelector('.product-data');
const productPrice = document.querySelector('.product-price');

// putting the data about the opened url into a variable
const url = document.location.pathname.split('/');

const productNumArr = url[2].split('.');
const productNum = productNumArr[0];

// reading product data from local storage
const data = JSON.parse(localStorage.getItem('product'));

// comparing the product number from url with the data read from local storage to display data about product
data['data'].map(product => {
    if(product._id === productNum){
        //console.log(product.image);
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
        productPrice.innerHTML = `<p>Product price is: ${product.price}$</p>`;
    }
});

const buyProductBtn = document.querySelector('.buyProduct');
const itemAdded = document.querySelector('.item-added');

buyProductBtn.addEventListener('click', addToCart);

// TODO: needs to be added to be able to add more than one items and not to overwrite the previous item
// put objects to an array before adding them to localStorage, need to rework cart and other things then
function addToCart(){
    // function for adding a product to cart
    console.log('addToCart if');
    //console.log(localStorage.getItem('cart'));
    if(localStorage.getItem('cart') !== null)
    {
        data['data'].map(product =>{
            if(product._id === productNum){
                localStorage.setItem('cart', JSON.stringify(product));
            }
        });
        itemAdded.innerHTML = `<p>Item added</p>`;
    }
    else if(localStorage.getItem('cart')){
        console.log('addToCart else');
        data['data'].map(product =>{
            if(product._id === productNum){
                localStorage.setItem('cart', JSON.stringify(product));
            }
        });
        itemAdded.innerHTML = `<p>Item added</p>`;
    }
}