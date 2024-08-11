import { template, inputKey } from "./utils.js";
import trashBtnImgSrc from "../src/images/Trash.png";

export default class Card {
  constructor(
    item,
    handleCardClick,
    userID,
    handleRemoveCard,
    handleAddLike,
    handleDeleteLike
  ) {
    this.card = this.getTemplate();
    this._likes = item.likes;
    this._id = item._id;
    this._name = item.name;
    this._link = item.link;
    this._owner = item.owner;
    this._userId = userID;
    this._handleCardClick = handleCardClick;
    this._handleDeleteLike = handleDeleteLike;
    this._handleRemoveCard = handleRemoveCard;
    this._handleAddLike = handleAddLike;
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
    this._likesCounter = this.card.querySelector(".places__likes");
    this._image.src = this._link;
    this._imgTitle.textContent = this._name;
    this._image.alt = this._name;
    this._keyClose = inputKey;

    this._likesCounter.textContent = this._likes.length;
    if (this._userId !== this._owner._id) {
      this._deleteButton.remove();
    }

    this.hasUserLiked = this._likes.some((like) => {
      return like._id === this._userId;
    });
    console.log(this._userId);
    if (this.hasUserLiked) {
      this._likeButton.classList.add("places__button-likeactive");
    }
  }
  handleDelete() {
    this._handleRemoveCard(this.card.remove());
  }
  handleLike() {
    this._likeButton.classList.toggle("places__button-likeactive");
    if (!this._likeButton.classList.contains("places__button-likeactive")) {
      this._handleDeleteLike(this._id);
    } else {
      this._handleAddLike(this._id);
    }
  }

  updateLikeCounter(likesArray) {
    this._likesCounter.textContent = likesArray.length;
    console.log("likes=> ", likesArray);
  }

  setEventListener() {
    this._likeButton.addEventListener("click", () => {
      this.handleLike();
    });
    this._deleteButton.addEventListener("click", () => {
      this.handleDelete();
    });

    this._image.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);
    });
  }
  createCard() {
    this.setProperties();

    this.setEventListener();
    return this.card;
  }
}
