"use strict";

class PopUp {
  constructor() {
    this.popup = document.querySelector(".pop-up");
    this.popupMessage = document.querySelector(".pop-up__message");
    this.popupRefresh = document.querySelector(".pop-up__refresh");
    this.popupRefresh.addEventListener("click", () => {
      this.onClick && this.onclick();
      hide();
    });
  }

  setClickListener(onClick) {
    this.Onclick = onClick;
  }

  hide() {
    this.popup.classList.add("pop-up--hide");
  }
}
