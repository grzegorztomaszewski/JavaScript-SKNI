//Zadanie o: Napisz funkcję która wypisze na ekranie powitanie dla osby o podanym imieniu

function hello(imie){
alert(imie);
}

//Zadanie 1: Napis funkcję 2-argumentową, która zwróci prawdę gdy jedna z podanych liczb będzie równa 50 lub ich suma będzie równa 50

function zwroc2(a,b){
    return (a===50 || b === 50 || (a + b ===50);
}

//Zadanie 2: Napisz funkcję która odwróci podaną liczbę 1234 -> 4321

//1234 -> "1234" -> ["1", "2", "3", "4"]
function odwrot(liczba){
    const liczbaStr = String(liczba);
    const odwrocona = [];
for(i = liczbaStr.length -1; i >= 0; i--)
{
odwrocona.push(liczbaStr[i]);
}
return Number(odwrocona.join(''));

//alternatywa ^^
return (liczba.toString().split(' ')).reverse().join('');
}

