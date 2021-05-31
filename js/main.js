const searchData = async () =>{
    const res = await fetch('../data/data.js');
    const data = await res.json();

    console.log(data);
}

searchData();