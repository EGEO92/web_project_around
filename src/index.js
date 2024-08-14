import "./styles/index.css";
import headerSrc from "./images/header_title.png";
// import profileSrc from "./images/AvatarJacques_Cousteau.png";
import prflEditBtnImgSrc from "./images/Edit_Button.png";
import adddBtnImgSrc from "./images/Add_Button.png";
import closeBtnImgSrc from "./images/Close_Icon.png";
import {
  editButton,
  cardPlaces,
  editAvatarBtn,
  addButton,
} from "../components/utils.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import { api } from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

const headerImg = document.getElementById("header_title");
headerImg.src = headerSrc;
export const profileImg = document.getElementById("profile__image");
// profileImg.src = profileSrc;
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
const closeBtnImg3 = document.getElementById("close__image3");
closeBtnImg3.src = closeBtnImgSrc;
const closeBtnImg4 = document.getElementById("close__image4");
closeBtnImg4.src = closeBtnImgSrc;

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

export const popupImg = new PopupWithImage(".card");
popupImg.setEventListeners();

export const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  descriptionSelector: ".profile__occupation",
});
api.getInitialCards().then((result) => {
  const defaultCards = new Section(
    {
      items: result,
      renderer: (element) => {
        const cards = new Card(
          element,
          () => {
            popupImg.handleOpen(element.name, element.link);
          },
          userInfo._userId,
          () => {
            popupConfirm.open(cards._id);
            //api.removeCard(cards._id);
            // popupConfirm.open(() => {});
          },
          () => {
            api.addLike(cards._id).then((response) => {
              cards.updateLikeCounter(response.likes);
            });
          },
          () => {
            api.removeLike(cards._id).then((response) => {
              cards.updateLikeCounter(response.likes);
            });
          }
        );
        const cardElement = cards.createCard();
        defaultCards.addItem(cardElement);
      },
    },
    ".places"
  );
  defaultCards.renderItems();
}); //crear las cartas iniciales
api.getUserInfo(); //setear la informacion de usuario

//mi token 072a79cd-90d0-408b-be9c-36f27d8f66a3

const popupProfile = new PopupWithForm("#profile-popup", (input) => {
  api.editUserInfo(input);
}); // editar nombre y ocupacion de usuario
popupProfile.setEventListeners();
editButton.addEventListener("click", () => {
  popupProfile.open();
});

const popupAvatar = new PopupWithForm("#avatar-popup", (input) => {
  api.editUserAvatar(input);
}); //editar avatar de usuario
popupAvatar.setEventListeners();
editAvatarBtn.addEventListener("click", () => {
  popupAvatar.open();
});

const popupAddCard = new PopupWithForm("#cards-popup", (input) => {
  api.addCard(input).then((result) => {
    const newCard = new Card(
      result,
      (title, link) => {
        popupImg.handleOpen(link, title);
      },
      userInfo._userId,
      () => {
        popupConfirm.open(newCard._id);
        //api.removeCard(newCard._id);
      },
      () => {
        api.addLike(newCard._id).then((response) => {
          console.log(response);
          newCard.updateLikeCounter(response.likes);
        });
      },
      () => {
        api.removeLike(newCard._id).then((response) => {
          newCard.updateLikeCounter(response.likes);
        });
      }
    ); //.createCard();
    console.log(userInfo._userId);
    cardPlaces.prepend(newCard.createCard());
    popupAddCard.close();
  }); //manda POST con la carta nueva y la agrega tambien de manera local temporal
});
popupAddCard.setEventListeners();
addButton.addEventListener("click", () => {
  popupAddCard.open();
});

export const popupConfirm = new PopupWithConfirmation(
  ".card__popup-confirmation",
  (cardToDelete) => {
    api.removeCard(cardToDelete).then(() => {
      popupConfirm.close();
    });
  }
);
popupConfirm.setEventListeners();
