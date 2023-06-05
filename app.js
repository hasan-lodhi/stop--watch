var hrs = document.getElementById("hrs");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

var hrsVal = 0;
var minVal = 0;
var secVal = 0;

var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var resetBtn = document.getElementById("resetBtn");

var interval;

function renderTime() {
  hrs.innerHTML = hrsVal;
  min.innerHTML = minVal;
  sec.innerHTML = secVal;
}

function timer() {
  secVal++;
  if (secVal == 60) {
    minVal++;
    secVal = 0;
  }
  if (minVal == 60) {
    hrsVal++;
    minVal = 0;
  }
  renderTime();
}

function startTime() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  interval = setInterval(function () {
    timer();
  }, 1000);
}

function stopTime() {
  stopBtn.disabled = true;
  startBtn.disabled = false;
  clearInterval(interval);
}
function resetTime() {
  hrsVal = 0;
  minVal = 0;
  secVal = 0;
  renderTime();
  stopTime();
}