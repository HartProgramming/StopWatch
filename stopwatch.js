let start = document.querySelector("#start");
let hunds = document.querySelector("#hunds");
let tens = document.querySelector("#tens");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let firstDigit = 0;
let secondDigit = 0;
let turnOver;
let startWatch;

function first(){
    turnOver = false;
    firstDigit = firstDigit + 1;
    hunds.textContent = firstDigit;
    if(firstDigit === 60){
        secondDigit = secondDigit + 1;
        tens.textContent = secondDigit;
        turnOver = true;
        if(turnOver === true){
            firstDigit = 0;
        }
    }
}





start.addEventListener("click", function(){
   startWatch = setInterval(first, 1000);

})
function clear() {
    clearInterval(startWatch);
}

stop.addEventListener("click", function () {
    clear();
})

reset.addEventListener("click",function(){
    firstDigit = 0;
    secondDigit;
})