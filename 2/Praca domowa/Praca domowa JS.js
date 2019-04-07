//Zadanie 1
const prod1 = {
    name : "nazwa",
    price : 100,
    weight : 20,
}

const prod2 = {
    name : "nazwa2",
    price : 200,
    weight : 40,
}
//1)
console.log(prod1);
console.log(prod2);
//2)
console.log("Produkt numer jeden to: " + prod1.name);
console.log("Produkt numer dwa to: " + prod2.name);
console.log("Produkty kosztują razem: " + (prod1.price + prod2.price));
console.log("Produkty ważą razem: " + (prod1.weight + prod2.weight));

//Zadanie 2
const currentUser = {
    name : "Jan",
    surname : "Kowalski",
    email : "jankowalski@gmail.com",
    www : "www.jankowalski.pl",
    userType : "admin",

    show : function(){
        console.log("Imię: " + this.name);
        console.log("Nazwisko: " + this.surname);
        console.log("Email: " + this.email);
        console.log("WWW: " + this.www);
        console.log("Typ użytkownika: " + this.userType);
    }
}
currentUser.show();