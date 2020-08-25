export default class Feedback {  
  constructor(feedback) {
    this._feedback = feedback;
    
  }

  create() {
   return `<div class="card">
   <h3 class="card__title">${this._feedback.name}</h3>
   <p class="card__description">${this._feedback.text}</p>
 </div>`
  }
}