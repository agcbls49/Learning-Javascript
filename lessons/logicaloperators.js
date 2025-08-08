// Logical Operators
// && = and, || = or, ! = not

let temp = 15;
// let temp = 0;
// let temp = -50;
// let sunny = true;
let sunny = false;


if (temp > 0 && temp < 30 && sunny) {
    console.log("The weather is good!");
}
// else if (temp <= 0 || temp >= 30) {
//     console.log("The weather is bad!");
// }
else if (!(temp > 0)) {
    console.log("It's cold outside");
}
else if (sunny) {
    console.log("It's sunny outside");
}
else if (!(sunny)) {
    console.log("It's cloudy outside");
}
else {
    console.log("It's warm outside");
}