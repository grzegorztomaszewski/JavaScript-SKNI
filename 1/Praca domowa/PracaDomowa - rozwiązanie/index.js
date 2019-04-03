/*1. Napisz funkcje, która przyjmuje 2 parametry: miesiąc i imię.
Funkcja ma zwracać:
- jeżeli miesiąc to -> grudzień, styczeń, luty
"imię + lubi zimę."
- jeżeli miesiąc to -> marzec, kwiecień, maj
"imię + kocha wiosnę."
- jeżeli miesiąc to -> czerwiec, lipiec, sierpień
"imię + się opala"
- jeżeli miesiąc to -> wrzesień, październik, listopad "imię + musi wrócić na studia."*/

function getSentence(month, name) {
  if (month === "grudzień" || month === "styczeń" || month === "luty") {
    return name + " lubi zimę.";
  } else if (month === "marzec" || month === "kwiecień" || month === "maj") {
    return name + " kocha wiosnę";
  } else if (
    month === "czerwiec" ||
    month === "lipiec" ||
    month === "sierpień"
  ) {
    return name + " się opala.";
  } else if (
    month === "wrzesień" ||
    month === "październik" ||
    month === "listopad"
  ) {
    return name + " musi wrócić na studia.";
  } else {
    return "Takiego miesiąca nie ma.";
  }
}

// 2. Napisz funkcje,ktora zwróci zdanie "Ala ma kota" w odwrotnej kolejnosci czyli "kota ma Ala".
// KOMENTARZ: to zadanie miało brzmieć inaczej, chodziło o funkcję która odwraca zdania które jej podamy, ale z tego powodu oba rozwiązania są poprawne.

function reverseSentence(sentence = "Ala ma kota") {
  const words = sentence.split(" ");
  let reversedSentence = "";
  for (let i = words.length - 1; i > 0; i--) {
    reversedSentence += words[i];
    reversedSentence += " ";
  }
  reversedSentence += words[0];
  return reversedSentence;
}

// 3. Napisz pętlę która przejdzie od 0 do 15 i na każdej liczbie wypisze jej parzystość.

function evenOdd() {
  for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
      console.log(i + " jest parzysta.");
    } else {
      console.log(i + " jest nieparzysta.");
    }
  }
}
