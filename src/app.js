// console.log("test");
const loginForm = document.querySelector(".login_form");
const loginInput = loginForm.querySelector("input");
const loginGreeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  console.log(userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loginGreeting.classList.remove(HIDDEN_CLASSNAME);

  loginGreeting.innerText = `Wellcome ${userName} !!`;
  console.log(document);
}

loginForm.addEventListener("submit", onLoginSubmit);
