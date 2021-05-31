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
        <div class="card card-body mb-1">
            <h4>${info.brand}</h4>
        </div>
        `).join('');

        productList.innerHTML = html;
    }
}

searchData();