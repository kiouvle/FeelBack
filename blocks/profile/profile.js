export default class Profile {  
  constructor(profile) {
    this._profile = profile;
    
  }

  create() {
   return `<section class="profile">
   <div class="profile__info">
     <img class="profile__info_pic" src="${this._profile.image}" alt="avatar">
     <div>
     <h1 class="profile__info_name">${this._profile.name}</h1>
     <span class="profile__info_job">${this._profile.job}</span>
   </div>
   </div>
     <h2 class="profile__title">Качества</h2>
     <span class="profile__quality">Weirdness</span>
     <span class="profile__quantity">${this._profile.qualities.weirdness}</span>
     <span class="profile__quality">Dexterity</span>
     <span class="profile__quantity">${this._profile.qualities.dexterity}</span>
     <span class="profile__quality">Intelligence</span>
     <span class="profile__quantity">${this._profile.qualities.intelligence}</span>
   
 </section>`
  }
}
