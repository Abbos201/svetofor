// function hello () {
//     alert("Abbos")
// }
// setTimeout(hello, 3000);
// setInterval(hello, 3000);

let rounds = document.querySelectorAll(".round1");
let yellow = document.querySelector(".yellow");
let yellowtimetext = document.querySelector("h2");
// console.log(rounds);
let i = 0;
function time(){
    rounds.item(i).classList.remove("opacity");
    i = (i+1) % rounds.length;
    rounds.item(i).classList.add("opacity")
}

rounds.item(i).classList.add("opacity");

setInterval(time, 10000);

// yellow time
let times = 9;

function yellowtime(){
    yellowtimetext.innerHTML = times;
    if(times >= 1 && times <= 3) {
        yellow.classList.add("opacity");
    } else {
        yellow.classList.remove("opacity");
    }

    times--;

    if(times == 0) {
        times = 10;
    }
}

setInterval(yellowtime, 1000)