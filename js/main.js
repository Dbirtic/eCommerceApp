const btn = document.querySelector(".press").addEventListener('click', () =>{
    counter++;
    console.log(counter);
    document.getElementById("counter").innerHTML = counter;
});


