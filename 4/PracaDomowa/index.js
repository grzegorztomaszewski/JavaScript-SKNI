var test1 = false;

var btn1 = document.getElementById("btn1");
var myH1;
var h1;

btn1.addEventListener("click", () => {
        if(test1 == false){
             myH1 = document.querySelector("#root"); //pobiera docelowe miejsce elementu
             h1 = document.createElement("h1");     //tworzy element
            //h1.id = "h11";                               //nadaje id elementowi
            myH1.appendChild(h1);                         //wstawia element do drzewa dokumentu DOM
            test1 = true;
        }else if(test1 == true){
            h1.remove();
            test1 = false;
        }
});


