const productList = document.getElementById("product-list");

// function which will display products onto page with their info
// work in progress though
const searchData = async () =>{
    const res = await fetch('../data/data.json');
    const data = await res.json();

    //
    if(data.length > 0){
        data.map(info =>{
            const product = JSON.parse(localStorage.getItem('product'));
            console.log(product);
            console.log(product["product"]);
            if(product["product"] === null){
                localStorage.setItem('product', JSON.stringify({info}));
            }
            else if(product["product"] !== info){
                localStorage.setItem('product', JSON.stringify({info}));
            }
            // Next to do!
            // napraviti spremanje svega iz data.json-a na local storage
            console.log(info);
        });

        const html = data.map(info =>`
        <div class="products">
            <ul>
                <li>Name: ${info.name}</li>
                <li>Category: ${info.category}</li>
                <li><a href="/products/${info._id}"><img src="${info.image}" width="100" height="200"></a></li>
                <li>Price: ${info.price}$</li>
                <li>${info.brand}</li>
            </ul>
        </div>
        `).join('');

        productList.innerHTML = html;
    }
}

// not supposed to be called searchData, this name is subject to change
searchData();