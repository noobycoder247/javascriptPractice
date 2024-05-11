// Object Destructuring

const personalDetail = {
    "personName": "jane",
    "age": "25",
    "conatct": "9974599357",
    "email": "test@gmail.com",
};

let {personName, age} = personalDetail;
console.log(personName, age); // jane 25 // Here we have to keep the same name as a variable that we used in object

let {personName:whatName, age:howOld, ...contactDetails} = personalDetail
console.log(whatName, howOld, contactDetails); // jane 25 {conatct: '9974599357', email: 'test@gmail.com'}

const userData = [
    {username: "user1", age: 17, gender: "M"},
    {username: "user2", age: 18, gender: "F"},
    {username: "user3", age: 19, gender: "MF"},
]

// for (user of userData) {
//     console.log(user);
// }

let [u1, ...restOf] = userData;
console.log(u1, restOf); // {username: 'user1', age: 17, gender: 'M'} 
                         // [{username: 'user2', age: 18, gender: 'F'}, {username: 'user3', age: 19, gender: 'MF'}]

let [{username:user1Name}, , {gender:user3Gender}] = userData;

console.log(user1Name, user3Gender); // user1 MF