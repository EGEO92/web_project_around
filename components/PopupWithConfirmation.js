import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleConfirmation) {
    super(popupSelector);
    this.handleConfirmation = handleConfirmation;
    this.confirmationBtn = document.querySelector(
      ".popup__submit-confirmation"
    );
    this.formElement = this._popupElement.querySelector(
      ".profile__form-confirmation"
    );
    this.cardId = "";
  }
  open(cardId) {
    this.cardId = cardId;
    super.open();
  }
  close() {
    super.close();
  }
  setEventListeners() {
    super.addEventListeners();
    this.formElement.addEventListener("submit", () => {
      this.handleConfirmation(this.cardId);
      this.close();
    });
  }
}
