// Destructured Array

let arr = ["item1", "item2"];
// let v1 = arr[0];
// let v2 = arr[1];
// console.log(v1, v2) // item1 item2
let [v1, v2] = arr;

console.log(v1, v2); // item1 item2

arr = ["item1", "item2", "item3"];
let [val1, val2] = arr

console.log(val1, val2) // item1 item2

let [a1, ,a3] = arr;

console.log(a1, a3); // item1 item3

let[a, ...arr2] = arr;

console.log(a, arr2); // item1 ['item2', 'item3']