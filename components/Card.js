import { template, inputKey } from "./utils.js";
import trashBtnImgSrc from "../src/images/Trash.png";

export default class Card {
  constructor(title, link, handleCardClick) {
    this.card = this.getTemplate();
    this._title = title;
    this._link = link;
    this._handleCardClick = handleCardClick;
  }
  getTemplate() {
    return template.cloneNode(true).content.querySelector(".places__card");
  }
  setProperties() {
    this._likeButton = this.card.querySelector(".places__button-like");
    this._deleteButton = this.card.querySelector(".places__button-trash");
    this._deleteBtnImg = this._deleteButton.querySelector(".places__imgtrash");
    this._deleteBtnImg.src = trashBtnImgSrc;
    this._image = this.card.querySelector(".places__image");
    this._imgTitle = this.card.querySelector(".places__text");
    this._image.src = this._link;
    this._imgTitle.textContent = this._title;
    this._image.alt = this._title;
    this._keyClose = inputKey;
  }

  handleDelete() {
    this.card.remove();
  }
  handleLike() {
    this._likeButton.classList.toggle("places__button-likeactive");
  }

  setEventListener() {
    this._likeButton.addEventListener("click", () => {
      this.handleLike();
    });
    this._deleteButton.addEventListener("click", () => {
      this.handleDelete();
    });
    this._image.addEventListener("click", () => {
      this._handleCardClick(this._link, this._title);
    });
  }
  createCard() {
    this.setProperties();

    this.setEventListener();
    return this.card;
  }
}
