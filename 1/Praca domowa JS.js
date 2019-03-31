//Zadanie 1.
function funkcja1(miesiac, imie){
    if(miesiac === grudzien || styczen || luty){
         return imie + "lubi zimę";
    }
    else if(miesiac === marzec || kwiecien || maj){
        return imie + "kocha wiosnę";
    }
    else if(miesiac === czerwiec || lipiec || sierpien){
        return imie + "się opala";
    }
    else if(miesiac === wrzesien || pazdziernik || listopad){
        return imie + "musi wrócić na studia";
    }
}
//Zadanie 2.
const zdanie = "Ala ma kota";
function odwrot(zdanie){
    return (zdanie.reverse().join(''));
}
//Zadanie 3.
for(i=0; i=15; i++){
    if (i%2===0){
        return "parzysta";
    }
    else{
        return "nieparzysta";
    }
}