// Array Some Method
// Return True or false
 
const nums = [2, 4, 6, 8, 10];

// Return if any number is odd or not

console.log(nums.some((num)=>num%2!==0)); // false

const nums2 = [...nums, 11];

console.log(nums2.some((num)=>num%2===0)) // true

const personDetails = [
    {"username": "user1", "age": 25},
    {"username": "user2", "age": 26},
    {"username": "user3", "age": 51},
]

// Check Every user is eligible for vote or not
const anyRetiredUser = personDetails.some((user)=>user.age >= 50); 

console.log(anyRetiredUser) // true