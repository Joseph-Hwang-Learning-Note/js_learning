const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greetings = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
  console.log("Item's saved");
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
  form.classList.remove(SHOWING_CN);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greetings.classList.add(SHOWING_CN);
  greetings.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    document.querySelector(".form").style.display = "none";
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
