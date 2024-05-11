// Getter and Setter

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() { // this will make fullName as a property like we use @property in python
        return this.firstName + " " + this.lastName;
    }
    set fullName(full_name) { // setting the value
        [this.firstName, this.lastName] = full_name.split(" ");
    } 
    
    static classFunc() {
        console.log("This is person class");
    }

}

const p1 = new Person("jane", "doe");
console.log(p1.fullName); // jane doe
p1.fullName = "margot robbie";
console.log(p1.fullName); // margot robbie

Person.classFunc(); //This is person class
