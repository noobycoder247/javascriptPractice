// Function Inheritance

const human = {
    canWalk: true,
    canSee: true,
    canFly: false
};

const person = Object.create(human);

person.firstName = "Jane";
person.age = 25;

console.log(person.firstName, person.canWalk); // Jane true

console.log(person); // {firstName: 'Jane', age: 25} // Here in console we have [[Prototype]] as well 
                     // And this Prototype conatins human object values

console.log(person.__proto__); // {canWalk: true, canSee: true, canFly: false}