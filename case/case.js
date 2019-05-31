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
    const fotoBox = document.getElementById("fotoBox");
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
const h2TagAll = document.querySelectorAll("h2");
console.log(h2TagAll[1]);

//Licznik zdjęć na stronie
var counter = 1;
var boxCounter = Number(1);
counterText.innerText =  "Licznik zdjęć: "+ counter;
function CounterPlus(){
    counterText.innerText =  "Licznik zdjęć: "+ ++counter;
    boxCounter = boxCounter + Number(1);
}

function CounterMinus(){
    counterText.innerText =  "Licznik zdjęć: "+ (counter - Number(1));
}

//wczytywanie pliku JSON
fetch("data.json")
  .then(json => json.json()) //zamienia pobrany plik na format json. Jeżeli chcesz inny format wpisz.text() lub .blob() 
  .then(json =>{    //dostęp do właściwości obiektu JSON
    fotoTextCreate.innerText = json.Photo0.title;   //title foto pobrane z JSON'a dla foto Create
    descriptionCreate.innerText = json.Photo0.description;
    fotoText.innerText = json.Photo1.title; //title foto pobrane z JSON'a dla foto ostworzonego
    description.innerText = json.Photo1.description;
    console.log(json);

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
        if(fotoTextCreate.innerText !== "Wpisz tytuł" &&  descriptionCreate.innerText !== "Wpisz opis" && fotoTextCreate.innerText !== "" &&  descriptionCreate.innerText !== "" && imgCreate.src !== ""){
            CounterPlus();
            //tworzenie nowego elementu w DOM
            insertBefore();
            
            //Dodawanie właściwości tworzonego obiektu do formatu JSON
            var text = `{ "Photo${boxCounter}" : ` +
            `{ "id":"${boxCounter}", "title":"${fotoTextCreate.innerText}", "description":"${descriptionCreate.innerText}"}}`;
            var obj = JSON.parse(text);
            console.log(obj);

    }else{
        alert("Błąd:\n Opis/tytuł nie został dodany lub jest pusty.\n Zdjęcie nie zostało zaimportowane!");
    }
});


//Tworzenie nowego elementu box w DOM
function insertBefore() {
    const p = document.querySelector("#generalBox");
    const section = p.firstElementChild; //pobieranie pierwszego child generalBox'a czyli box1
    const newNode = document.createElement("section");
        newNode.id = "box"+boxCounter;
        newNode.classList = "box";
    p.insertBefore(newNode, section);
    //Tworzenie elementu HTML fotoBox
    const el = document.createElement("section");
        el.id = `fotoBox${boxCounter}`;
        el.classList = "fotoBoxClass";
    const div = document.querySelector("#"+newNode.id);
    div.appendChild(el); 
    //Tworzenie elementu HTML wewnątrz fotoBox
    const img = document.createElement("img");
        img.id = `imgCreate${boxCounter}`;
        img.classList = "imgClass";
        img.src = imgCreate.src;
    const div1 = document.querySelector("#"+el.id);
    div1.appendChild(img); 
    //Tworzenie elementu HTML - Title
    const el2 = document.createElement("h2");
        el2.classList = "fotoTextClass";
        el2.id = `fotoText${boxCounter}`;
        el2.innerText = inTitle;
    const div2 = document.querySelector("#"+newNode.id);
    div2.appendChild(el2);
    //Tworzenie elementu HTML - description
    const el3 = document.createElement("h4");
        el3.id = `description${boxCounter}`;
        el3.classList = "descriptionClass";
        el3.innerText = inDescription;
    const div3 = document.querySelector("#"+newNode.id);
    div3.appendChild(el3); 
    //Tworzenie elementu HTML - buttons
    const el4 = document.createElement("section");
        el4.id = `buttons${boxCounter}`;
        el4.classList = "buttonsClass";
    const div4 = document.querySelector("#"+newNode.id);
    div4.appendChild(el4);
    //Tworzenie elementu HTML wewnątrz buttons - edit
    const btnEdit = document.createElement("Button");
        btnEdit.id = `btEdit${boxCounter}`;
        btnEdit.classList = "btEditClass";
        btnEdit.innerText = "Edytuj";
    const div5 = document.querySelector("#"+el4.id);
    div5.appendChild(btnEdit);
    //Tworzenie elementu HTML wewnątrz buttons - delete
    const btnDel = document.createElement("Button");
        btnDel.id = `btDelete${boxCounter}`;
        btnDel.classList = "btDelClass";
        btnDel.innerText = "Usuń";
    const div6 = document.querySelector("#"+el4.id);
    div6.appendChild(btnDel);
}


