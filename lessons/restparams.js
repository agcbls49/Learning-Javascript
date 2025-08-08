// Rest Parameters - Represents and indefinite number of parameters (packs arguments into an array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

// console.log(sum(a, b));
// console.log(sum(a, b, c));
// console.log(sum(a, b, c, d));

// instead of this
// function sum1(a, b) {
//     return a + b;
// }

// function sum2(a, b, c) {
//     return a + b + c;
// }

// function sum3(a, b, c, d) {
//     return a + b + c + d;
// }

console.log(sum(a, b, c, d, e, 6));

// use rest parameters
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total
}