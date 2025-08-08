// Useful String Methods

let userName = "Bro Code";

// Show character length
console.log(userName.length);

// Give character of a string on a given index
console.log(userName.charAt(0));
console.log(userName.charAt(1));
console.log(userName.charAt(2));

// Find character index
// index of the first occurence of o
console.log(userName.indexOf("o"));

// index of the last occurence of o
console.log(userName.lastIndexOf("o"));

// Trim spaces before and after a string
let userName = "  Bro Code  ";

// Gets rid of empty spaces before characters
userName = userName.trim();

// Covert to uppercase
userName = userName.toUpperCase();

// Convert to lowercase
userName = userName.toLowerCase();

console.log(userName);

let phoneNumber = "123-456-7890";

// Replace - with /
phoneNumber = phoneNumber.replaceAll("-", "/");

// To remove dashes without replacement
phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber);
