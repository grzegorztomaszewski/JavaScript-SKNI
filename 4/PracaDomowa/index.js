
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

// var name; 
// var name;
// var name;
// var name;
// var myDiv;



// btn1.addEventListener("click", () => {
//         if(document.getElementById("h11")){
//             h1.remove();
//         }else{
//                     //pobieranie wartości z pliku
//             const xhttp = new XMLHttpRequest();
//             xhttp.onreadystatechange = function(){
//                 if(this.readyState == 4 && this.status == 200){
//                     //tworzenie elementu+DOM
//                      myDiv = document.querySelector("#root"); //pobiera docelowe miejsce elementu
//                      h1 = document.createElement("h1");     //tworzy element
//                      h1.id = "h11";                               //nadaje id elementowi
//                      myDiv.appendChild(h1);                         //wstawia element do drzewa dokumentu DOM

//                         displayText = this.responseText;
//                         h1.innerText = displayText;
//                     //style
//                         h1.style.color = "red";
//                         h1.style.fontSize = "20px";
//                 }
//             };
//             xhttp.open("GET", "plik1txt.txt", true);
//             xhttp.send();
//         }
// });
GetXml(btn1, "plik1txt.txt", "h11", "h1"); //plik txt
GetXml(btn2, "plik2xml.xml", "h12", "h2"); //plik xml
GetXml(btn3, "plik3json.json", "h13", "h3"); //plik xml
GetXml(btn4, "plik4js.js", "h14", "h4"); //plik xml

// btn2.addEventListener("click", () => {
//     if(document.getElementById("h12")){
//         h2.remove();
//     }else{
//                 //pobieranie wartości z pliku
//         const xhttp2 = new XMLHttpRequest();
//         xhttp2.onreadystatechange = function(){
//             if(this.readyState == 4 && this.status == 200){
//                 //tworzenie elementu+DOM
//                  myDiv = document.querySelector("#root"); //pobiera docelowe miejsce elementu
//                  h2 = document.createElement("h1");     //tworzy element
//                  h2.id = "h12";                               //nadaje id elementowi
//                  myDiv.appendChild(h2);                         //wstawia element do drzewa dokumentu DOM

//                      displayText2 = this.responseXML.getElementsByTagName("name");
//                      h2.innerHTML = displayText2[0].innerHTML;

//                 //style
//                     h2.style.color = "orange";
//                     h2.style.fontSize = "25px";
//             }
//         };
//         xhttp2.open("GET", "plik2xml.xml", true);
//         xhttp2.send();
//     }
// });

// btn3.addEventListener("click", () => {
//     if(document.getElementById("h13")){
//         h3.remove();
//     }else{
//                 //pobieranie wartości z pliku
//         const xhttp3 = new XMLHttpRequest();
//         xhttp3.onreadystatechange = function(){
//             if(this.readyState == 4 && this.status == 200){
//                 //tworzenie elementu+DOM
//                  myDiv = document.querySelector("#root"); //pobiera docelowe miejsce elementu
//                  h3 = document.createElement("h1");     //tworzy element
//                  h3.id = "h13";                               //nadaje id elementowi
//                  myDiv.appendChild(h3);                         //wstawia element do drzewa dokumentu DOM

//                  const parsedFile = JSON.parse(this.responseText);
//                  h3.innerHTML = parsedFile.names; //jeżeli chcesz wyświetlić konkretny element, to .names[index]
//                 //style
//                     h3.style.color = "blue";
//                     h3.style.fontSize = "30px";
//             }
//         };
//         xhttp3.open("GET", "plik3json.json", true);
//         xhttp3.send();
//     }
// });

// btn4.addEventListener("click", () => {
//     if(document.getElementById("h14")){
//         h4.remove();
//     }else{
//                 //pobieranie wartości z pliku
//         const xhttp4 = new XMLHttpRequest();
//         xhttp4.onreadystatechange = function(){
//             if(this.readyState == 4 && this.status == 200){
//                 //tworzenie elementu+DOM
//                  myDiv = document.querySelector("#root"); //pobiera docelowe miejsce elementu
//                  h4 = document.createElement("h1");     //tworzy element
//                  h4.id = "h14";                               //nadaje id elementowi
//                  myDiv.appendChild(h4);                       //wstawia element do drzewa dokumentu DOM

//                     const displayText3 = this.responseText;
//                     console.log(displayText3);
//                     h4.innerText = displayText3;
//                 //style
//                     h4.style.color = "green";
//                     h4.style.fontSize = "35px";
//             }
//         };
//         xhttp4.open("GET", "plik4js.js", true);
//         xhttp4.send();
//     }
// });

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
                     myDiv = document.querySelector("#root"); //pobiera docelowe miejsce elementu
                     name = document.createElement(id);     //tworzy element
                     name.id = id;                               //nadaje id elementowi
                     myDiv.appendChild(name);                         //wstawia element do drzewa dokumentu DOM
                        if(path.indexOf('.txt') !== -1){
                            displayText = this.responseText;
                            name.innerText = displayText;
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
                            name.innerHTML = parsedFile.names; //jeżeli chcesz wyświetlić konkretny element, to .names[index]
                        //style
                            name.style.color = "blue";
                            name.style.fontSize = "30px";
                        }else if(path.indexOf('.js') !== -1){
                            const displayText3 = this.responseText;
                            name.innerText = displayText3;
                        //style
                            name.style.color = "green";
                            name.style.fontSize = "35px";
                        }
                }
            };
            xhttp.open("GET", path, true);
            xhttp.send();
        }
});
}