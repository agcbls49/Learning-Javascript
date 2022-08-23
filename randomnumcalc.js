// Random Number Generator

// Random Method
let x = Math.random();
console.log(x);

// Simulating rolling a dice
// Random decimal number between 0 and 5
let x = Math.floor(Math.random() * 6);

// Random number between 1 and 6 as if rolling a dice
let x = Math.floor(Math.random() * 6 + 1);

// Simulating the different sides of a dice
// simulating a 20 sided dice
let x = Math.floor(Math.random() * 20 + 1);

// Generate 3 random numbers between 1 and 6
let x, y, z;

document.getElementById("rollButton").onclick = function (){
    x = Math.floor(Math.random() * 6 + 1);
    y = Math.floor(Math.random() * 6 + 1);
    z = Math.floor(Math.random() * 6 + 1);

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}
