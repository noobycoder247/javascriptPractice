// Objects

let person = {
    "name": "jane",
    "age": 24,
    "hobbies": ["eat", "code", "sleep"],
    "email id": "test@gmail.com"
}

for(key in person) {
    console.log(key, "=", person[key]);
}

//accessing
console.log(person.name) // jane
// console.log(person.email id) // error
console.log(person["email id"]) // test@gmail.com