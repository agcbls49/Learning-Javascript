// EXAMPLE <h1>
// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES / PROPERTIES
newH1.textContent = "I like pizza!";

// can only be seen when inspecting the element
// this add an id named myH1 in "I like pizza"
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
// this element is the last child as it is appended on the parent and will
// show up below all of the boxes
document.body.append(newH1);

// STEP 4 PREPEND ELEMENT TO DOM
// instead of putting it below use prepend to put it on top of all the boxes
// document.body.prepend(newH1);

// STEP 5 SELECT BOX1 AS PARENT AND PUT "I LIKE PIZZA" INSIDE IT
document.getElementById("box1").append(newH1);

// puts the paragraph element Box1 below it
// document.getElementById("box1").prepend(newH1);

// STEP 6 SANDWICH IT BETWEEN BOX1 AND BOX2
// const box2 = document.getElementById("box2");

// insert newH1 before box 2
// document.body.insertBefore(newH1, box2);

// STEP 7 SANDWICHING newH1 but this way: SELECTING THE 
// BOXES IF THEY DON'T HAVE ID'S (use class and array instead)
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[1]);

// STEP 8 REMOVE HTML ELEMENT
// if this is used: document.body.append(newH1); then use this:
// document.body.removeChild(newH1);

// because the body acts as a grandparent do this instead when this is used:
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").removeChild(newH1);



// EXAMPLE <li>
// STEP 1 CREATE THE ELEMENT 
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES / PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM
document.body.append(newListItem);
// document.body.prepend(newListIem);

// add coconut to the list box and put it below everything
// document.getElementById("fruits").append(newListItem);

// add coconut to the list box and put it above everything
// document.getElementById("fruits").prepend(newListItem);

// insert coconut before the orange
// const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange);

// insert coconut before the banana
// const banana = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem, banana);

// if these list items don't have ID's use array and query selector all
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newLink, boxes[4]);