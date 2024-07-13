import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popupElement.querySelector(".places__popupimg");
    this._title = this._popupElement.querySelector(".places__popuptitle");
  }

  handleOpen(name, link) {
    super.open();
    this._image.src = link;
    this._image.alt = name;
    this._title = name;
  }

  setEventListeners() {
    super.addEventListeners();
    this._image.addEventListener("click", () => {
      this.handleOpen();
    });
  }
}
