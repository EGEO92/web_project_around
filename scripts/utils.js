const popupShow = document.querySelector("#profile-popup");
const popupAddShow = document.querySelector("#cards-popup");
const opacityHeader = document.querySelector(".header");
const opacityProfile = document.querySelector(".profile");
const opacityPlaces = document.querySelector(".places");
const opacityFooter = document.querySelector(".footer");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close");
const closeAddButton = document.querySelector(".popup__closeadd");
const opacity = document.querySelector(".page-filter");
const cardPlaces = document.querySelector(".places");
const template = document.querySelector("#plantilla");
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
const formProfileElement = document.querySelector(".popup__form-profile");
const formAddCard = document.querySelector(".popup__form-add");
const changeName = document.querySelector(".profile__name");
const changeOccupation = document.querySelector(".profile__occupation");
const inputName = document.querySelector("#name");
const inputOccupation = document.querySelector("#about");
const inputTitle = document.querySelector("#place");
const inputImg = document.querySelector("#link");
const addButton = document.querySelector(".profile__add-button");
const pageClose = document.querySelector(".page-filter");
const inputKey = document.querySelector(".page");

export {
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
  template,
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
};
