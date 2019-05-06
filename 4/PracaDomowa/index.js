let test1 = false; 
let test2 = false; 
let test3 = false; 
let test4 = false; 

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let isBtn1Clicked = false;

btn1.addEventListener("click", () => {
    if(test1 == false){
        const div = document.createElement("div");
        test1 = true;
        console.log(div);
    }else{
        //jak usunąć element bez id || jak nadać id tworzonemu elementowi
        test1 = false;
    }
});


btn2.addEventListener("click", () => {
    const div = document.createElement('div');
    console.log(div);
});

btn3.addEventListener("click", () => {
    const div = document.createElement('div');
    console.log(div);
});

btn4.addEventListener("click", () => {
    const div = document.createElement('div');
    console.log(div);
});