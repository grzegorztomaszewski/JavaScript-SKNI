
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

var h1; 
var h2;
var myDiv;



btn1.addEventListener("click", () => {
        if(document.getElementById("h11")){
            h1.remove();
        }else{
                    //pobieranie wartości z pliku
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    //tworzenie elementu+DOM
                     myDiv = document.querySelector("#root"); //pobiera docelowe miejsce elementu
                     h1 = document.createElement("h1");     //tworzy element
                     h1.id = "h11";                               //nadaje id elementowi
                     myDiv.appendChild(h1);                         //wstawia element do drzewa dokumentu DOM

                        displayText = this.responseText;
                        h1.innerText = displayText;
                    //style
                        h1.style.color = "red";
                        h1.style.fontSize = "20px";
                }
            };
            xhttp.open("GET", "plik1txt.txt", true);
            xhttp.send();
        }
});
