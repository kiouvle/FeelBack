export default class Colleague {  
  constructor(colleague, index) {
    this._colleague = colleague;
    this._index = index;
    
  }

  create() {
   return `<div data-index="${this._index}" class="card">
   <h3 class="card__title">${this._colleague.name}</h3>
   <p class="card__description">${this._colleague.job}</p>
 </div>`
  }
}
