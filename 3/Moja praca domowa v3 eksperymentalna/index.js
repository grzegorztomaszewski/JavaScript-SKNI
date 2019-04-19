//Odpowiedź wysłać na: https://forms.gle/3PdDs6MAbVL56X3X9

//Zadanie 1. Stworzyć i podpiąć plik index.js do pliku index.html
//Poniższy tekst wstawić do pliku index.html na koniec sekcji <body></body>
//<script type = "text/javascript" src = "index.js"></script>

//Zadanie 2. Należy stworzyć selecta z tagami: ul,h1,ol,p
//Poniższy tekst wstawić do pliku index.html na początku sekcji <body></body>
/*
    <select id="selectList" onchange=getSelectValue();>
        <option value="ul">ul</option>
        <option value="h1">h1</option>
        <option value="ol">ol</option>
        <option value="p">p</option>
    </select>
*/
//Zadanie 3. Zmiana selecta ma powodować zmianę wartości zmiennej globalnej
var selectedValue = "ul";
function getSelectValue(){
    selectedValue = document.getElementById("selectList").value;
}

//Zadanie 4. Na podstawie tej zmiennej po wciśnięciu guzika należy zmienić tło wszystkich elementów pasujących do wybranego taga na tło1
let btn = document.getElementById("btn");
let ulTagAll = document.querySelectorAll("ul");
let h1TagAll = document.querySelectorAll("h1");
let olTagAll = document.querySelectorAll("ol");
let pTagAll = document.querySelectorAll("p");

//button dla ul
    btn.addEventListener("click", () => {
        for(i=0; i <= ulTagAll.length-1 ;i++){
        if(selectedValue == "ul" && ulTagAll[i].style.backgroundColor == defaultStatus){
                ulTagAll[i].style.backgroundColor = "lightgreen";
                    elementyUjemneUncolor();
                    elementyDodatnieGreen();
        }else if(selectedValue == "ul" && ulTagAll[i].style.backgroundColor == "lightblue"){
                ulTagAll[i].style.backgroundColor = "lightgreen";
                    elementyUjemneBlue();
                    elementyDodatnieGreen();
        }
    }
});
//button dla h1
    btn.addEventListener("click", () => {
        for(i=0; i <= h1TagAll.length-1 ;i++){
        if(selectedValue == "h1" && h1TagAll[i].style.backgroundColor == defaultStatus){
                h1TagAll[i].style.backgroundColor = "lightgreen";
                    elementyUjemneUncolor();
                    elementyDodatnieGreen();
        }else if(selectedValue == "h1" && h1TagAll[i].style.backgroundColor == "lightblue"){
                h1TagAll[i].style.backgroundColor = "lightgreen";
                    elementyUjemneBlue();
                    elementyDodatnieGreen();
        }
    }
});
//button dla ol
    btn.addEventListener("click", () => {
        for(i=0; i <= olTagAll.length-1 ;i++){
        if(selectedValue == "ol" && olTagAll[i].style.backgroundColor == defaultStatus){
                olTagAll[i].style.backgroundColor = "lightgreen";
                    elementyUjemneUncolor();
                    elementyDodatnieGreen();
        }else if(selectedValue == "ol" && olTagAll[i].style.backgroundColor == "lightblue"){
                olTagAll[i].style.backgroundColor = "lightgreen";
                    elementyUjemneBlue();
                    elementyDodatnieGreen();
        }
    }
});
//button dla p
    btn.addEventListener("click", () => {
        for(i=0; i <= pTagAll.length-1 ;i++){
        if(selectedValue == "p" && pTagAll[i].style.backgroundColor == defaultStatus){
                pTagAll[i].style.backgroundColor = "lightgreen";
                    elementyUjemneUncolor();
                    elementyDodatnieGreen();
        }else if(selectedValue == "p" && pTagAll[i].style.backgroundColor == "lightblue"){
                pTagAll[i].style.backgroundColor = "lightgreen";
                    elementyUjemneBlue();
                    elementyDodatnieGreen();
        }
    }
});

//Zadanie 5. Po kliknięciu w dowolny element (będący na liście tagów) na stronie, jeżeli miał on zmienione tło to należy je usunąć a jeśli nie to zmienić na inne niż punkcie 3(tło1)
//ul
//[0]
ulTagAll[0].addEventListener("click", () => {
    if(ulTagAll[0].style.backgroundColor == "lightgreen"){
        ulTagAll[0].style.backgroundColor = defaultStatus;
            elementyUjemneGreen();
            elementyDodatnieUncolor();
    }else if(ulTagAll[0].style.backgroundColor == "lightblue"){
        ulTagAll[0].style.backgroundColor = defaultStatus;
            elementyUjemneBlue();
            elementyDodatnieUncolor();
    }else{
        ulTagAll[0].style.backgroundColor = "lightblue";
            elementyUjemneUncolor();
            elementyDodatnieBlue();
    }
});

