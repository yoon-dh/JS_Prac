"use strict";

export default class PopUp {
  constructor() {
    this.popup = document.querySelector(".pop-up");
    this.popupMessage = document.querySelector(".pop-up__message");
    this.popupRefresh = document.querySelector(".pop-up__refresh");
    this.popupRefresh.addEventListener("click", () => {
      this.onClick && this.onClick();
      this.hide();
    });
  }

  setClickListener(onClick) {
    this.onClick = onClick;
  }

  showWithText(text) {
    this.popupMessage.innerText = text;
    this.popup.classList.remove("pop-up--hide");
  }

  hide() {
    this.popup.classList.add("pop-up--hide");
  }
}
