const productList = document.getElementById("product-list");

// function which will display products onto page with their info
// work in progress though
const searchData = async () =>{
    const res = await fetch('../data/data.json');
    const data = await res.json();

    if(data.length > 0){
        data.map(info =>{
            let product = localStorage.getItem('product');
            console.log(info);
            if(product === null)
            {
                // Next to do!
                // napraviti spremanje svega iz data.json-a na local storage
                
                //localStorage.setItem('product', JSON.stringify({product}));
            }
            console.log(product);
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

searchData();