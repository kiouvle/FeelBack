import Profile from './blocks/profile/profile';
import Colleague from './blocks/colleague/colleague';
import Feedback from './blocks/feedback/feedback';
import Leader from './blocks/leader/leader';
import Popup from './blocks/popup/popup';

const dictionary = { profile: { image: 'https://i.pinimg.com/originals/46/a2/01/46a2016f137c2ab6d139d0c0e0ccdaa6.jpg', name: 'Cat Grey', job: 'Cuteness-enhancer', qualities: { weirdness: 3.1, dexterity: 4.7, intelligence: 2.5 } }, colleagues: [{ name: 'Giraffe Orange', job: 'Leaf-eater' }, { name: 'Bear Polar', job: 'Fish-catcher' }, { name: 'Dog Black', job: 'Ball-licker' }, { name: 'Pickle Green', job: 'Dinner appetizer' }], feedback:[{name: 'Pickle Green', text:'Pretty scratchy'}, {name: 'Dog Black', text: 'Sneacky rascal'}, {name: 'Bear Polar', text: 'Stole my fishes'}, {name: 'Giraffe Orange', text: 'Extremely Tiny'}], leaders: {all: [{name: 'Bear Polar', quality: 'Intelligence', value: '4.8'}, {name: 'Cat Grey', quality: 'Dexterity', value: '4.7'}, {name: 'Pickle Green', quality: 'Weirdness', value:'394'}], weirdness: [{name: 'Pickle Green', quality: 'Weirdness', value:'394'}], dexterity: [{name: 'Cat Grey', quality: 'Dexterity', value: '4.7'}], intelligence: [{name: 'Bear Polar', quality: 'Intelligence', value: '4.8'}]}   };
const feedback = document.querySelector('.panel_feedback');
const leader = document.querySelector('.panel_leaders');
const colleagues = document.querySelector('.panel_colleagues');
document.querySelector('.page').insertAdjacentHTML('beforeend', new Profile(dictionary.profile).create());
colleagues.insertAdjacentHTML('beforeend', dictionary.colleagues.map((colleague, index) => new Colleague(colleague, index).create()).join(''));
feedback.insertAdjacentHTML('beforeend', dictionary.feedback.map((message) => new Feedback(message).create()).join(''));
leader.insertAdjacentHTML('beforeend', dictionary.leaders.all.map((leader) => new Leader(leader).create()).join(''));

const popup = new Popup(document.querySelector('.popup'));

colleagues.addEventListener('click', (e) => popup.open(dictionary.colleagues[e.target.closest('.card').dataset.index]));

function fetchFeedback() {
  feedback.querySelectorAll('.card').forEach((item) => item.remove());
  feedback.insertAdjacentHTML('beforeend', dictionary.feedback.map((message) => new Feedback(message).create()).join(''));
}

setInterval (fetchFeedback, 20000);

const selector = document.querySelector('.panel__select');

selector.addEventListener('change', (e) => fetchLeader(e.target.value));

function fetchLeader(quality) {
  leader.querySelectorAll('.card').forEach((item) => item.remove());
  leader.insertAdjacentHTML('beforeend', dictionary.leaders[quality].map((leader) => new Leader(leader).create()).join(''));

}