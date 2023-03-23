let storedState = localStorage.getItem('productState'); // Load stored state by retrieving the value of the 'prodcutState' key from local storage
let state; //define state

if (storedState) {
  state = JSON.parse(storedState).map( // Check if previous product array data is stored & if so parse the products array from local storage to set storedState as current state and map the array into a new array using the object constructor
    (product) => new Product(product.name, product.source, product.timesClicked, product.timesShown)
  );
} else { // else create the proudct array using the object constructor with default values and set as current state
  state = [
    new Product('bag', 'img/bag.jpg'),
    new Product('banana', 'img/banana.jpg'),
    new Product('bathroom', 'img/bathroom.jpg'),
    new Product('boots', 'img/boots.jpg'),
    new Product('breakfast', 'img/breakfast.jpg'),
    new Product('bubblegum', 'img/bubblegum.jpg'),
    new Product('chair', 'img/chair.jpg'),
    new Product('cthulhu', 'img/cthulhu.jpg'),
    new Product('dog-duck', 'img/dog-duck.jpg'),
    new Product('dragon', 'img/dragon.jpg'),
    new Product('pen', 'img/pen.jpg'),
    new Product('pet-sweep', 'img/pet-sweep.jpg'),
    new Product('scissors', 'img/scissors.jpg'),
    new Product('shark', 'img/shark.jpg'),
    new Product('sweep', 'img/sweep.png'),
    new Product('tauntaun', 'img/tauntaun.jpg'),
    new Product('unicorn', 'img/unicorn.jpg'),
    new Product('water-can', 'img/water-can.jpg'),
    new Product('wine-glass', 'img/wine-glass.jpg'),
  ];
}


let roundsOfVoting = 25;
const activeButton = document.getElementById('viewResultsButton');
let previousProducts = [];

function Product(name, source, timesClicked = 0, timesShown = 0) {
  this.name = name;
  this.source = source;
  this.timesClicked = timesClicked;
  this.timesShown = timesShown;
}

// state.push(new Product('bag', 'img/bag.jpg'));
// state.push(new Product('banana', 'img/banana.jpg'));
// state.push(new Product('bathroom', 'img/bathroom.jpg'));
// state.push(new Product('boots', 'img/boots.jpg'));
// state.push(new Product('breakfast', 'img/breakfast.jpg'));
// state.push(new Product('bubblegum', 'img/bubblegum.jpg'));
// state.push(new Product('chair', 'img/chair.jpg'));
// state.push(new Product('cthulhu', 'img/cthulhu.jpg'));
// state.push(new Product('dog-duck', 'img/dog-duck.jpg'));
// state.push(new Product('dragon', 'img/dragon.jpg'));
// state.push(new Product('pen', 'img/pen.jpg'));
// state.push(new Product('pet-sweep', 'img/pet-sweep.jpg'));
// state.push(new Product('scissors', 'img/scissors.jpg'));
// state.push(new Product('shark', 'img/shark.jpg'));
// state.push(new Product('sweep', 'img/sweep.png'));
// state.push(new Product('tauntaun', 'img/tauntaun.jpg'));
// state.push(new Product('unicorn', 'img/unicorn.jpg'));
// state.push(new Product('water-can', 'img/water-can.jpg'));
// state.push(new Product('wine-glass', 'img/wine-glass.jpg'));


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
  localStorage.setItem('productState', JSON.stringify(state)); //Save updated state to Local Storage

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
  // Show the chart section
  document.getElementById('chart-section').style.display = 'block';

  // Prepare chart data
  const productLabels = state.map(product => product.name);
  const votesData = state.map(product => product.timesClicked);
  const viewsData = state.map(product => product.timesShown);

  // Get canvas context
  const ctx = document.getElementById('results-chart').getContext('2d');

  // Create the bar chart
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productLabels,
      datasets: [
        {
          label: 'Votes',
          data: votesData,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          label: 'Views',
          data: viewsData,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

console.log('Current state at the end with state: ', state);
console.log('Current state at the end with localStorage: ', localStorage);
