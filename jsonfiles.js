// JSON (Javascript Object Notation) - data-interchange format used for exchanging
// data between a server and a web application. JSON files {key:value} or
// [value1, value2, value3].

// JSON.stringify() - converts a JS object to a JSON string.
// JSON.parse - converts a JSON string to a JS object.
// json files cannot have comments.

// names.json file has the list of first names
// person.json file contains a class of a person which is spongebob
// people.json array of objects and each object has its own key value pairs

// json arrays to string
const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {"name": "Spongebob","age": 30,"isEmployed": true,"hobbies": ["Jellyfishing", "Karate", "Cooking"]};
const people = [{"name": "Spongebob","age": 30,"isEmployed": true},
                {"name": "Patrick","age": 34,"isEmployed": false},
                {"name": "Squidward","age": 50,"isEmployed": true},
                {"name": "Sandy","age": 27,"isEmployed": false}];

// convert JSON to string format
let jsonString = JSON.stringify(names);
console.log(jsonString);

jsonString = JSON.stringify(person);
console.log(jsonString);

jsonString = JSON.stringify(people);
console.log(jsonString);

// convert string to original JSON format 
const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob","age": 30,"isEmployed": true,"hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
                {"name": "Patrick","age": 34,"isEmployed": false},
                {"name": "Squidward","age": 50,"isEmployed": true},
                {"name": "Sandy","age": 27,"isEmployed": false}]`;

let parsedData = JSON.parse(jsonNames);
console.log(parsedData);

parsedData = JSON.parse(jsonPerson);
console.log(parsedData);

parsedData = JSON.parse(jsonPeople);
console.log(parsedData);

// fetch JSON files
fetch("person.json").then(response => response.json())
    .then(value => console.log(value));

// print one by one the people in json format
fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)));

// use key values to only print the names
fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.error(error));

// do the same with age and employed
fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.age)))
    .catch(error => console.error(error));

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.isEmployed)))
    .catch(error => console.error(error));