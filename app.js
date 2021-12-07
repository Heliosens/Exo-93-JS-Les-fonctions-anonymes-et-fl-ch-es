let alrt = document.getElementById('alert');

let somme = document.getElementById('somme');

alrt.addEventListener('click', ()=> alert("Hello world"));

somme.addEventListener('click', ()=>{
    let newDiv = document.createElement('div');
    newDiv.innerHTML = (5 + 6).toString();
    document.body.appendChild(newDiv);
})

alrt.addEventListener('mouseenter', ()=> alrt.style.backgroundColor = "white");
alrt.addEventListener('mouseleave', ()=> alrt.style.backgroundColor = "grey");
alrt.addEventListener('mousedown', ()=> alrt.style.backgroundColor = "green");

somme.addEventListener('mouseenter', ()=> somme.style.backgroundColor = "blue");
somme.addEventListener('mouseleave', ()=> somme.style.color = "white");
somme.addEventListener('mousedown', ()=> somme.style.backgroundColor = "red");

