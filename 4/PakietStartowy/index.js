// //Wczytywanie zwykłego pliku txt
// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         alert(this.responseText)
//     }
// };  //property obiektu, które jest funkcją
// xhttp.open("GET", "test1.txt", true); //GET - otrzymujemy dane, które są na serwerze,test1.txt - otrzymujemy plik z serwera(komputera), true - określa (a)synchroniczność
// xhttp.send(); //wysłanie zapytania do pliku

//Wczytywanie zwykłego pliku txt(2)
// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         displayText = this.responseText;
//         //alert
//         //Tworzenie i podłączenie elementów html
//         const div = document.createElement('div');
//         console.log(div);

//         //const htmlDiv = document.querySelector('div');
//         //console.log(htmlDiv);

//         const h1 = document.createElement('h1');
//         h1.innerText = displayText;
//         div.appendChild(h1)

//         document.getElementById('root').appendChild(div);
//             }
//         }; 
//         xhttp.open("GET", "test1.txt", true);
//         xhttp.send(); 

//Wczytywanie pliku XML (przestarzały format)
// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         const xmlDocument = this.responseXML;
//         const texts = xmlDocument.getElementsByTagName('TEXT');
//         alert(texts[0].innerHTML)
//         console.log(xmlDocument);
//     }
// };  //property obiektu, które jest funkcją
// xhttp.open("GET", "test2.xml", true); //GET - otrzymujemy dane, które są na serwerze,test1.txt - otrzymujemy plik z serwera(komputera), true - określa (a)synchroniczność
// xhttp.send(); //wysłanie zapytania do pliku

//Wczytywanie pliku JSON
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
        const parsedFile = JSON.parse(this.responseText)
        console.log(parsedFile);
        alert(parsedFile.texts)
        for(let i=0; i< parsedFile.texts.lenght; i++){
            console.log(parsedFile[i]);
        }
    }
};
 xhttp.open("GET", "test3.json", true);
 xhttp.send();

//-------------------------------------------------------------

//Tworzenie i podłączenie elementów html
//const div = document.createElement('div');
//console.log(div);


//const h1 = document.createElement('h1');
//h1.innerText = displayText;
//div.appendChild(h1)
//const htmlDiv = document.querySelector('div');
//console.log(htmlDiv);

//document.getElementById('root').appendChild(div);