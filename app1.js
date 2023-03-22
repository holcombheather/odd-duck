const state = []; //why do we call it state?
let roundsOfVoting = 25;
const activeButton = document.getElementById('viewResultsButton');

let previousProducts = [];

function Product(name, source) {
  this.name = name;
  this.source = source;
  this.timesClicked = 0;
  this.timesShown = 0;
}

state.push(new Product('bag', 'img/bag.jpg'));
state.push(new Product('banana', 'img/banana.jpg'));
state.push(new Product('bathroom', 'img/bathroom.jpg'));
state.push(new Product('boots', 'img/boots.jpg'));
state.push(new Product('breakfast', 'img/breakfast.jpg'));
state.push(new Product('bubblegum', 'img/bubblegum.jpg'));
state.push(new Product('chair', 'img/chair.jpg'));
state.push(new Product('cthulhu', 'img/cthulhu.jpg'));
state.push(new Product('dog-duck', 'img/dog-duck.jpg'));
state.push(new Product('dragon', 'img/dragon.jpg'));
state.push(new Product('pen', 'img/pen.jpg'));
state.push(new Product('pet-sweep', 'img/pet-sweep.jpg'));
state.push(new Product('scissors', 'img/scissors.jpg'));
state.push(new Product('shark', 'img/shark.jpg'));
state.push(new Product('sweep', 'img/sweep.png'));
state.push(new Product('tauntaun', 'img/tauntaun.jpg'));
state.push(new Product('unicorn', 'img/unicorn.jpg'));
state.push(new Product('water-can', 'img/water-can.jpg'));
state.push(new Product('wine-glass', 'img/wine-glass.jpg'));


let imgEls = document.querySelectorAll('img');
let voteTrackerEl = document.getElementById('vote-tracker');


// console.log('Currently rendered images', imgEls);

console.log('Current State', state);

// verify our images render
// imgEls[0].src = state[0].source;
generateImages();

function generateRandom() {
  return Math.floor(Math.random() * state.length);
}

function generateImages() {
  let product1, product2, product3;
  do {
    product1 = state[generateRandom()];
    product2 = state[generateRandom()];
    product3 = state[generateRandom()];
  } while (
    previousProducts.includes(product1) ||
    previousProducts.includes(product2) ||
    previousProducts.includes(product3) ||
    product1 === product2 ||
    product1 === product3 ||
    product2 === product3
  );

  previousProducts = [product1, product2, product3];

  imgEls[0].src = product1.source;
  imgEls[0].id = product1.name;
  product1.timesShown += 1;
  imgEls[1].src = product2.source;
  imgEls[1].id = product2.name;
  product2.timesShown += 1;
  imgEls[2].src = product3.source;
  imgEls[2].id = product3.name;
  product3.timesShown += 1;
}

function handleImageClick(event) {
  console.log(event.target);

  let clickedProduct = event.target.id;
  state.forEach(image => {
    if (image.name === clickedProduct) {
      image.timesClicked += 1;
    }
  });
  console.log('Updated State', state);

  if (roundsOfVoting) {
    generateImages();
    roundsOfVoting--;
  } else {
    voteTrackerEl.removeEventListener('click', handleImageClick);
    let buttonEl = document.getElementById('viewResultsButton');
    console.log('This is the button', buttonEl);
    buttonEl.addEventListener('click', generateResults);
    alert('You have reached the max number of votes');
    activeButton.style.backgroundColor = 'green';
    activeButton.style.cursor = 'pointer';
  }
}

voteTrackerEl.addEventListener('click', handleImageClick);


function generateResults(event) {
  // eslint-disable-next-line no-unused-vars
  let buttonClicked = event.target.id;
  state.forEach(product => {
    let listItemEl = document.createElement('li');
    let resultContainer = document.getElementById('results-list');
    resultContainer.appendChild(listItemEl);
    listItemEl.innerHTML = `${product.name} had ${product.timesClicked} votes, and was seen ${product.timesShown} times.`;
  });
}

