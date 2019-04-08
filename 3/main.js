//console.log("Jest super, bo działa!");

//----------------------------------------
//let btn = document.getElementById("btn"); //pobieranie elementu poprzez ID. button w HTML'u ma id="btn"
// let btn2 = document.getElementsByClassName("button");
// let btn3 = document.querySelectorAll("button");

//console.dir(btn); // wyświetla liste akcji odnośnie pobranego przycisku

//btn.style.backgroundColor = "red"; //zmiana koloru tła przycisku
//btn.innerText = "Siema";           //zmiana napisu przycisku

//----------------------------------------
//event przycisku - wypisz liczbe klikniec

// let btn = document.querySelector("button");
// let clicks = 0;
// btn.addEventListener('click', () => {
//     clicks++;
//     console.log(clicks);
// });

// let text = document.querySelector("h1");

//---------------------------
// text.addEventListener("mouseover", () => {
//     document.body.style.backgroundColor = "red";
// });

// text.addEventListener("mouseleave", () => {
//     document.body.style.backgroundColor = "white";
// });


//----------------------------------
let btn = document.querySelector("button");
let listElements = document.querySelectorAll("li");
let textSize = 16;

const biggerSize = () => {
    listElements.forEach((li) =>{
        li.style.fontSize = textSize + "px";
        textSize++;
    })
}

btn.addEventListener('click', biggerSize);