import { template, opacityPlaces, inputKey, pageClose } from "./utils.js";
import { putOpacity, removeOpacity } from "./index.js";

export default class Card {
  constructor(title, link) {
    this.card = this.getTemplate();
    this._title = title;
    this._link = link;
  }
  getTemplate() {
    return template.cloneNode(true).content.querySelector(".places__card");
  }
  setProperties() {
    this._likeButton = this.card.querySelector(".places__button-like");
    this._deleteButton = this.card.querySelector(".places__button-trash");
    this._image = this.card.querySelector(".places__image");
    this._imgTitle = this.card.querySelector(".places__text");
    this._image.src = this._link;
    this._imgTitle.textContent = this._title;
    this._image.alt = this._title;
    this._keyClose = inputKey;
  }
  setPopup() {
    this._popupCard = this.card.querySelector(".places__popupcard");
    this._popupImg = this.card.querySelector(".places__popupimg");
    this._popupTitle = this.card.querySelector(".places__popuptitle");
    this._popupImgClose = this.card.querySelector(".popup__closecard");
  }
  handleDelete() {
    this.card.remove();
  }
  handleLike() {
    this._likeButton.classList.toggle("places__button-likeactive");
  }
  handleOpenPopup() {
    this._popupCard.classList.add("popup__show");
    this._popupImg.src = this._link;
    this._popupTitle.textContent = this._title;
    putOpacity();
    opacityPlaces.classList.remove("page__popup");
  }
  handleClosePopup() {
    this._popupCard.classList.remove("popup__show");
    removeOpacity();
  }
  setEventListener() {
    this._likeButton.addEventListener("click", () => {
      this.handleLike();
    });
    this._deleteButton.addEventListener("click", () => {
      this.handleDelete();
    });
    this._image.addEventListener("click", () => {
      this.handleOpenPopup();
    });
    this._popupImgClose.addEventListener("click", () => {
      this.handleClosePopup();
    });
    this._keyClose.addEventListener("keydown", (input) => {
      if (input.key === "Escape") {
        this.handleClosePopup();
      }
    });
    pageClose.addEventListener("click", () => {
      this.handleClosePopup();
    });
  }
  createCard() {
    this.setProperties();
    this.setPopup();
    this.setEventListener();
    return this.card;
  }
}

/*function createCards(name, link) {
  const card = template.cloneNode(true).content.querySelector(".places__card");
  const cardImg = card.querySelector(".places__image");
  const cardTitle = card.querySelector(".places__text");
  const deleteBtn = card.querySelector(".places__button-trash");
  const likeBtn = card.querySelector(".places__button-like");
  const popupCard = card.querySelector(".places__popupcard");
  const popupImg = card.querySelector(".places__popupimg");
  const popupTitle = card.querySelector(".places__popuptitle");
  const popupImgClose = card.querySelector(".popup__closecard");

  cardImg.src = link;
  cardTitle.textContent = name;

  cardImg.addEventListener("click", function () {
    popupCard.classList.add("popup__show");
    popupImg.src = link;
    popupTitle.textContent = name;
    putOpacity();
    opacityPlaces.classList.remove("page__popup");
  });

  function closeCardPopup() {
    removeOpacity();
    popupCard.classList.remove("popup__show");
    cardImg.classList.remove("page__popup");
  }

  popupImgClose.addEventListener("click", closeCardPopup);

  pageClose.addEventListener("click", closeCardPopup);

  inputKey.addEventListener("keydown", function (input) {
    if (input.key === "Escape") {
      closeCardPopup();
    }
  });

  cardPlaces.append(card);
}*/
