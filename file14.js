// Hoisting

console.log(isEven(10)); // true // It's Work here!!!!

function isEven(num) {
    return num%2==0;
}

// console.log(isEvenExpressionFunc(10)) // ERROR!!!
// const isEvenExpressionFunc = function(num) {
//     return num%2==0;
// }

// console.log(isEvenArrowFunc(10)) // ERROR!!!
// const isEvenArrowFunc = (num)=> {
//     return num%2==0;
// }


console.log(hello); // undefined
var hello = "Hello";

// console.log(hello2); // Uncaught ReferenceError: Cannot access 'hello2' before initialization
// let hello2 = "Hello";

// console.log(hello3); // Uncaught ReferenceError: Cannot access 'hello3' before initialization
// const hello3 = "Hello"; 

