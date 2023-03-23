
const state = [];
const roundsOfVoting = 5;

function Image(name,source) {
  this.name = name;
  this.timesClicked = 0;
  this.source = source;
}

state.push(new Image(''))
state.push(new Image(''))
state.push(new Image(''))
state.push(new Image(''))

let imgEls = document.querySelectorAll('img'); //array like thing that filled
let voteTrackerEl = document.getElementById('vote-tracker');

console.log("Currently rendered images", imgEls);

console.log('Current State', state);

//render our first images
// imgEls[0].src = state[0].source;
// imgEls[0].id = state[0].name;
// imgEls[1].src = state[1].source;
// imgEls[1].id = state[1].name;


function generateRandomGoat() {
    return Math.floor(Math.random() * state.length);
}

function renderGoats() {
    console.log(imgEls)

    //find some goats from state
    let goat1 = generateRandomGoat();
    let goat2 = generateRandomGoat();
    console.log('Goats to rerender', imgEls, goat1, goat2);
    while (goat1.name ==)

    imgEls[0].src = state[0].source;
    imgEls[0].id = state[0].name;
    goat1.timesShown += 1;
    imgEls[1].src = state[1].source;
    imgEls[1].id = state[1].name;
    goat2.timesShown += 1;
}

renderGoats();

let eventId = voteTrackerEl.addEventListener('click', function(event) {
    console.log(event.target); //event.target always represents the exact element where an event occured

    //identify which image was clicked on?
    let goatThaWasClicked = event.target.dispatchEvent;
    state.forEach(image => {
        if (image.name === goatThaWasClicked) {
            image.timesClicked += 1; //mutation of an object
        }
    });
    console.log('Updated State', state);
    //re-render updated state

    if (roundsOfVoting) {
        renderGoats();
        roundsOfVoting--;
    } else {
        voteTrackerEl.removeEventListener('click', eventId);
    }
});









/// demo code for Class 13

// Store products array into local storage
localStorage.setItem('Product', JSON.stringify(state));
console.log('Current state after set: ', localStorage);

let productState = localStorage.getItem('Product');
console.log('State from storage: ', JSON.parse(productState));

function writeData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function readData(key) {
  return JSON.parse(localStorage.getItem(key));
}

// Retrieve products array from local storage

state = readData('Product');
console.log('Fresh data from local storage', state.Product[0]);

state.Product[0] = new Product('Scrunchie', 'img/accessibility');

writeData('Product', state); 