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
  loginGreeting.innerText = `Wellcome ${userName} !!`;
  loginGreeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginGreeting.classList.remove(HIDDEN_CLASSNAME);
  loginGreeting.innerText = `Wellcome ${savedUserName} !!`;
}

console.log(document);
