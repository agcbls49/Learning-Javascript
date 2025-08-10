// Super - keyword is used in classes to call the constructor or access the 
// properties and methods of a parent (superclass)
// this = this object
// super = the parent

class Animal {
    // if any of the children have a common property then it gets sent to this constructor
    constructor(name, age) {
        // these are used by all
        this.name = name;
        this.age = age;
    }

    move(speed) {
        console.log(`The ${this.name} moves at a speed of ${speed} mph`);
    }
}

// sub class or children 
class Rabbit extends Animal {
    // call the super class to access parent class
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        console.log(`This ${this.name} can run`);
        super(move(this.runSpeed));
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.runSpeed = swimSpeed;
    }

    swim() {
        console.log(`This ${this.name} can swim`);
        super(move(this.swimSpeed));
    }
}

class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.runSpeed = flySpeed;
    }

    fly() {
        console.log(`This ${this.name} can fly`);
        super(move(this.flySpeed));
    }
}

const rabbit = new Rabbit("Rabbit", 1, 25);
const fish = new Fish("Fish", 2, 12);
const hawk = new Hawk("Hawk", 3, 50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.run();

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
fish.swim();

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);
hawk.fly();