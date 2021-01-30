let garland = document.querySelector(".garland");

//insert garland
for (let i = 0; i < 30; i++)
garland.innerHTML += '<div class="red blur"></div>\n' +
    '        <div class="blue"></div>\n' +
    '        <div class="yellow"></div>\n' +
    '        <div class="green"></div>';
//
let reds = document.querySelectorAll(".red");
let blues = document.querySelectorAll(".blue");
let greens = document.querySelectorAll(".green");
let yellows = document.querySelectorAll(".yellow");

function unsetStatus(){
    for (let i = 0; i < reds.length;i++)
        reds[i].classList.remove("blur")
    for (let i = 0; i < blues.length;i++)
        blues[i].classList.remove("blur");
    for (let i = 0; i < yellows.length;i++)
        yellows[i].classList.remove("blur");
    for (let i = 0; i < greens.length;i++)
        greens[i].classList.remove("blur");
}

function successively(){
    if(reds[0].classList.contains("blur")){
        for (let i = 0; i < reds.length;i++)
            reds[i].classList.remove("blur")
        for (let i = 0; i < blues.length;i++)
            blues[i].classList.add("blur");
    }
    else if(blues[0].classList.contains("blur")){
        for (let i = 0; i < blues.length;i++)
            blues[i].classList.remove("blur");
        for (let i = 0; i < yellows.length;i++)
            yellows[i].classList.add("blur");
    }
    else if(yellows[0].classList.contains("blur")){
        for (let i = 0; i < yellows.length;i++)
            yellows[i].classList.remove("blur");
        for (let i = 0; i < greens.length;i++)
            greens[i].classList.add("blur");
    }
    else {
        for (let i = 0; i < greens.length;i++)
            greens[i].classList.remove("blur");
        for (let i = 0; i < reds.length;i++)
            reds[i].classList.add("blur");
    }
}

function inPairs(){
    if(!reds[0].classList.contains("blur")){
        for (let i = 0; i < reds.length;i++) {
            reds[i].classList.add("blur")
            yellows[i].classList.add("blur")
            blues[i].classList.remove("blur")
            greens[i].classList.remove("blur")
        }
    }
    else {
        for (let i = 0; i < reds.length;i++) {
            reds[i].classList.remove("blur")
            yellows[i].classList.remove("blur")
            blues[i].classList.add("blur")
            greens[i].classList.add("blur")
        }
    }
}


let onStop = document.querySelector(".onStop");
let onSuccessively = document.querySelector(".onSuccessively");
let onInPairs = document.querySelector(".onInPairs");
let inLine = setInterval(successively,500);
let inP;


function stopSuccessively(inLine){
    unsetStatus();
    clearInterval(inLine);
}
function stopInPairs(inP){
    unsetStatus();
    clearInterval(inP);
}

onStop.onclick = function(){
    stopSuccessively(inLine);
    stopInPairs(inP);
}
onSuccessively.onclick = function (){
    stopInPairs(inP);
    inLine = setInterval(successively,500);
}
onInPairs.onclick = function (){
    stopSuccessively(inLine);
    inP = setInterval(inPairs,2000);
}