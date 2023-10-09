let elem1 = document.getElementById("elem1");
elem1.style.backgroundColor="yellow";
elem1.innerHTML = "Első elem";
let item2 = document.getElementsByClassName("item2")[0];
item2.style.color="red"
item2.innerHTML="Második elem"
let hatter = document.getElementsByTagName("body")[0]
hatter.style.backgroundColor="black";
let elem3 = document.getElementById("elem3");
elem3.innerHTML ="Harmadik elem";
let elem4 = document.getElementById("elem4");
elem4.innerHTML=`<img src="pic_trulli.jpg" width="300" height="200">`
