// Variable Scope - where a variable is recognized and accessible (local vs global)

function function1() {
    // any variable inside of a function/curly braces has a local scope
    // you can use the same variable name as long as its in different scopes
    let x = 1;
    console.log(x);
}

function function2() {
    let x = 2;
    console.log(x);
}

function1();
function2();

// any variable declared outside of a function has a global scope
let x = 3;

function function3() {
    console.log(x);
}

function3();