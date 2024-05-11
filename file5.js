// Arrays

// It is Refernce Type

let faucets = ["Shower", "HandShower", "Bodyjet"]

console.log(typeof faucets) // object
console.log(Array.isArray(faucets)) // true //Check weither it's a array or not

faucets.push("handHeld"); // ["Shower", "HandShower", "Bodyjet", "handHeld"]
let popped_ele = faucets.pop(); // ["Shower", "HandShower", "Bodyjet"]
console.log(popped_ele); // handHeld

faucets.unshift("deckFaucet"); 
console.log(faucets); // ["deckFaucet", "Shower", "HandShower", "Bodyjet"]

faucets.shift();
console.log(faucets); //['Shower', 'HandShower', 'Bodyjet']