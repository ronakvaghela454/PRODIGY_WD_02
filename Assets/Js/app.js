let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");
let start = document.getElementById("btn-start");
let pause = document.getElementById("btn-pause");
let reset = document.getElementById("btn-reset");

let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    hh.textContent = hours < 10 ? "0"+hours+":" : hours +":";
    mm.textContent = minutes < 10 ? "0" + minutes + ":"  : minutes +":";
    ss.textContent = seconds < 10 ? "0" + seconds : seconds;
}

start.onclick = function() {
    if (!interval) {
        interval = setInterval(updateTime, 10);
    }
}

pause.onclick = function() {
    clearInterval(interval);
    interval = null;
}

reset.onclick = function() {
    clearInterval(interval);
    interval = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    hh.textContent = "00"+":";
    mm.textContent = "00"+":";
    ss.textContent = "00";
}