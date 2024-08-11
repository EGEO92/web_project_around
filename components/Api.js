import Section from "./Section.js";
import Card from "./Card.js";
import { popupImg, profileImg } from "../src/index.js";
import UserInfo from "./UserInfo.js";
import PopupWithForm from "./PopupWithForm.js";
import { editButton, addButton } from "./utils.js";
import { userInfo } from "../src/index.js";

class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Error: ${res.status}`);
        }
      })

      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Bien hecho!!! Cartas iniciales listas");
      });
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Error ${res.status}`);
        }
      })
      .then((result) => {
        userInfo.setUserAvatar(result.avatar);
        userInfo.setUserInfo(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally((result) => {});
  }

  editUserInfo(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Error ${res.status}`);
        }
      })
      .then((result) => {
        userInfo.setUserInfo(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Bien hecho!!!");
      });
  }

  editUserAvatar(data) {
    fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Error ${res.status}`);
        }
      })
      .then((result) => {
        console.log("Este es el avatar => ", result.avatar);
        userInfo.setUserAvatar(result.avatar);
      });
  }

  addCard(data) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Error: ${res.status}`);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Bien hecho!!! carta nueva");
      });
  }

  removeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Error ${res.status}`);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }

  addLike(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Error ${res.status}`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  removeLike(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Error ${res.status}`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_11",
  headers: {
    authorization: "072a79cd-90d0-408b-be9c-36f27d8f66a3",
    "Content-Type": "application/json",
  },
});
