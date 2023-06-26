"use strict";

export default class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.querySelector(".game__field");
    this.fieldRect = field.getBoundingClientRect();
    this.field.addEventListener("click", this.onClick);
  }

  init() {
    field.innerHTML = "";
    addItem("carrot", CARROT_COUNT, "img/carrot.png");
    addItem("bug", BUG_COUNT, "img/bug.png");
  }

  onClick(event) {}
}
