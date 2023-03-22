const state = []; //why do we call it state? 
let roundsOfVoting = 25;

// let currentRound = 0;
// let activeProducts = [];

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


console.log('Currently rendered images', imgEls);

console.log('Current State', state);

//verify our images render
// imgEls[0].src = state[0].source;
generateImages();

// Function to randomly generate three unique product images
function generateRandom() {
  return Math.floor(Math.random() * state.length);
}

function generateImages() {
  let product1 = state[generateRandom()];
  let product2 = state[generateRandom()];
  let product3 = state[generateRandom()];
  console.log('Images to re-render', imgEls, product1, product2, product3);

  // Check if products are unique and generate new ones if necessary
  while (product1 === product2 || product1 === product3 || product2 === product3) {
    product1 = state[generateRandom()];
    product2 = state[generateRandom()];
    product3 = state[generateRandom()];
  }

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
  }
}

voteTrackerEl.addEventListener('click', handleImageClick);





// generateImages();


// function handleImageClick(event) {
//   if (event.target.classList.contains('product-image')) {
//     // Find the clicked product and update its timesClicked property
//     let clickedProduct = state.find(function(product) {
//       return product.imagePath === event.target.src;
//     });
//     clickedProduct.timesClicked++;
//   }
// }



// document.getElementById('image-container').addEventListener('click', function(event) {
//   if (event.target.classList.contains('product-image') && currentRound < numRounds) {
//     handleImageClick(event);
//     generateImages();
//     currentRound++;

//     if (currentRound === numRounds) {
//       // Voting has ended, you can perform any post-voting actions here.
//       // For example, remove the event listener or display a message.
//       console.log("You have exceeded the number of votes allowed.");
//     }
//   }
// });









// // Constructor function to create product objects
// function Product(name, imagePath) {
//   this.name = name;
//   this.imagePath = imagePath;
//   this.timesShown = 0;
//   this.timesClicked = 0;
// }

// // Array of product objects
// let products = [
//   new Product('bag', 'img/bag.jpg'),
//   new Product('banana', 'img/banana.jpg'),
//   new Product('bathroom', 'img/bathroom.jpg'),
//   new Product('boots', 'img/boots.jpg'),
//   new Product('breakfast', 'img/breakfast.jpg'),
//   new Product('bubblegum', 'img/bubblegum.jpg'),
//   new Product('chair', 'img/chair.jpg'),
//   new Product('cthulhu', 'img/cthulhu.jpg'),
//   new Product('dog-duck', 'img/dog-duck.jpg'),
//   new Product('dragon', 'img/dragon.jpg'),
//   new Product('pen', 'img/pen.jpg'),
//   new Product('pet-sweep', 'img/pet-sweep.jpg'),
//   new Product('scissors', 'img/scissors.jpg'),
//   new Product('shark', 'img/shark.jpg'),
//   new Product('sweep', 'img/sweep.png'),
//   new Product('tauntaun', 'img/tauntaun.jpg'),
//   new Product('unicorn', 'img/unicorn.jpg'),
//   new Product('water-can', 'img/water-can.jpg'),
//   new Product('wine-glass', 'img/wine-glass.jpg')
// ];

// // Function to generate three unique product images
// function generateImages() {
//     let product1 = products[Math.floor(Math.random() * products.length)];
//     let product2 = products[Math.floor(Math.random() * products.length)];
//     let product3 = products[Math.floor(Math.random() * products.length)];

//     // Check if products are unique and generate new ones if necessary
//     while (product1 === product2 || product1 === product3 || product2 === product3) {
//       product1 = products[Math.floor(Math.random() * products.length)];
//       product2 = products[Math.floor(Math.random() * products.length)];
//       product3 = products[Math.floor(Math.random() * products.length)];
//     }

//     // Update timesShown property for each product
//     product1.timesShown++;
//     product2.timesShown++;
//     product3.timesShown++;

//     // Display images on the page
//     document.getElementById('product1').src = product1.imagePath;
//     document.getElementById('product2').src = product2.imagePath;
//     document.getElementById('product3').src = product3.imagePath;
//   }

//   // Add event listener to image container
//   document.getElementById('image-container').addEventListener('click', function(event) {
//     if (event.target.classList.contains('product-image')) {
//       generateImages();
//     }
//   });

//   // Initial image generation
//   generateImages();


// // Number of voting rounds
// let numRounds = 25;

// // Array of products currently being considered
// let activeProducts = [];

// // Function to generate three unique product images
// function generateImages() {
//   // Clear event listeners and display results button if voting rounds have ended
//   if (numRounds === 0) {
//     document.getElementById('image-container').removeEventListener('click', handleImageClick);
//     document.getElementById('view-results-button').style;
//   }
// }
