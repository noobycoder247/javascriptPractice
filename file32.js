// class Keyword

class User{
    constructor(firstName, lastNamem, age) {
        this.firstName = firstName;
        this.lastNamem = lastNamem;
        this.age = age;
    }
    intro() {
        console.log(this.firstName, this.lastNamem, this.age);
    }
    is18() {
        return this.age >= 18;
    }
};

const user1 = new User("jane", "doe", 18);
user1.intro();

console.log(Object.getPrototypeOf(user1)); //{intro: ƒ, is18: ƒ}