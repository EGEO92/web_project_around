import "./styles/index.css";
import headerSrc from "./images/header_title.png";
import profileSrc from "./images/AvatarJacques_Cousteau.png";
import prflEditBtnImgSrc from "./images/Edit_Button.png";
import adddBtnImgSrc from "./images/Add_Button.png";
import closeBtnImgSrc from "./images/Close_Icon.png";
import {
  editButton,
  cardPlaces,
  initialCards,
  inputTitle,
  inputImg,
  addButton,
} from "../components/utils.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

const headerImg = document.getElementById("header_title");
headerImg.src = headerSrc;
const profileImg = document.getElementById("profile__image");
profileImg.src = profileSrc;
const prflEditBtn = document.getElementById("profile__editbutton-image");
prflEditBtn.src = prflEditBtnImgSrc;
const addBtnImg = document.querySelector("#profile__addbutton-image");
addBtnImg.src = adddBtnImgSrc;
const closeBtnImg = document.getElementById("close__image");
closeBtnImg.src = closeBtnImgSrc;
const closeBtnImg1 = document.getElementById("close__image1");
closeBtnImg1.src = closeBtnImgSrc;
const closeBtnImg2 = document.getElementById("close__image2");
closeBtnImg2.src = closeBtnImgSrc;

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  descriptionSelector: ".profile__occupation",
});

const popupProfile = new PopupWithForm("#profile-popup", (input) => {
  userInfo.setUserInfo({ name: input.name, description: input.about });
});
popupProfile.setEventListeners();

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

addButton.addEventListener("click", () => {
  popupAddCard.open();
});
editButton.addEventListener("click", () => {
  popupProfile.open();
});

const popupImg = new PopupWithImage(".places__popupcard");
popupImg.setEventListeners();

const popupAddCard = new PopupWithForm("#cards-popup", () => {
  const newCard = new Card(inputTitle.value, inputImg.value, (title, link) =>
    popupImg.handleOpen(link, title)
  ).createCard();

  cardPlaces.prepend(newCard);
  popupAddCard.close();
});
popupAddCard.setEventListeners();

const defaultCards = new Section(
  {
    items: initialCards,
    renderer: (element) => {
      const cards = new Card(element.name, element.link, () => {
        popupImg.handleOpen(element.name, element.link);
      });
      const cardElement = cards.createCard();
      defaultCards.addItem(cardElement);
    },
  },
  ".places"
);

defaultCards.renderItems();
