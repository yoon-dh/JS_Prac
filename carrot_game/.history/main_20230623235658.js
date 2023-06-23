"use strict";

// carrot & bug random position

const CARROT_SIZE = 80;

const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();

function initGame() {
  addItem("carrot", 5, "img/carrot.png");
  addItem("bug", 5, "img/bug.png");
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - CARROT_SIZE;
  const y2 = fieldRect.height - CARROT_SIZE;

  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", imgPath);
    item.style.position = "absolute";
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

initGame();
// const gameField = document.querySelector(".game__field");
// const gameBtn = document.querySelector(".game__button");

// function addCarrot() {
//   const carrot = document.createElement("img");
//   carrot.setAttribute("src", "img/carrot.png");
//   carrot.setAttribute("alt", "carrot");
//   carrot.style.position = "absolute";
//   carrot.style.left = `${Math.random() * (gameField.offsetWidth - 80)}px`;
//   carrot.style.top = `${Math.random() * (gameField.offsetHeight - 80) + 250}px`;
//   gameField.appendChild(carrot);
// }

// function addBug() {
//   const bug = document.createElement("img");
//   bug.setAttribute("src", "img/bug.png");
//   bug.setAttribute("alt", "bug");
//   bug.style.position = "absolute";
//   bug.style.left = `${Math.random() * (gameField.offsetWidth - 50)}px`;
//   bug.style.top = `${Math.random() * (gameField.offsetHeight - 50) + 250}px`;
//   gameField.appendChild(bug);
// }

// gameBtn.addEventListener("click", () => {
//   for (let i = 0; i < 10; i++) {
//     addCarrot();
//     addBug();
//   }
// });
