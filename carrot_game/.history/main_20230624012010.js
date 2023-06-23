"use strict";

// carrot & bug random position

const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;

const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();

function initGame() {
  addItem("carrot", CARROT_COUNT, "img/carrot.png");
  addItem("bug", BUG_COUNT, "img/bug.png");
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

// time & carrot count

const gameBtn = document.querySelector(".game__button");
const timer = document.querySelector(".game__timer");
const score = document.querySelector(".game__score");

let countdown; // 타이머 식별자
let time = 10; // 초기 시간 설정 (단위: 초)

function startTimer() {
  countdown = setInterval(() => {
    time--;
    updateTimerDisplay();
  }, 1000);
}

function updateTimerDisplay() {
  timer.textContent = time;
}

gameBtn.addEventListener("click", () => {
  startTimer();
});
