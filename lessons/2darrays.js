// 2d arrays

let fruits = ["apples", "pranges", "banana"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"]

let grocerylist = [fruits, vegetables, meats];

// for (let list of grocerylist) {
//     // console.log(list);
//     for (let food of list) {
//         console.log(food);
//     }
// }

// 2d array
grocerylist[0][0] = "mangoes";
grocerylist[2][0] = "steak";

for (let list of grocerylist) {
    // console.log(list);
    for (let food of list) {
        console.log(food);
    }
}