//h1
//[0]
h1TagAll[0].addEventListener("click", () => {
        if(h1TagAll[0].style.backgroundColor == "lightgreen"){
            h1TagAll[0].style.backgroundColor = defaultStatus;
                elementyUjemneGreen();
                elementyDodatnieUncolor();
        }else if(h1TagAll[0].style.backgroundColor == "lightblue"){
            h1TagAll[0].style.backgroundColor = defaultStatus;
                elementyUjemneBlue();
                elementyDodatnieUncolor();
        }
        else{
            h1TagAll[0].style.backgroundColor = "lightblue";
                elementyUjemneUncolor();
                elementyDodatnieBlue();
        }
    });
//[1]
h1TagAll[1].addEventListener("click", () => {
    if(h1TagAll[1].style.backgroundColor == "lightgreen"){
        h1TagAll[1].style.backgroundColor = defaultStatus;
            elementyUjemneGreen();
            elementyDodatnieUncolor();
    }else if(h1TagAll[1].style.backgroundColor == "lightblue"){
        h1TagAll[1].style.backgroundColor = defaultStatus;
            elementyUjemneBlue();
            elementyDodatnieUncolor();
    }
    else{
        h1TagAll[1].style.backgroundColor = "lightblue";
            elementyUjemneUncolor();
            elementyDodatnieBlue();
    }
});
//[2]
h1TagAll[2].addEventListener("click", () => {
    if(h1TagAll[2].style.backgroundColor == "lightgreen"){
        h1TagAll[2].style.backgroundColor = defaultStatus;
            elementyUjemneGreen();
            elementyDodatnieUncolor();
    }else if(h1TagAll[2].style.backgroundColor == "lightblue"){
        h1TagAll[2].style.backgroundColor = defaultStatus;
            elementyUjemneBlue();
            elementyDodatnieUncolor();
    }
    else{
        h1TagAll[2].style.backgroundColor = "lightblue";
            elementyUjemneUncolor();
            elementyDodatnieBlue();
    }
});
//[3]
h1TagAll[3].addEventListener("click", () => {
    if(h1TagAll[3].style.backgroundColor == "lightgreen"){
        h1TagAll[3].style.backgroundColor = defaultStatus;
            elementyUjemneGreen();
            elementyDodatnieUncolor();
    }else if(h1TagAll[3].style.backgroundColor == "lightblue"){
        h1TagAll[3].style.backgroundColor = defaultStatus;
            elementyUjemneBlue();
            elementyDodatnieUncolor();
    }
    else{
        h1TagAll[3].style.backgroundColor = "lightblue";
            elementyUjemneUncolor();
            elementyDodatnieBlue();
    }
});

//ol
//[0]
olTagAll[0].addEventListener("click", () => {
    if(olTagAll[0].style.backgroundColor == "lightgreen"){
        olTagAll[0].style.backgroundColor = defaultStatus;
            elementyUjemneGreen();
            elementyDodatnieUncolor();
    }else if(olTagAll[0].style.backgroundColor == "lightblue"){
        olTagAll[0].style.backgroundColor = defaultStatus;
            elementyUjemneBlue();
            elementyDodatnieUncolor();
    }
    else{
        olTagAll[0].style.backgroundColor = "lightblue";
            elementyUjemneUncolor();
            elementyDodatnieBlue();
    }
});
//[1]
olTagAll[1].addEventListener("click", () => {
    if(olTagAll[1].style.backgroundColor == "lightgreen"){
        olTagAll[1].style.backgroundColor = defaultStatus;
            elementyUjemneGreen();
            elementyDodatnieUncolor();
    }else if(olTagAll[1].style.backgroundColor == "lightblue"){
        olTagAll[1].style.backgroundColor = defaultStatus;
            elementyUjemneBlue();
            elementyDodatnieUncolor();
    }
    else{
        olTagAll[1].style.backgroundColor = "lightblue";
            elementyUjemneUncolor();
            elementyDodatnieBlue();
    }
});
//[2]
olTagAll[2].addEventListener("click", () => {
    if(olTagAll[2].style.backgroundColor == "lightgreen"){
        olTagAll[2].style.backgroundColor = defaultStatus;
            elementyUjemneGreen();
            elementyDodatnieUncolor();
    }else if(olTagAll[2].style.backgroundColor == "lightblue"){
        olTagAll[2].style.backgroundColor = defaultStatus;
            elementyUjemneBlue();
            elementyDodatnieUncolor();
    }
    else{
        olTagAll[2].style.backgroundColor = "lightblue";
            elementyUjemneUncolor();
            elementyDodatnieBlue();
    }
});

