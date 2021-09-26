console.log("test");
const loginForm = document.querySelector(".login_form");

const loginInput = loginForm.querySelector("input");
const loginbutton = loginForm.querySelector("button");

function handleLoginBtnClick() {
  console.log("click!!");
  // console.dir(loginInput);
  console.log("Hello!!", loginInput.value);
}

loginbutton.addEventListener("click", handleLoginBtnClick);
