// this - reference to the object where THIS is 
// used (the object depends on the immediate context) person.name = this.name

const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    // if there's no this then the name wouldn't show up
    sayHello: function() {console.log(`Hi! I am ${this.name}`)}
}

person1.sayHello();