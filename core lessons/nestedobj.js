// Nested Objects - objects inside of other objects. Allows you to represent more
// complex data structures. Child object is enclosed by a Parent object.
// Person {Address{}, ContactInfo{}} ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// Example 1
// const person = {
//     fullName: "Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate", "jellyfishing", "cooking"],
//     address: {
//         street: "124 Conch St.",
//         city: "Bikini Bottom",
//         country: "Int. Waters"
//     }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// returns an array
// console.log(person.hobbies);

// return entire object
// console.log(person.address);
// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person.address.country);

// loop through the properties of a nested object
// for(const property in person.address) {
//     console.log(person.address[property]);
// }

// Example 2
class Person {
    // use rest to pass in parameters and store it in array
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        // call the constructor
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", 
    "Bikini Bottom", "Int. Waters");

const person2 = new Person("Patrick", 37, "128 Conch St.", 
    "Bikini Bottom", "Int. Waters");

const person3 = new Person("Squidward", 45, "126 Conch St.", 
    "Bikini Bottom", "Int. Waters");

console.log(person1.name);
console.log(person1.age);
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);

console.log(person2.name);
console.log(person2.age);
console.log(person2.address.street);
console.log(person2.address.city);
console.log(person2.address.country);

console.log(person3.name);
console.log(person3.age);
console.log(person3.address.street);
console.log(person3.address.city);
console.log(person3.address.country);