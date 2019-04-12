//Odpowiedź wysłać na: https://forms.gle/3PdDs6MAbVL56X3X9

//Zadanie 1. Stworzyć i podpiąć plik index.js do pliku index.html
//Poniższy tekst wrzucić do pliku index.html na koniec sekcji <body></body>
//<script type = "text/javascript" src = "index.js"></script>

//Zadanie 2. Należy stworzyć selecta z tagami: ul,h1,ol,p
let ul = document.querySelector("ul");
let h1 = document.querySelector("h1");
let ol = document.querySelector("ol");
let p = document.querySelector("p");

var global = 5; //zmienna globalna

//Zadanie 3. Zmiana selecta ma powodować zmianę wartości zmiennej globalnej
ul.addEventListener("click", () => {                    //pierwszy tag
    if(ul.style.backgroundColor === defaultStatus){
        global = 10;    //zmiana wartości zmiennej globalnej
        document.body.style.fontSize  = 17 + "px";  //pomoc wizualna (zmienna została zmieniona)
        ul.style.backgroundColor = "lightblue";
        elementyDodatnieBack1();
        elementyUjemneUncolor();
    }else if(ul.style.backgroundColor === "lightblue"){
        ul.style.backgroundColor = defaultStatus;
        elementyDodatnieUncolor();
        elementyUjemneBack1();
    }else if(ul.style.backgroundColor === "lightgreen"){
        ul.style.backgroundColor = defaultStatus;
        elementyUjemneBack2();
        elementyDodatnieUncolor();
    }
});

//Zadanie 4. Na podstawie tej zmiennej po wciśnięciu guzika należy zmienić tło wszystkich elementów pasujących do wybranego taga
let btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    if(global === 10 && ul.style.backgroundColor === defaultStatus){
        ul.style.backgroundColor = "lightgreen";    //zmiana tła po wciśnięciu guzika (w przypadku pierwszego kliknięcia)
        elementyDodatnieBack2();
        elementyUjemneUncolor();
}else if(global === 10 && ul.style.backgroundColor === "lightblue"){
    ul.style.backgroundColor = "lightgreen";    //zmiana tła po wciśnięciu guzika (w przypadku wcześniejszego kliknięcia)
    elementyDodatnieBack2();
    elementyUjemneBack1();
}
});

//Zadanie 5. Po kliknięciu w dowolny element (będący na liście tagów) na stronie, jeżeli miał on zmienione tło to należy je usunąć a jeśli nie to zmienić na inne niż punkcie 3
h1.addEventListener('click', () => {                    //drugi tag
    if(h1.style.backgroundColor != defaultStatus){
        h1.style.backgroundColor = defaultStatus;
        elementyUjemneBack1();
        elementyDodatnieUncolor();
    }else{
        h1.style.backgroundColor = "lightblue";
        elementyDodatnieBack1();
        elementyUjemneUncolor();
    }
});

ol.addEventListener('click', () => {                    //trzeci tag
    if(ol.style.backgroundColor != defaultStatus){
        ol.style.backgroundColor = defaultStatus;
        elementyUjemneBack1();
        elementyDodatnieUncolor();
    }else{
        ol.style.backgroundColor = "lightblue";
        elementyDodatnieBack1();
        elementyUjemneUncolor();
    }
});

p.addEventListener('click', () => {                     //czwarty tag
    if(p.style.backgroundColor != defaultStatus){
        p.style.backgroundColor = defaultStatus;
        elementyUjemneBack1();
        elementyDodatnieUncolor();
    }else{
        p.style.backgroundColor = "lightblue";
        elementyDodatnieBack1();
        elementyUjemneUncolor();
    }
});

//Zadanie 6. (Dla chętnych) Stworzyć 3 pola które wyświetlają na bieżąco, liczbę niepokolorowanych elementów, elementów z tłem1 i elementów z tłem2

//Funkcje, które zwiększają licznik
function elementyDodatnieBack1(){                                                   //zwiększa licznik niebieskiego tła
    back1.innerText = "Liczba elementów z tlem1 (niebieski): " + ++back1Value;      
}

function elementyDodatnieBack2(){                                                   //zwiększa licznik zielonego tła
    back2.innerText = "Liczba elementów z tlem2 (zielony): " + ++back2Value;
}
function elementyDodatnieUncolor(){                                                 //zwiększa licznik elementów bez tła
    unColor.innerText = "Liczba niepokolorowanych elementów: " + ++unColorValue;
}

//--------------------------------------------------------------------------------------------------------------------------

//Funkcje, które zmniejszają licznik
function elementyUjemneBack1(){                                                     //zmniejsza licznik niebieskiego tła
    back1.innerText = "Liczba elementów z tlem1 (niebieski): " + --back1Value;      
}

function elementyUjemneBack2(){                                                     //zmniejsza licznik zielonego tła
    back2.innerText = "Liczba elementów z tlem2 (zielony): " + --back2Value;       
}

function elementyUjemneUncolor(){                                                   //zmniejsza licznik elementów bez tła
    unColor.innerText = "Liczba niepokolorowanych elementów: " + --unColorValue;
}

let back1 = document.getElementById("back1");   //pobieranie elementu przez id (niebieskie tło)
let back2 = document.getElementById("back2");   //pobieranie elementu przez id (zielone tło)
let unColor = document.getElementById("unColor");   //pobieranie elementu przez id (elementy bez tła)

let back1Value = 0;  //zmienna przechowująca liczbę elementów z tłem1 (niebieskie)
let back2Value = 0;  //zmienna przechowująca liczbę elementów z tłem2 (zielone)
let unColorValue = 4; //zmienna przechowująca liczbę niepokolorowanych elementów