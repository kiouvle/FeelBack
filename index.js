import Profile from './blocks/profile/profile';
import Colleague from './blocks/colleague/colleague';
import Feedback from './blocks/feedback/feedback';
import Leader from './blocks/leader/leader';


const dictionary = { profile: { image: 'https://i.pinimg.com/originals/46/a2/01/46a2016f137c2ab6d139d0c0e0ccdaa6.jpg', name: 'Cat Grey', job: 'Cuteness-enhancer', qualities: { weirdness: 3.1, dexterity: 4.7, intelligence: 2.5 } }, colleagues: [{ name: 'Giraffe Orange', job: 'Leaf-eater' }, { name: 'Bear Polar', job: 'Fish-catcher' }, { name: 'Dog Black', job: 'Ball-licker' }, { name: 'Pickle Green', job: 'Dinner appetizer' }], feedback:[{name: 'Pickle Green', text:'Pretty scratchy'}, {name: 'Dog Black', text: 'Sneacky rascal'}, {name: 'Bear Polar', text: 'Stole my fishes'}, {name: 'Giraffe Orange', text: 'Extremely Tiny'}], leaders: [{name: 'Bear Polar', quality: 'Intelligence', value: '4.8'}, {name: 'Cat Grey', quality: 'Dexterity', value: '4.7'}, {name: 'Pickle Green', quality: 'Weirdness', value:'394'}]  }

document.querySelector('.page').insertAdjacentHTML('beforeend', new Profile(dictionary.profile).create());
document.querySelector('.panel_colleagues').insertAdjacentHTML('beforeend', dictionary.colleagues.map((colleague) => new Colleague(colleague).create()).join(''));
document.querySelector('.panel_feedback').insertAdjacentHTML('beforeend', dictionary.feedback.map((message) => new Feedback(message).create()).join(''));
document.querySelector('.panel_leaders').insertAdjacentHTML('beforeend', dictionary.leaders.map((leader) => new Leader(leader).create()).join(''));
