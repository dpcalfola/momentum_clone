// console.log("test");
const loginForm = document.querySelector(".login_form");

const loginInput = loginForm.querySelector("input");

function onLoginSubmit(event) {
  event.preventDefault();

  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
