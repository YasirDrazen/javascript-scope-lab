// Step 1: Global variables
let burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

// Step 2: Function
function addBurger() {
  let newBurger = "Flatburger";
  burgers.push(newBurger);
}

// Step 3: Block scope
if (true) {
  let anotherNewBurger = "Maple Bacon Burger";
  burgers.push(anotherNewBurger);

  function changeFeaturedDrink() {
    featuredDrink = "The JavaShake";
  }
}
//Test
addBurger();
changeFeaturedDrink();

console.log(burgers);
console.log(featuredDrink);    