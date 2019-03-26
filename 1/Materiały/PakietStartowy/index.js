// Zadanie 0: Napisz funkcję która wypisze na ekranie powitanie dla osoby
// o podanym imieniu

function hello(imie) {
  alert(imie);
}

// Zadanie 1: Napisz funkcję 2-argumentową,
// która zwróci prawdę gdy jedna z podanych liczb będzie równa 50
// lub ich suma będzie równa 50

function zwroc(a, b) {
  return a === 50 || b === 50 || a + b === 50;
}

// Zadanie 2: Napisz funkcję która odwróci podaną jej liczbę 1234 -> 4321
// 1234 -> "1 2 3 4" -> ["1", "2", "3", "4"]
function odwroc(liczba) {
  const liczbaStr = String(liczba);
  const odwrocona = [];
  for (let i = liczbaStr.length - 1; i >= 0; i--) {
    odwrocona.push(liczbaStr[i]);
  }
  return Number(odwrocona.join(""));
}

// Zadanie 3: Napisz funkcję która policzy objętość walca o zadanych parametrach.
// Walec ma być obiektem, który posiada wysokość i promień podstawy

// Zadanie 4: napisz pętlę która przejdzie od 0 do 15 i na każdej
// liczbie wypisze jej parzystość.
