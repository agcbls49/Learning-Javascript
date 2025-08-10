// Object - a collection of related properties and/or methods. can represent real world objects
// (people, products, places) object = {key:value, function()}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30, 
    isEmployed: true,
    sayHello: function() {console.log("Hi! I am Spongebob!")},
    sayGoodbye: function() {console.log("Goodbye!")}
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hey I'm Patrick..."),
    sayGoodbye: function() {console.log("Bye...")}
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.sayGoodbye();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.sayGoodbye();