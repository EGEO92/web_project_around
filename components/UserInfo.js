export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._name = document.querySelector(nameSelector);
    this._description = document.querySelector(descriptionSelector);
    this._img = document.querySelector(".profile__image");
  }
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._description.textContent = data.about;
    this._userId = data._id;
    this._owner = data.owner;
  }
  setUserAvatar(src) {
    this._img.src = src;
  }
  getUserInfo() {
    return {
      userName: this._name.textContent,
      userAbout: this._description.textContent,
      userId: this._userId,
    };
  }
  getUserId() {
    return this._userId;
  }
}
