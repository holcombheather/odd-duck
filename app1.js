// Constructor function to create product objects
function Product(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.timesShown = 0;
  this.timesClicked = 0;
}

// Array of product objects
let products = [
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
  new Product('wine-glass', 'img/wine-glass.jpg')
];

// Function to generate three unique product images
function generateImages() {
  let product1 = products[Math.floor(Math.random() * products.length)];
  let product2 = products[Math.floor(Math.random() * products.length)];
  let product3 = products[Math.floor(Math.random() * products.length)];

  // Check if products are unique and generate new ones if necessary
  while (product1 === product2 || product1 === product3 || product2 === product3) {
    product1 = products[Math.floor(Math.random() * products.length)];
    product2 = products[Math.floor(Math.random() * products.length)];
    product3 = products[Math.floor(Math.random() * products.length)];
  }

  // Update timesShown property for each product
  product1.timesShown++;
  product2.timesShown++;
  product3.timesShown++;

  // Display images on the page
  document.getElementById('product1').src = product1.imagePath;
  document.getElementById('product2').src = product2.imagePath;
  document.getElementById('product3').src = product3.imagePath;
}

// Add event listener to image container
document.getElementById('image-container').addEventListener('click', handleImageClick);

// Initial image generation
generateImages();

// Number of voting rounds
let numRounds = 25;

// Array of products currently being considered
let activeProducts = [];

function handleImageClick(event) {
  if (event.target.classList.contains('product-image')) {
    // Find the clicked product and update its timesClicked property
    let clickedProduct = products.find(function(product) {
      return product.imagePath === event.target.src;
    });
    clickedProduct.timesClicked++;
  }
}





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
