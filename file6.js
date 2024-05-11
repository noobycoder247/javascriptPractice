// Primitive vs Reference Type and array copy

// Primitive Type
let num1 = 10;
let num2 = num1;

console.log(num1); // 10
console.log(num2); // 10
num1++;
console.log(num1); // 11
console.log(num2); // 10

// Reference Type

let arr1 = [1, 2, 3];
let arr2 = arr1;

console.log(arr1); //[1, 2, 3]
console.log(arr2); // [1, 2, 3]
arr1.push(4);
console.log(arr1); //[1, 2, 3, 4]
console.log(arr2); //[1, 2, 3, 4]

let a1 = [1, 2, 3];
let a2 = a1

console.log(a1 == a2); //true // Because memory is same

a2 = [1, 2, 3];

console.log(a1 == a2); //false // Because memory reference is differ

c1 = [1, 2, 3];
// Using slice
c2 = c1.slice(0); // Make the copy of the array here memory are differ

c2.push(4);
console.log(c1, c2); //[1, 2, 3] [1, 2, 3, 4]

// Using concat
c3 = [].concat(c1); // Make a copy

// Using Spread operator
c4 = [...c1]; // Make the copy

// Adding more items
c5 = [...c1, 4, 5, 6]
console.log(c5); // [1, 2, 3, 4, 5, 6]

