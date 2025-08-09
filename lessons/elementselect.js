// Element selectors = Methods used to target and manipulate HTML elements. They allow you yo select one or 
// multiple HTML elements from the DOM

// 1. document.getElementById()     // ELEMENT OR NULL
// 2. document.getElementsClassName()   // HTML COLLECTION
// 3. document.getElementsByTagName()   // HTML COLLECTION
// 4. document.querySelector()      // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()   // NODELIST

// 1. document.getElementById()     // ELEMENT OR NULL
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";
console.log(myHeading);

// 2. document.getElementsClassName()   // HTML COLLECTION
const fruits = document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor = "red";
fruits[1].style.backgroundColor = "orange";
fruits[2].style.backgroundColor = "yellow";

for (let fruit of fruits){
    fruit.style.backgroundColor = "white";
}

// typecast to array
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow"
});

// 3. document.getElementsByTagName()   // HTML COLLECTION
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

for (let h4Element of h4Elements){
    h4Element.style.backgroundColor = "yellow";
}

for (let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen";
}

//typecast to array
Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow";
});

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
});

// 4. document.querySelector()      // FIRST ELEMENT OR NULL

// only the first match will be selected
const element = document.querySelector("h4");
element.style.backgroundColor = "yellow";

// 5. document.querySelectorAll()   // NODELIST
const foods = document.querySelectorAll("li");
// foods[0].style.backgroundColor = "yellow";

foods.forEach(food => {
    food.style.backgroundColor = "yellow";
});