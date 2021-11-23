
/* ---------- 関数 ---------- */
function uranau() {
  var n = Math.floor(Math.random() * 100 + 1);
  var s = "A";
  if (n <= 1) {
    s = "考課でS";
  } else if (n <= 5) {
    s = "C";
  } else if (n <= 20) {
    s = "B";
  }
  return s + "の予感";
}

/* ---------- ボタン ---------- */

function buttonClick(){
  document.getElementById("result").innerText = uranau();
}

