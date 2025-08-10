// Inheritance - allows a new class to inherit properties and methods from an 
// existing class (parent -> child). helps with code reusability.

class Animal {
    alive = true;

    eat() {
        console.log(`${this.name} is eating`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

// use extends to inherit from parent
class Rabbit extends Animal{
    // inherits all the properties and methods of the animal class
    name = "Rabbit";

    run() {
        console.log(`${this.name} is running`);
    }
}

class Fish extends Animal{
    name = "Fish";

    swim() {
        console.log(`${this.name} is swimming`);
    }
}

class Hawk extends Animal {
    name = "Hawk";

    fly() {
        console.log(`${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.alive = false;
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
rabbit.swim();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();
rabbit.fly();