//p
//[0]
pTagAll[0].addEventListener("click", () => {
    if(pTagAll[0].style.backgroundColor == "lightgreen"){
        pTagAll[0].style.backgroundColor = defaultStatus;
            elementyUjemneGreen();
            elementyDodatnieUncolor();
    }else if(pTagAll[0].style.backgroundColor == "lightblue"){
        pTagAll[0].style.backgroundColor = defaultStatus;
            elementyUjemneBlue();
            elementyDodatnieUncolor();
    }
    else{
        pTagAll[0].style.backgroundColor = "lightblue";
            elementyUjemneUncolor();
            elementyDodatnieBlue();
    }
});
//[1]
pTagAll[1].addEventListener("click", () => {
    if(pTagAll[1].style.backgroundColor == "lightgreen"){
        pTagAll[1].style.backgroundColor = defaultStatus;
            elementyUjemneGreen();
            elementyDodatnieUncolor();
    }else if(pTagAll[1].style.backgroundColor == "lightblue"){
        pTagAll[1].style.backgroundColor = defaultStatus;
            elementyUjemneBlue();
            elementyDodatnieUncolor();
    }
    else{
        pTagAll[1].style.backgroundColor = "lightblue";
            elementyUjemneUncolor();
            elementyDodatnieBlue();
    }
});
//[2]
pTagAll[2].addEventListener("click", () => {
    if(pTagAll[2].style.backgroundColor == "lightgreen"){
        pTagAll[2].style.backgroundColor = defaultStatus;
            elementyUjemneGreen();
            elementyDodatnieUncolor();
    }else if(pTagAll[2].style.backgroundColor == "lightblue"){
        pTagAll[2].style.backgroundColor = defaultStatus;
            elementyUjemneBlue();
            elementyDodatnieUncolor();
    }
    else{
        pTagAll[2].style.backgroundColor = "lightblue";
            elementyUjemneUncolor();
            elementyDodatnieBlue();
    }
});

//Zadanie 6. (Dla chętnych) Stworzyć 3 pola które wyświetlają na bieżąco, liczbę niepokolorowanych elementów, elementów z tłem1 i elementów z tłem2

const liczbaUnColor = ulTagAll.length + h1TagAll.length + olTagAll.length + pTagAll.length;

//Funkcje, które zwiększają licznik
function elementyDodatnieBlue(){                                                   //zwiększa licznik niebieskiego tła
    blue.innerText = "Liczba elementów z tlem1 (niebieski): " + ++blueValue;
}

function elementyDodatnieGreen(){                                                   //zwiększa licznik zielonego tła
    green.innerText = "Liczba elementów z tlem2 (zielony): " + ++greenValue;
}
function elementyDodatnieUncolor(){                                                 //zwiększa licznik elementów bez tła
    unColor.innerText = "Liczba niepokolorowanych elementów: " + ++unColorValue;
}

//--------------------------------------------------------------------------------------------------------------------------

//Funkcje, które zmniejszają licznik
function elementyUjemneBlue(){                                                     //zmniejsza licznik niebieskiego tła
    blue.innerText = "Liczba elementów z tlem1 (niebieski): " + --blueValue;
}

function elementyUjemneGreen(){                                                     //zmniejsza licznik zielonego tła
    green.innerText = "Liczba elementów z tlem2 (zielony): " + --greenValue;
}

function elementyUjemneUncolor(){                                                   //zmniejsza licznik elementów bez tła
    unColor.innerText = "Liczba niepokolorowanych elementów: " + --unColorValue;
}

let blue = document.getElementById("blue");   //pobieranie elementu przez id (niebieskie tło)
let green = document.getElementById("green");   //pobieranie elementu przez id (zielone tło)
let unColor = document.getElementById("unColor");   //pobieranie elementu przez id (elementy bez tła)

let blueValue = 0;  //zmienna przechowująca liczbę elementów z tłem1 (niebieskie)
let greenValue = 0;  //zmienna przechowująca liczbę elementów z tłem2 (zielone)
let unColorValue = ulTagAll.length + h1TagAll.length + olTagAll.length + pTagAll.length; //zmienna przechowująca liczbę niepokolorowanych elementów

/*
//Poniższy tekst wstawić do pliku index.html pod koniec sekcji <body></body>
<strong>
        <div id = "unColor">Liczba niepokolorowanych elementów: 11</div>
        <div id = "blue">Liczba elementów z tlem1 (niebieski): 0</div>
        <div id = "green">Liczba elementów z tlem2 (zielony): 0</div>
</strong>
*/