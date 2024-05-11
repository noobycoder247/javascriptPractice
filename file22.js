// Array Find method
// It's return first occurance 
const animal = ["lion", "dog", "tiger", "cat"];

function isLength3(str) {
    return str.length === 3;
}
console.log(animal.find(isLength3)); // dog

// Find userObj whose usename="user2"
const personDetails = [
    {"username": "user1", "age": 25},
    {"username": "user2", "age": 26},
    {"username": "user3", "age": 27},
]

let user2 = personDetails.find((personObj)=>personObj.username==="user2");
console.log(user2) // {username: 'user2', age: 26}

