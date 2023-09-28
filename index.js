let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");
// const date = new Date();
// const time = date.getHours();
// if (time >= 12) {
//   ampm.innerHTML = "PM";
// }

function updateTime() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let Ampm = "AM";
  if (h >= 12) {
    h = h - 12;
    Ampm = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  hour.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = Ampm;
  setTimeout(() => {
    updateTime();
  }, 1000);
}

updateTime();
