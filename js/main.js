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

// function which will display products onto page with their info
// work in progress though
const showProducts = async () =>{
    const res = await fetch('../data/data.json');
    const data = await res.json();

    
    if(data.length > 0){
        // if this part isn't needed then it can be commented and removed later
        data.map(info =>{
            const product = JSON.parse(localStorage.getItem('product'));
            /*console.log(product);
            console.log(product["product"]);*/
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

        productList.innerHTML = html;
    }
}

showProducts();