// Nested Loop

// count to 3 three times
for (let i = 1; i <= 3; i+=1) {
    for (let j = 1; j <= 3; j+=1) {
        console.log(j);
    }
}

// create a rectangle
let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt('Enter # of rows');
let columns = window.prompt('Enter # of columns');

for (let i = 1; i <= rows; i+=1) {
    for (let j = 1; j <= columns; j+=1) {
        // document.getElementById("myRectangle").innerHTML += j;
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}