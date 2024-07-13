export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._pageFilter = document.querySelector(".page-filter");
    this._inputKey = document.querySelector(".page");
    this._closeBtn = this._popupElement.querySelector(".popup__close");
    this.addEventListeners();
  }

  open() {
    this._popupElement.classList.add("popup__show");
    this._pageFilter.classList.add("popup__show");
  }

  close() {
    this._popupElement.classList.remove("popup__show");
    this._pageFilter.classList.remove("popup__show");
  }

  handleClickOutside() {
    this._pageFilter.addEventListener("click", () => {
      this.close();
    });
  }
  handleEscapeKey() {
    this._inputKey.addEventListener("keydown", (input) => {
      if (input.key === "Escape") {
        this.close();
      }
    });
  }
  addEventListeners() {
    this._closeBtn.addEventListener("click", () => {
      this.close();
    });
    this.handleClickOutside();
    this.handleEscapeKey();
  }
}
