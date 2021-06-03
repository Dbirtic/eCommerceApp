const productList = document.getElementById("product-list");

// function which will display products onto page with their info
// work in progress though
const searchData = async () =>{
    const res = await fetch('../data/data.json');
    const data = await res.json();

    console.log(typeof(data));
    console.log(data.length);

    if(data.length > 0){
        const html = data.map(info => `
        <div class="products">
            <ul>
                <li>Name: ${info.name}</li>
                <li>Category: ${info.category}</li>
                <li><img src="${info.image}" width="100" height="200"></li>
                <li>Price: ${info.price}$</li>
                <li>${info.brand}</li>
            </ul>
        </div>
        `).join('');

        productList.innerHTML = html;
    }
}

searchData();