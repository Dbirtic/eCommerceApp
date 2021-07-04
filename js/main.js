const productList = document.getElementById("product-list");
// menu code
const menu = document.querySelector('.menu');

menu.onclick = () =>{
    if(menu.classList.contains('on')){
        menu.classList.remove('on');
        menu.children[1].style.display = 'none';
        
    }
    else if(!menu.classList.contains('on')){
        menu.classList.add('on');
        menu.children[1].style.display = 'block';
    }
}

// TODO:  create a function which will create a review card once it's submited using the submit button -> this can also be done in the products js file
function addReview(){
    // stubbed function for review
}

// function which will display products onto page with their info
// this function should be in a seperate js file so that it don't create errors on other pages
const showProducts = async () =>{
    const res = await fetch('../data/data.json');
    const data = await res.json();

    
    if(data.length > 0){
        // if this part isn't needed then it can be commented and removed later
        data.map(info =>{
            const product = JSON.parse(localStorage.getItem('product'));
            if(product["product"] === null){
                localStorage.setItem('product', JSON.stringify({info}));
            }
            else if(product["product"] !== info){
                localStorage.setItem('product', JSON.stringify({info}));
            }
        });

        // saving data from data.json into the localStorage
        localStorage.setItem('product', JSON.stringify({data}));

        const html = data.map(info =>`
        <div class="products">
            <ul>
                <li>Name: ${info.name}</li>
                <li>Category: ${info.category}</li>
                <li><a href="/products/${info._id}.html"><img src="${info.image}" width="100" height="200"></a></li>
                <li>Price: ${info.price}$</li>
                <li>${info.brand}</li>
            </ul>
        </div>
        `).join('');

        if(productList !== null)
            productList.innerHTML = html;
        else console.log("product list is empty, not a page with product list element id");
    }
}

showProducts();