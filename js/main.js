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
        <div class=".products">
            <h4>${info.name}</h4>
            <h4>${info.category}</h4>
            <img src="${info.image}" width="100" height="200">
            <h4>${info.price}</h4>
            <h4>${info.brand}</h4>
        </div>
        `).join('');

        productList.innerHTML = html;
    }
}

searchData();