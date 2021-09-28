const loginForm = document.querySelector(".login_form");
const loginInput = loginForm.querySelector("input");
const loginGreeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME = "localStorageUserName";

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;

  localStorage.setItem(USERNAME, userName);

  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintLoginGreeting(userName);
}

const savedUserName = localStorage.getItem(USERNAME);

function paintLoginGreeting(agmt) {
  loginGreeting.classList.remove(HIDDEN_CLASSNAME);
  loginGreeting.innerText = `Wellcome ${agmt} !!`;
}

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintLoginGreeting(savedUserName);
}

// console.log(document);
