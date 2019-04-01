// 2 sposoby deklarowania obiektów

const obj1 = new Object();
const obj2 = {};

// deklaracja wartości obiektów

const obj = {
  a: 1
};

obj.b = 2;

obj === { a: 1, b: 2 };

// Przykładowe własności

const obj = {
  a: 1,
  b: "2",
  c: function() {
    return 3;
  },
  d: {
    aa: 1,
    b: []
  }
};

// usuwanie własności

const obj = { a: 1 };

delete obj.a;

obj === {};

// Konstruktor obiektu

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

const rect1 = new Rectangle(1, 1);
const rect2 = new Rectangle(2, 2);

// Definicja metod w konstruktorze

function Circle(r) {
  this.r = r;
  this.getArea = function() {
    return this.r ** 2 * Math.PI;
  };
}

const circle1 = new Circle(1);
console.log(Circle.getArea());

// Prototypy

function House() {
  this.people = [];
}

House.prototype = {
  addPerson: function(person) {
    this.people.push(person);
  }
};

// Tablice

const arr1 = new Array();
const arr2 = new Array(10);
const arr3 = [];
const arr4 = [1, 2];

// dostęp do elementów tablicy

const arr = [1, "2", { a: 1 }];
arr[0] === 1;
arr[1] === "2";
arr[2] === { a: 1 }; // to nie jest prawda

const str = "Ala ma kota";
const arr = "Ala ma kota".split(" "); // ["Ala", "ma", "kota"]
const str1 = arr.join(",");
str1 === "Ala,ma,kota";
