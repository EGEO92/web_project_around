const popupShow = document.querySelector(".popup");
const opacityHeader = document.querySelector(".header");
const opacityProfile = document.querySelector(".profile");
const opacityPlaces = document.querySelector(".places");
const opacityFooter = document.querySelector(".footer");
const editBottun = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close");

function openPopup() {
  popupShow.classList.add("popup__show");
  opacityHeader.classList.add("page__popup");
  opacityProfile.classList.add("page__popup");
  opacityPlaces.classList.add("page__popup");
  opacityFooter.classList.add("page__popup");
}

function closePopup() {
  popupShow.classList.remove("popup__show");
  opacityHeader.classList.remove("page__popup");
  opacityProfile.classList.remove("page__popup");
  opacityPlaces.classList.remove("page__popup");
  opacityFooter.classList.remove("page__popup");
}

editBottun.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);

const formElement = document.querySelector(".popup__form");
const changeName = document.querySelector(".profile__name");
const changeOccupation = document.querySelector(".profile__occupation");
const inputName = document.querySelector("#name");
const inputOccupation = document.querySelector("#about");

function formMakeChanges(evt) {
  evt.preventDefault();
  changeName.textContent = inputName.value;
  changeOccupation.textContent = inputOccupation.value;
  closePopup();
}

formElement.addEventListener("submit", formMakeChanges);
