var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

GetXml(btn1, "plik1txt.txt", "h11", "h1"); //plik txt
GetXml(btn2, "plik2xml.xml", "h12", "h2"); //plik xml
GetXml(btn3, "plik3json.json", "h13", "h3"); //plik xml
GetXml(btn4, "plik4js.js", "h14", "h4"); //plik xml

<<<<<<< HEAD
let isBtn1Clicked = false;

btn1.addEventListener("click", () => {
    if(test1 == false){
        const div = document.createElement("div");
            div.id = "divTag"; //!!!
        test1 = true;
        console.log(div);
    }else{
        //jak usunąć element bez id || jak nadać id tworzonemu elementowi
        test1 = false;
    }
});


btn2.addEventListener("click", () => {
    const div = document.createElement('div');
    console.log(div);
=======
function GetXml(btn, path, id, name){
    btn.addEventListener("click", () => {
        if(document.getElementById(id)){
            name.remove();
        }else{
                        //pobieranie wartości z pliku
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                        //tworzenie elementu+DOM
                     myDiv = document.querySelector("#root");   //pobiera docelowe miejsce elementu
                     name = document.createElement(id);         //tworzy element
                     name.id = id;                              //nadaje id elementowi
                     myDiv.appendChild(name);                   //wstawia element do drzewa dokumentu DOM
                        if(path.indexOf('.txt') !== -1){        //sprawdza czy ścieżka pliku zawiera odpowiednie rozszerzenie(txt,xml,json,js)
                            name.innerText = this.responseText; //wrzuca tekst do elementu HTML
                        //style
                            name.style.color = "red";
                            name.style.fontSize = "20px";
                        }
                        else if(path.indexOf('.xml') !== -1){
                            displayText2 = this.responseXML.getElementsByTagName("name");
                            name.innerHTML = displayText2[0].innerHTML;
                        //style
                            name.style.color = "orange";
                            name.style.fontSize = "25px";
                        }else if(path.indexOf('.json') !== -1){
                            const parsedFile = JSON.parse(this.responseText);
                            name.innerHTML = parsedFile.names;  //jeżeli chcesz wyświetlić konkretny element, to .names[index]
                        //style
                            name.style.color = "blue";
                            name.style.fontSize = "30px";
                        }else if(path.indexOf('.js') !== -1){
                            name.innerText = this.responseText;
                        //style
                            name.style.color = "green";
                            name.style.fontSize = "35px";
                        }
                }
            };
            xhttp.open("GET", path, true);
            xhttp.send();
        }
>>>>>>> z4
});
}