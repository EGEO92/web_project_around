import {
  popupShow,
  popupAddShow,
  opacityHeader,
  opacityFooter,
  opacityPlaces,
  opacity,
  opacityProfile,
  editButton,
  closeButton,
  closeAddButton,
  cardPlaces,
  initialCards,
  formProfileElement,
  formAddCard,
  changeName,
  changeOccupation,
  inputName,
  inputOccupation,
  inputTitle,
  inputImg,
  addButton,
  pageClose,
  inputKey,
} from "./utils.js";

import Card from "./card.js";
import FormValidator from "./FormValidator.js";

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    const newValidator = new FormValidator(settings, formElement);
    newValidator._setEventListeners();
  });
};

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit-disabled",
  inputErrorClass: "form__input-invalid",
  errorClass: "form__error",
});

initialCards.forEach((element) => {
  const initialCard = new Card(element.name, element.link);
  cardPlaces.append(initialCard.createCard());
});

export function putOpacity() {
  opacity.classList.add("popup__show");
  opacityHeader.classList.add("page__popup");
  opacityProfile.classList.add("page__popup");
  opacityPlaces.classList.add("page__popup");
  opacityFooter.classList.add("page__popup");
}

export function removeOpacity() {
  opacity.classList.remove("popup__show");
  opacityHeader.classList.remove("page__popup");
  opacityProfile.classList.remove("page__popup");
  opacityPlaces.classList.remove("page__popup");
  opacityFooter.classList.remove("page__popup");
}

function openProfilePopup() {
  popupShow.classList.add("popup__show");
  putOpacity();
}

function closeProfilePopup() {
  popupShow.classList.remove("popup__show");
  removeOpacity();
}

function openAddPopup() {
  popupAddShow.classList.add("popup__show");
  putOpacity();
}

function closeAddPopup() {
  popupAddShow.classList.remove("popup__show");
  removeOpacity();
}

addButton.addEventListener("click", openAddPopup);
editButton.addEventListener("click", openProfilePopup);
closeButton.addEventListener("click", closeProfilePopup);
closeAddButton.addEventListener("click", closeAddPopup);
pageClose.addEventListener("click", closeAddPopup);
pageClose.addEventListener("click", closeProfilePopup);

inputKey.addEventListener("keydown", function (input) {
  if (input.key === "Escape") {
    closeAddPopup();
    closeProfilePopup();
  }
});

function formMakeChanges(evt) {
  evt.preventDefault();
  changeName.textContent = inputName.value;
  changeOccupation.textContent = inputOccupation.value;
  closeProfilePopup();
}

function addCards(evt) {
  evt.preventDefault();

  const newCard = new Card(inputTitle.value, inputImg.value);

  cardPlaces.prepend(newCard.createCard());
  closeAddPopup();
}

formProfileElement.addEventListener("submit", formMakeChanges);
formAddCard.addEventListener("submit", addCards);
