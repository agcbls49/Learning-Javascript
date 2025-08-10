// = assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
// != inequality operator
// !== strict inequality operator

const PI = 3.14;

// only cares about the value
function equal() {
    if(PI == "3.14") {
    console.log("That is Pi");
    } else {
        console.log("That is NOT Pi");
    }
}

// cares about the value and its data type
function strictEqual() {
    if(PI === "3.14") {
        console.log("That is Pi");
    } else {
        console.log("That is NOT Pi");
    }
}

function inequal() {
    if(PI != "3.14") {
        console.log("That is NOT Pi");
    } else {
        console.log("That is Pi");
    }
}

function strictInequal() {
    if(PI !== "3.14") {
        console.log("That is NOT Pi");
    } else {
        console.log("That is Pi");
    }
}

equal();
strictEqual();
inequal();
strictInequal();