var time = 60;
var score= 0;

function increaseScore(){
    score +=10;
    document.querySelector("#scoreval").textContent=score;
}


function newHit(){
  var rn = Math.floor(Math.random()*10);
  document.querySelector("#newhit").innerHTML= rn;
}


function makeBubble() {
  var cultter = "";

  for (var i = 1; i <= 160; i++) {
    var rnum = Math.floor(Math.random() * 10);
    cultter += `<div class="bubble">${rnum}</div>`;
  }
  document.querySelector(".p-btm").innerHTML = cultter;
}


function runTimer() {
  var timerInv =setInterval(function () {
    if (time > 0) {
      time--;
      document.querySelector("#timer").textContent = time;
    }
    else{
        clearInterval(timerInv)
    }
  }, 1000);
}

newHit();
runTimer();
makeBubble();

