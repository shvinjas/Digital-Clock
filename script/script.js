const clock = document.querySelector(".clock");

function runClock() {
  var time = new Date();
  var hrs = time.getHours();
  var mins = time.getMinutes();
  var secs = time.getSeconds();
  var txt = "AM";

  if (hrs > 12) {
    hrs = hrs - 12;
    txt = "PM";
  } else if (hrs == 0) {
    hrs = 12;
    txt = "AM";
  }

  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  clock.innerHTML = `${hrs} : ${mins} : ${secs}  ${txt}`;
}

setInterval(runClock, 100);
