// carrot & bug random position

const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();

function initGame() {
  console.log(fieldRect);
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
