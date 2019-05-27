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
    const fotoText = document.getElementById("fotoText");
    const description = document.getElementById("description");
    const btEdit = document.getElementById("btEdit");                   //button Edit
    const btDelete = document.getElementById("btDelete");               //button Delete
const boxCreate = document.getElementById("boxCreate");
    const fotoCreate = document.getElementById("fotoCreate");
    const btFotoCreate = document.getElementById("btFotoCreate");
    const fotoTextCreate = document.getElementById("fotoTextCreate");
    const descriptionCreate = document.getElementById("descriptionCreate");
    const btCancel = document.getElementById("btCancel");                   //button Edit
    const btAdd = document.getElementById("btAdd");   

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

//Wczytywanie pliku JSON
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
        //const parsedFile = JSON.parse(this.responseText)
        //console.log(parsedFile);
       // alert(parsedFile.texts)
        // for(let i=0; i< parsedFile.texts.lenght; i++){
        //     console.log(parsedFile[i]);
       // }
    }
};
 xhttp.open("GET", "JSON.json", true);
 xhttp.send();

//Button Edytuj
btEdit.addEventListener("click", () => {

});
