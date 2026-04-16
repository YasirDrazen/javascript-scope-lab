// Step 1: Global variables
const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

// Step 2: Function
function addBurger() {
  const newBurger = "Flatburger";
  burgers.push(newBurger);
}

// Step 3: Block scope
if(true) {
  const anotherNewBurger = "Maple Bacon Burger";
  burgers.push(anotherNewBurger);
}

// Function to change drink
function changeFeaturedDrink() {
  featuredDrink = "The JavaShake";
}