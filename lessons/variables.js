// Variables
// 1. Declaration (var, let, const)
// 2. Assignment (=)

let firstName = "Bro"; // strings
let age = 21; // numbers
// or let age;
// age = 21;
age = age + 1;

let student = false; // boolean

console.log(firstName);
console.log(age);

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age+ " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;