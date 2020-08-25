export default class Leader {  
  constructor(leader) {
    this._leader = leader;
    
  }

  create() {
   return `<div class="card">
   <h3 class="card__title">${this._leader.name}</h3>
   <p class="card__description">${this._leader.quality}, ${this._leader.value}</p>
 </div>`
  }
}