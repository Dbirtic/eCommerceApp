// TO DO:
// write code for paring the id from the url and if it matches with the id from the data then display that product


const products = document.querySelector('.product-data');

products.innerHTML = `<h1>Subject to Change</h1>`;

// function for parsing URL
const parseRequestURL = () =>{
    const url = document.location.hash.toLowerCase();
    console.log(url);
}
parseRequestURL();