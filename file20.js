// Array Methods

// forEach
// map
// reduce
// filter

let arr = [1, 2, 3, 4];

const personDetails = [
    {"username": "user1", "age": 25},
    {"username": "user2", "age": 26},
    {"username": "user3", "age": 27},
]

// ---------For Each------------------
// Do not return new array
const numberByIndex = (number, index) => {
    console.log(`${number} X ${index} = ${number*index} `);
}

// for(let i=0; i<arr.length; i++) {
//     numberByIndex(arr[i], i);
// }

arr.forEach(numberByIndex); // It's automatically pass number and it's index to numberByIndex function

arr.forEach((number, index)=>{
    console.log(`${number} ^ ${index} = ${number**index} `);
})


// -----------------Map---------------------
// Map return new array

const squareNumbers = arr.map((val, idx)=>{
    return val*val;
});

console.log(squareNumbers); //[1, 4, 9, 16]

const usernames = personDetails.map((user) => {
    return user.username;
})
console.log(usernames); // ['user1', 'user2', 'user3']


// ----------------Filter---------------------
// It's return new array
// As name it's filter value based on callback function
const even =  arr.filter((num)=>{
    return num%2==0;
})
console.log(even); // [2, 4]

// --------------------Reduce---------------------
// As name says it's reduce the array to one value, that is return only one value at the end 

const sum = arr.reduce((accumulator, currentValue) => {
    return accumulator+currentValue;
}, 0) // 0 is accumulator initial value

console.log(sum); // 10

// Initially accumulator have arr[0] and currentValue have arr[1] if no initial value passed
// After initial iteration accumulator have whatever return in past iteration (that is 3(1+2))

// accumulator      currentValue    return
//      0               1              1
//      1               2              3
//      3               3              6
//      6               4              10  <------ This will store in sum


const userCart = [
    {productName: 'Mobile', price: 50000},
    {productName: 'AC', price: 60000},
    {productName: 'Laptop', price: 90000},
];

const totalCartValue = userCart.reduce((totalPrice, currProduct)=>{
    return totalPrice + currProduct['price'];
}, 0); // I have passed 0 as a initial total so now Accumulator have 0
console.log(totalCartValue);  

