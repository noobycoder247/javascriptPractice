let num = 10;
console.log(typeof (num+"")); // string
console.log(typeof (+"15")); // number

let add = +"10" + +"20"
console.log(add, typeof add) // 30 number

// const constValue; // Const can't be only declared, we must have to assign something to it
// const constValue=10; // This Works

// let x;
// console.log(x, typeof x) // undefined undefined

// console.log(typeof null) // object // And it's a bug


// Arrow function dont have this
const user1 = {
    firstName: 'Jane',
    age: 20,
    about: () => {
        console.log(`Name is ${this.firstName} and Age is ${this.age}`);
    }
}

user1.about(); //Name is undefined and Age is undefined
               // becuase arrow function takes this from one above environment


// In Arrow Function this value taken  from the sarrounding but in Normal function this refer to current object

let user = {
    name: "GFG",
    gfg1:() => {
        console.log("hello " + this.name); // hello //no 'this' binding here
    },
    gfg2(){    
        console.log("Welcome to " + this.name); // Welcome to GFG //'this' binding works here
    }
};
user.gfg1();
user.gfg2();
