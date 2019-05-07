
var btn1 = document.getElementById("btn1");
var myH1;
var h1;

btn1.addEventListener("click", () => {
        if(document.getElementById("h11")){
            h1.remove();
        }else{
            myH1 = document.querySelector("#root"); //pobiera docelowe miejsce elementu
            h1 = document.createElement("h1");     //tworzy element
           h1.id = "h11";                               //nadaje id elementowi
           myH1.appendChild(h1);                         //wstawia element do drzewa dokumentu DOM
        }
});


