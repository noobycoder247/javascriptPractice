// Array Every Method
// Return True or false
 
const nums = [2, 4, 6, 8, 10];

// Return if every number are even or not

console.log(nums.every((num)=>num%2===0)); // true

const nums2 = [...nums, 11];

console.log(nums2.every((num)=>num%2===0)) // false

const personDetails = [
    {"username": "user1", "age": 25},
    {"username": "user2", "age": 26},
    {"username": "user3", "age": 27},
]

// Check Every user is eligible for vote or not
const allEligible = personDetails.every((user)=>user.age >= 18);
console.log(allEligible); // true
