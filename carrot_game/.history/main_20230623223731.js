// carrot & bug random position

const gameField = document.querySelector(".game__field");
const gameBtn = document.querySelector(".game__button");

function addCarrot() {
  gameField.innerHTML = `
        <img src="img/carrot.png" alt="carrot">
    `;
}

function addBug() {
  gameField.innerHTML = `
        <img src="img/bug.png" alt="carrot">
    `;
}

console.log(gameBtn);
gameBtn.addEventListener("click", () => {
  addCarrot();
  addBug();
});
