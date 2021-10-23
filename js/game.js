const $ = (id) => document.getElementById(id);
let jump = 0;
let des = 0;
let turn = 0;

//--------------------------------------------------------------------
function winPos() {
  return ((des - 1) % (jump + 1)) + (jump + 1) * turn;
}

function AIMove(curNum) {
  return Math.abs(winPos() - curNum);
}

function reset() {
  window.history.go(-1);
}

//--------------------------------------------------------------------
window.onload = () => {
  jump = +localStorage.getItem("jump");
  des = +localStorage.getItem("des");

  $("desNum").innerHTML = des;
  $("input").max = localStorage.getItem("jump");

  $("choice").innerHTML = $("input").value;

  if (winPos() < jump) {
    $("aiChoice").innerHTML = "+" + AIMove(-1);
    $("curNum").innerHTML = AIMove(-1);
    turn = 1;
  }
};

//--------------------------------------------------------------------
$("input").onchange = (e) => {
  $("choice").innerHTML = e.target.value;
};

//---------------------------------- next ----------------------------------
windows.onload = () => {
  $("next").onclick = () => {
    let curVal = $("curNum").innerText;
    let pos = +curVal;

    pos += parseInt($("input").value);
    $("curNum").value = pos;
    $("curNum").innerHTML = pos;
    if (pos >= des) {
      alert("You Won🎉🤝");
      reset();
    }
  };

  //---------------------------------- AI Turn ----------------------------------

  setTimeout(() => {
    curVal = AIMove(pos - 1);
    $("aiChoice").innerHTML = "+" + curVal;
    $("curNum").innerHTML = pos + curVal;
    if (pos + curVal == des) {
      alert("AI choose : " + curVal + "\nAI Wins🎉🥳");
      reset();
    } else {
      alert("AI's Choose : " + "+" + curVal);
      turn++;
    }
  }, 50);
};
//---------------------------------- Reset ----------------------------------
$("reset").onclick = () => {
  reset();
};
