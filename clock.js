const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  let seconds = date.getSeconds();
  if (seconds >= 0 && seconds <= 9) {
    seconds = "0" + String(seconds);
  }
  if (minutes >= 0 && minutes <= 9) {
    minutes = "0" + String(minutes);
  }
  if (hours >= 0 && hours <= 9) {
    hours = "0" + String(hours);
  }
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
