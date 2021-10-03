console.log(document);

const images = ["001.jpg", "002.jpg", "003.jpg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const backImg = document.createElement("img");

backImg.src = `img/${chosenImg}`;

document.body.append(backImg);
