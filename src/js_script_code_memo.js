// ========????  code : how to check up vlaue length    ????==========

function handleLoginBtnClick() {
  const userName = loginInput.value;
  if (userName.length > 15) {
    console.log("Momentum error : Too long name");
  } else if (userName === "") {
    console.log("Please write your name");
  } else {
    console.log("hello", userName);
  }
}
loginbutton.addEventListener("click", handleLoginBtnClick);
//
//
//

//
// ========????  code : about preventDefault() function  ????==========

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

const linkClick = document.querySelector("a");
linkClick.addEventListener("click", handleLinkClick);
//
//
//

// ========????  code : both codes are same  ????==========
//
loginGreeting.innerText = "Wellcome " + userName + " !!";
loginGreeting.innerText = `Wellcome ${userName} !!`;
// ` <-- backtick : left of 'NUM1' keypad
//
//
//

localStorage.setItem("userName", "Fola");
localStorage.getItem("userName");
localStorage.removeItem("userName");
