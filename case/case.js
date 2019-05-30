// Galeria zdjęć
// Wizualizacja galerii w pliku case.jpg
// Macie za zadanie stworzyć galerię zdjęć. 
// Galeria powinna na starcie wczytywać kilka przykładowych zdjęć i ich opisów z plików. 
// Powinien być jeden plik json z danymi zdjęć i odpowiednia ilość plików jpg/png.
// Opisy i tytuły można edytować, karty zdjęć można dodawać i usuwać.
// Zdjęcie po kliknięciu powinno się powiększać dwukrotnie(bądź dowolną ilość razy).
// Strona posiada tryb jasny i ciemny.
// Style wedle uznania, ważne aby było widać różnicę między trybami.
// Przycisk RESET przywraca stronę do stanu początkowego, bez odświeżenia.
// Licznik zdjęć w galerii powinien się zmieniać w zależności od ilości zdjęć
// Select obok resetu powinien zawierać aktualną listę tytułów zdjęć,
//  i po wybraniu jednego z tytułów tylko to zdjęcie ma zostać w galerii.
// Przycisk edytuj na kartach zdjęć ma odblokowywać i blokować 
// możliwość edycji tytułu i opisu danego zdjęcia

//Pobieranie elementów z HTML
const body = document.getElementById("body");
    const counterText = document.getElementById("counterText");
    const btReset = document.getElementById("btReset");
    const selectList = document.getElementsByClassName("selectList");
    const switchDark = document.getElementById("switchDark");
    const line = document.getElementById("line");
const generalBox = document.getElementById("generalBox");
    const box1 = document.getElementById("box1");
    const foto = document.getElementById("foto");
    const textOnFoto = document.getElementById("textOnFoto");
    let fotoText = document.getElementById("fotoText");
    const description = document.getElementById("description");
    const btEdit = document.getElementById("btEdit");                   //button Edit
    const btDelete = document.getElementById("btDelete");               //button Delete
const boxCreate = document.getElementById("boxCreate");
    const fotoCreate = document.getElementById("fotoCreate");
    const btAddFotoCreateId = document.getElementById("btAddFotoCreateId");
    const btAddFotoCreateLabel = document.getElementById("btAddFotoCreateLabel");
    const fotoTextCreate = document.getElementById("fotoTextCreate");
    const descriptionCreate = document.getElementById("descriptionCreate");
    const btCancel = document.getElementById("btCancel");                   //button Edit
    const btAdd = document.getElementById("btAdd");   
    const btEditCreate = document.getElementById("btEditCreate");   

    
//Licznik zdjęć na stronie
var counter = Number(1);
counterText.innerText =  "Licznik zdjęć: "+ counter;

function CounterPlus(){
    counterText.innerText =  "Licznik zdjęć: "+ (counter + Number(1));
}

function CounterMinus(){
    counterText.innerText =  "Licznik zdjęć: "+ (counter - Number(1));
}

//wczytywanie pliku JSON
fetch("data.json")
  .then(json => json.json()) //zamienia pobrany plik na format json. Jeżeli chcesz inny format wpisz.text() lub .blob() 
  .then(json =>{    //dostęp do właściwości obiektu JSON
    fotoTextCreate.innerText = json.Photo0.title;
    descriptionCreate.innerText = json.Photo0.description;
    fotoText.innerText = json.Photo1.title; //title foto pobrane z JSON'a
    description.innerText = json.Photo1.description;

});

//Slider (zmiana koloru strony na ciemny)
switchDark.addEventListener("click", () => {
    if(document.switchDark.checkboxDark.checked == false){
        body.style.backgroundColor = "darkgray";
        document.switchDark.checkboxDark.checked = true;
    }else{
        body.style.backgroundColor = "white";
        document.switchDark.checkboxDark.checked = false;
    }
});
//=---------------------------

//Button Edytuj box1
btEdit.addEventListener("click", () => {
    inTitle = prompt("Wpisz tytuł");
    fotoText.innerText = inTitle;
    inDescription = prompt("Wpisz opis");
    description.innerText = inDescription;
});

//Button Usuń
btDelete.addEventListener("click", () =>{
    if( confirm("Czy na pewno chcesz usunąć to zdjęcie?"))
    {
        $("#box1").remove();
        CounterMinus();
    }
});

//Button Edytuj Create
btEditCreate.addEventListener("click", () => {
    inTitle = prompt("Wpisz tytuł");
    fotoTextCreate.innerText = inTitle;
    inDescription = prompt("Wpisz opis");
    descriptionCreate.innerText = inDescription;
});

//"Button" dodawania zdjęcia z pliku + usuwanie przycisku do dodawania zdjęcia
var openFile = function(event) {
var input = event.target;

var reader = new FileReader();
reader.onload = function(){
    var dataURL = reader.result;
    var imgCreate = document.getElementById('imgCreate');
    imgCreate.src = dataURL;
};
reader.readAsDataURL(input.files[0]);
    $("#btAddFotoCreateId").remove();
    $("#btAddFotoCreateLabel").remove();
};

//Button Dodaj
btAdd.addEventListener("click", () =>{
    // if(tytuł !== default && opis !== default && zdjęcie jest dodane (przycisk is dead)){
    //     stwórz nowy template zdjęcia (wyczyść obecny)
    //     sworzyć nowy element w DOMie z elementami box+1
    // }
    if(fotoTextCreate.innerText !== "Wpisz tytuł" &&  descriptionCreate.innerText !== "Wpisz opis" && fotoTextCreate.innerText !== "" &&  descriptionCreate.innerText !== ""){ //TODO: dodać warunek sprawdzający czy zdjęcie zostało dodane
        CounterPlus();
    }else{
        alert("Błąd:\n Opis/tytuł nie został dodany lub jest pusty.\n Zdjęcie nie zostało zaimportowane!");
    }
});
const el = document.createElement("section");

el.id = "box" +(counter+1);
el.innerText = "Tekst w divie";
el.setAttribute("title", "To jest tekst w dymku");
el.classList.add("module");
el.style.backgroundColor = "FF6633";

const div = document.querySelector(".test-first"); //pobieramy miejsce docelowe
div.appendChild(el); //wstawiamy element do drzewa dokumentu