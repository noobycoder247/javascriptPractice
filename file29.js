// method inside object OR "this" keyword
// "this" keyword Not works with arrow functions

const person = {
    firstName: "jean",
    age: 18,
    // about: function() {
    //     console.log(`Name is ${firstName} and age is ${age}`) //// Error  Uncaught ReferenceError: firstName is not defined
    // },
    about: function() {
        console.log(`Name is ${this.firstName} and age is ${this.age}`);
    }
}

// ----- What is "this" keyword--------
// So this keyword this himself who is calling here "about" method is called by "person" so "this" ==> "person" 
person.about(); // Name is jean and age is 18


// -------------- userful example -----------
const introduce = function() {
    console.log(`Name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName: "jean",
    age: 18,
    about: introduce
}

const person2 = {
    firstName: "jane",
    age: 19,
    about: introduce
}

const person3 = {
    firstName: "marry",
    age: 20,
    about: introduce
}

console.log(person1.about()); // Name is jean and age is 18
console.log(person2.about()); // Name is jane and age is 19
console.log(person3.about()); // Name is marry and age is 20


// -----------------------------------------------

console.log(this); // give window object
console.log(this===window) //true

function func1() {
    console.log(this);
}
func1() // window obj

function func2() {
    "use strict"
    console.log(this);
}
func2() //undefined
