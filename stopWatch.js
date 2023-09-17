/* Stop Watch */
let hr = document.querySelector(".hr");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let ms = document.querySelector(".ms");
let str = document.querySelector(".bt1");
let stp = document.querySelector(".bt2");
let rst = document.querySelector(".bt3");
let result = document.querySelector(".result");
let counter = 0;
let timer = false;
let hrt = 0;
let mint = 0;
let sect = 0;
let mst = 0;

str.addEventListener("click", function () {
timer = true;
stopwatch();
result.innerHTML = "Time is Start.";
});
stp.addEventListener("click", function () {
timer = false;
result.innerHTML = "Time is Stop.";
});
rst.addEventListener("click", function () {
timer = false;
hrt = 0;
mint = 0;
sect = 0;
mst = 0;
hr.innerHTML = hrt + "0";
min.innerHTML = mint + "0";
sec.innerHTML = sect + "0";
ms.innerHTML = mst + "0";
result.innerHTML = "Time is Reset.";
});
function stopwatch() {
if (timer == true) {
    counter = counter + 1;
    if (counter == 100) {
    sect = sect + 1;
    counter = 0;
    }
    if (sect == 60) {
    mint = mint + 1;
    sect = 0;
    }
    if (mint == 60) {
    hrt = hrt + 1;
    mint = 0;
    }
    let hrst = hrt;
    let minst = mint;
    let secst = sect;
    if (sect < 10) {
    secst = "0" + sect;
    }
    if (mint < 10) {
    minst = "0" + mint;
    }
    if (hrt < 10) {
    hrst = "0" + hrt;
    }
    hr.innerHTML = `${hrst}`;
    min.innerHTML = `${minst}`;
    sec.innerHTML = `${secst}`;
    ms.innerHTML = counter;
    setTimeout("stopwatch()", 10);
}
}