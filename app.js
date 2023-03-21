// validated with first user story

// Constructor function to create product objects
function Product(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.timesShown = 0;
}

// Array of product objects
let products = [
  new Product('Product 1', 'img/bag.jpg'),
  new Product('Product 2', 'img/banana.jpg'),
  new Product('Product 3', 'img/bathroom.jpg'),
  new Product('Product 4', 'img/boots.jpg'),
  new Product('Product 5', 'img/breakfast.jpg'),
  new Product('Product 6', 'img/bubblegum.jpg'),
  new Product('Product 7', 'img/chair.jpg'),
  new Product('Product 8', 'img/cthulhu.jpg'),
  new Product('Product 9', 'img/dog-duck.jpg'),
  new Product('Product 10', 'img/dragon.jpg'),
  new Product('Product 11', 'img/pen.jpg'),
  new Product('Product 12', 'img/pet-sweep.jpg'),
  new Product('Product 12', 'img/scissors.jpg'),
  new Product('Product 12', 'img/shark.jpg'),
  new Product('Product 12', 'img/sweep.png'),
  new Product('Product 12', 'img/tauntaun.jpg'),
  new Product('Product 12', 'img/unicorn.jpg'),
  new Product('Product 12', 'img/water-can.jpg'),
  new Product('Product 12', 'img/wine-glass.jpg'),
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
document.getElementById('image-container').addEventListener('click', function(event) {
  if (event.target.classList.contains('product-image')) {
    generateImages();
  }
});

// Initial image generation
generateImages();
