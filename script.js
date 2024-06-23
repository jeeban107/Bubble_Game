function makeBubble() {
  var cultter = "";

  for (var i = 1; i <= 160; i++) {
    var rnum = Math.floor(Math.random() * 10);
    cultter += `<div class="bubble">${rnum}</div>`;
  }
  document.querySelector(".p-btm").innerHTML = cultter;
}

var time = 4;

function runTimer() {
  setInterval(function () {
    if (time > 0) {
      time--;
      document.querySelector("#timer").textContent = time;
    }
  }, 1000);
}

runTimer();
makeBubble();
