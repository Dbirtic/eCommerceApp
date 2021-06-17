const products = document.querySelector('.product-data');

const url = document.location.pathname.split('/');

const productNumArr = url[2].split('.');
const productNum = productNumArr[0];

console.log(productNum);
// TO DO: use map function and compare the data with the product number to display it's data
// data can be also taken from the localStorage

const data = JSON.parse(localStorage.getItem('product'));

console.log("data: "+data);

console.log("data[0]: " + data[0]);

products.innerHTML = `<h1>Subject to Change</h1>`;