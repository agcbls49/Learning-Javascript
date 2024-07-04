// slice() - method that extracts a section of a string and return it 
// as a new string without modifying the original string

let fullName = "Bro Code";
// let fullName = "Snoop Dog";
let firstName; 
let lastName;

// put the start and last index
// firstName = fullName.slice(0, 3);
// lastName = fullName.slice(4);

// indexOf() method to search for any spaces
// slice everything after the first space of the string
firstName = fullName.slice(0, fullName.indexOf(" ") + 1);
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);