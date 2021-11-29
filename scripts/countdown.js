/*Este contador muestra cuanto falta para el siguiente lanzamiento, en realidad este lanzamiento es el día 30 de noviembre pero con los fines
de presentarlo en el proyecto con la versión más reciente le puse un timer hasta fin de año*/
let end = new Date("12/31/2021 9:30 AM");

let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let timer;

function showRemaining() {
  let now = new Date();
  let distance = end - now;
  if (distance < 0) {
    clearInterval(timer);
    window.open(
      "https://store.playstation.com/en-us/product/UP3509-PPSA02048_00-DEADBYDAYLIGHT00"
    );
    return;
  }
  let days = Math.floor(distance / _day);
  let hours = Math.floor((distance % _day) / _hour);
  let minutes = Math.floor((distance % _hour) / _minute);
  let seconds = Math.floor((distance % _minute) / _second);

  document.getElementById("Days").innerText = days;
  document.getElementById("Hours").innerText = hours;
  document.getElementById("Minutes").innerText = minutes;
  document.getElementById("Seconds").innerText = seconds;
}

timer = setInterval(showRemaining, 1000);
