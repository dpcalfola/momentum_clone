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

// ========????  code : how to use localStorage  ????==========
localStorage.setItem("userName", "Fola");
localStorage.getItem("userName");
localStorage.removeItem("userName");
//
//
//
//

// ========????  code : inverval and timeout  ????==========
function intervalSayHello() {
  console.log("hello : every 3second");
}

function timeoutSayHello() {
  console.log("hello : after 1second at once");
}

setInterval(intervalSayHello, 3000); // 3000 ->> 3000ms == 3sec
setTimeout(timeoutSayHello, 1000);
//
//
//

//// ========????  code : .padStart , .padEnd ????==========

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  // <- 2:min chracter(String), if chracter is less than 2, function will fill "0"
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

//
