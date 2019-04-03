/*
 * STRUKTURA KODU
 */

// Instrukcje w jednej linii
Instrukcja1;Instrukcja2;
// Instrukcje w wielu liniach (preferowane)
Instrukcja1;
Instrukcja2;

/*
 * ZMIENNE
 */

const zmienna1 = 1;
zmienna1 = 2; // Błąd kompilatora
let zmienna2;
zmienna2 = 2; // Wartość może się zmieniać
var zmienna3 = 10; // TEGO NIE UŻYWAMY
zmienna3 = 10;

/*
 * TYPY
 */

/* TYPY PODSTAWOWE */
const typ1 = 1;
typeof typ1; // Number
const typ2 = "napis";
typeof typ2; // String
const typ3 = true;
typeof typ3; // Boolean
const typ4 = null;
const typ5 = undefined;

/* TYPY OBIEKTOWE */

const tablica = [];
const obiekt = {};
const funkcja = function() {};

/*
 * OPERATORY
 */

/* ARTYMETYCZNE */
1 + 1;
1 - 1;
1 * 1;
1 / 1;
1 % 1;
1 ** 1;
zmienna1++;
zmienna1--;
++zmienna1;
--zmienna1;
+true;
const x = 1;
let n = 0;
n = n + 1;
n += 1;

/* PORÓWNANIA */
1 == 1;
1 != 2;
3 === 3;
3 !== "3";
4 > 3;
4 >= 3;
3 < 4;
3 <= 4;

/* LOGICZNE */

true && false; // false
true && true; // true
true || false; // true
false || false; // false

/*
 * KONWERSJA TYPÓW
 */
const zmienna1 = 1;
const zmienna2 = String(zmienna1);
const zmienna3 = Boolean(1);
const zmienna4 = Number();

"2" == 2;
"2" === 2;
[2] == 2;
[] + []; ''
[] == [];
[] == ![];
0.1 + 0.2 === 0.3;
3 > 2 > 1;
3 > 2 >= 1;
"2" + 1;
"2" - 1;
"2" - -1;

/**
 * OPERATORY WARUNKOWE
 */

if (waruneklogiczny1) {
  // wykonaj jeżeli waruneklogiczny1 === true
} else if (waruneklogiczny2) {
  // wykonaj jeżeli waruneklogiczny1 === false i waruneklogiczny2 === true
} else {
  // wykonaj jeżeli waruneklogiczny1 === false i waruneklogiczny2 === false
}
const zmienna = warunek ? true : false;

switch (zmienna1) {
  case 1:
    zmienna2 = 1;
    break;
  case 2:
    zmienna2 = 4;
    break;
  default:
    zmienna2 = 0;
}

/**
 * PĘTLE
 */

while (warunek) {
  // instrukcje
}

while (warunek) Instrukcja;

do {} while (warunek);

for (let i = 0; i < 3; i++) {
  alert(i);
}

/**
 * FUNKCJE (SA NAJPIĘKNIEJSZE)
 */

function funkcja1() {
  alert(1);
}

funkcja1();

function funkcja2(argument1) {
  alert(argument1);
}

funkcja2("CZESC");

const dodaj = function(a, b) {
  return a + b;
};

const suma1 = dodaj(1,2);

const dodaj3 = function dodaj3(a, b, c = 1) {
  const suma1 = dodaj(a, b);
  return dodaj(suma1, c);
};

const imie = "Dominik";

const witaj = () => {
  return "Witaj " + imie;
};

const zegnaj = () => `PAPA ${imie}`;

/**
 * OBIEKTY
 */

const obiekt = {
  a: 1,
  b: 2,
  c: function() {
    return this.a + this.b;
  }
};

const obiekt1 = {};
obiekt1.a = 1;
alert(obiekt1.a);
obiekt1.drukujA = () => alert(this.a);
obiekt1.drukujA = function() {
  console.log(this.a);
};

// TABLICE

const tablica1 = [];
tablica1.push(1);
tablica1.concat([2]);
tablica1.forEach(num => tablica1.push(num));
