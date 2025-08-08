// DOM navigation - the process of navigating through the stucture of an 
// HTML document using Javascript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// .firstElementChild
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

// highlight all the first children of the unordered list
const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});

// .lastElementChild
// const element = document.getElementById("desserts");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "yellow";

// .nextElementSibling
// const element = document.getElementById("apple");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

// .previousElementSibling
// const element = document.getElementById("orange");
const prevSibling = element.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";

// .parentElement
// const element = document.getElementById("apple");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow";

// .children
// const element = document.getElementById("fruits");
const children = element.children;

// access the middle child
children[1].style.backgroundColor = "yellow";

Array.from(children).forEach(child =>
    {
        child.style.backgroundColor = "yellow";
    }
);