// Class Inheritance

class Animal {
    constructor(color, weight, age) {
        this.color = color;
        this.weight = weight
        this.age = age;
    }

    canBreathe() {
        return true;
    }
    canWalk() {
        return true;
    }
    looks() {
        console.log("Color is", this.color)
    }
};

class Dog extends Animal {
    constructor(name, color, weight, age) {
        super(color, weight, age)
        this.name = name;

    }
    speak() {
        console.log("Bark");
    }
};

const dog1 = new Dog("tommy", "black", 20, 2);
dog1.speak();
dog1.looks();

