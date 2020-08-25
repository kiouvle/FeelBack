export default class Popup {
  constructor(container) {
    this._container = container;
    this._name = container.querySelector('.popup__title');
    this._popupClose = container.querySelector('.popup__close');
    this._popupClose.addEventListener('click', () => this.close());
    console.log(this)
  }

  open(colleague) {
    this._container.classList.add('popup_opened');
    this._name.innerHTML = colleague.name;
  }

  close() {
    this._container.classList.remove('popup_opened');
  }
}