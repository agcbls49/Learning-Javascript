// Ternary Operator - if else shortcut

let adult = checkAge(21);
// let adult = checkAge(12);

console.log(adult);

// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// ternary version
function checkAge(age) {
    return age >= 18 ? true : false;
}