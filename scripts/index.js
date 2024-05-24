const popupShow = document.querySelector("#profile-popup");
const popupAddShow = document.querySelector("#cards-popup");
const opacityHeader = document.querySelector(".header");
const opacityProfile = document.querySelector(".profile");
const opacityPlaces = document.querySelector(".places");
const opacityFooter = document.querySelector(".footer");
const editBottun = document.querySelector(".profile__edit-button");
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

function createCards(name, link) {
  const card = template.cloneNode(true).content.querySelector(".places__card");
  const cardImg = card.querySelector(".places__image");
  const cardTitle = card.querySelector(".places__text");
  const deleteBtn = card.querySelector(".places__button-trash");
  const likeBtn = card.querySelector(".places__button-like");
  const popupCard = card.querySelector(".places__popupcard");
  const popupImg = card.querySelector(".places__popupimg");
  const popupTitle = card.querySelector(".places__popuptitle");
  const popupImgClose = card.querySelector(".popup__closecard");

  deleteBtn.addEventListener("click", function () {
    card.remove();
  });
  likeBtn.addEventListener("click", function () {
    likeBtn.classList.toggle("places__button-likeactive");
  });
  cardImg.src = link;
  cardTitle.textContent = name;

  cardImg.addEventListener("click", function () {
    popupCard.classList.add("popup__show");
    popupImg.src = link;
    popupTitle.textContent = name;
    opacityOn();
    opacityPlaces.classList.remove("page__popup");
  });

  popupImgClose.addEventListener("click", function () {
    opacityOff();
    popupCard.classList.remove("popup__show");
    cardImg.classList.remove("page__popup");
  });

  cardPlaces.append(card);
}

initialCards.forEach(function (item) {
  createCards(item.name, item.link);
});

function opacityOn() {
  opacity.classList.add("popup__show");
  opacityHeader.classList.add("page__popup");
  opacityProfile.classList.add("page__popup");
  opacityPlaces.classList.add("page__popup");
  opacityFooter.classList.add("page__popup");
}

function opacityOff() {
  opacity.classList.remove("popup__show");
  opacityHeader.classList.remove("page__popup");
  opacityProfile.classList.remove("page__popup");
  opacityPlaces.classList.remove("page__popup");
  opacityFooter.classList.remove("page__popup");
}

function openProfilePopup() {
  popupShow.classList.add("popup__show");
  opacityOn();
}

function closeProfilePopup() {
  popupShow.classList.remove("popup__show");
  opacityOff();
}

function openAddPopup() {
  popupAddShow.classList.add("popup__show");
  opacityOn();
}

function closeAddPopup() {
  popupAddShow.classList.remove("popup__show");
  opacityOff();
}

addButton.addEventListener("click", openAddPopup);
editBottun.addEventListener("click", openProfilePopup);
closeButton.addEventListener("click", closeProfilePopup);
closeAddButton.addEventListener("click", closeAddPopup);

function formMakeChanges(evt) {
  evt.preventDefault();
  changeName.textContent = inputName.value;
  changeOccupation.textContent = inputOccupation.value;
  closePopup();
}

function addCards(evt) {
  evt.preventDefault();
  const card = template.cloneNode(true).content.querySelector(".places__card");
  const cardImg = card.querySelector(".places__image");
  const cardTitle = card.querySelector(".places__text");
  const deleteBtn = card.querySelector(".places__button-trash");
  const likeBtn = card.querySelector(".places__button-like");

  deleteBtn.addEventListener("click", function () {
    card.remove();
  });
  likeBtn.addEventListener("click", function () {
    likeBtn.classList.toggle("places__button-likeactive");
  });
  cardImg.src = inputImg.value;
  cardTitle.textContent = inputTitle.value;
  cardPlaces.prepend(card);
  closeAddPopup();
}

formProfileElement.addEventListener("submit", formMakeChanges);
formAddCard.addEventListener("submit", addCards);
