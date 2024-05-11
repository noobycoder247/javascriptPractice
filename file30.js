// call, apply, bind

//------------call--------------------
// Used to pass this explictly. 
// Or 
// change who is calling the method

const user1 = {
    firstName: 'Jane',
    age: 20,
    about: function() {
        console.log(`Name is ${this.firstName} and Age is ${this.age}`);
    }
}

user1.about(); // Name is Jane and Age is 20

//----> What is i want to call the about fuction of user1 from user2

const user2 = {
    firstName: 'Doe',
    age: 25,
}

user1.about.call() // Name is undefined and Age is undefined
user1.about.call(user2) // Name is Doe and Age is 25 //->> Here we are setting "this" keyword value

function intro(hobby, email) {
    console.log(`Name is ${this.firstName}, Age is ${this.age}, Hobby is ${hobby}, Email is ${email}`);
}
intro.call(user1, "sleep", "sleep@gmail.com") // Name is Jane, Age is 20, Hobby is sleep, Email is sleep@gmail.com
intro.call(user2, "eat", "eat@gmail.com") // Name is Doe, Age is 25, Hobby is eat, Email is eat@gmail.com

//--------------apply---------------------------
// this is same as call, internally apply uses call
// Only difference is we pass argument as array here
intro.apply(user1, ["read", "read@gmail.com"]) // Name is Jane, Age is 20, Hobby is read, Email is read@gmail.com

//--------------Bind-----------------------------------
// It's Bind the object with the function and return the new binded function
const user1Func = intro.bind(user1, "code", "code@gmail.com")

user1Func(); // Name is Jane, Age is 20, Hobby is code, Email is code@gmail.com

const myFunc = user1.about;
myFunc(); // Name is undefined and Age is undefined

const myFunc2 = user1.about.bind(user1);
myFunc2(); // Name is Jane and Age is 20