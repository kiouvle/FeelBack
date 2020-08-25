export default class Colleague {  
  constructor(colleague) {
    this._colleague = colleague;
    
  }

  create() {
   return `<div class="card">
   <h3 class="card__title">${this._colleague.name}</h3>
   <p class="card__description">${this._colleague.job}</p>
 </div>`
  }
}
