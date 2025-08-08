// Promise - an object that manages asynchronous operations. Wrap a Promise Object
// around {asynchronous code} "I promise to return a value"
// PENDING -> RESOLVED or REJECTED
// new Promise((resolve, reject) => {asynchronous code})

// DO THE CHORES IN ORDER
// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// using callback hell insstead of promises
// function walkDog(callback) {
//     setTimeout(() => {
//         console.log("You walked the dog 🐕");
//         callback();
//     }, 1500);
// }

// function cleanKitchen(callback) {
//     setTimeout(() => {
//         console.log("You cleaned the kitchen 🧹");
//         callback();
//     }, 2500);
// }

// function takeOutTrash(callback) {
//     setTimeout(() => {
//         console.log("You took out the trash ♻️");
//         callback();
//     }, 500);
// }

// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => console.log("You finished all the chores!"));
//     });
// });

// using promises by using method chaining instead of callbacks
function walkDog() {
    // use this instead of callbacks
    return new Promise((resolve, reject) => {
        // do this asynchronous code
        setTimeout(() => {
            // if the asynchronous function fails then call reject
            const dogWalked = true;
            if(dogWalked) {
                // completion message when the promise resolves
                resolve("You walked the dog 🐕");
            } else {reject("YOU DIDN'T WALK THE DOG");}
        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if(kitchenCleaned) {
                resolve("You cleaned the kitchen 🧹");
            } else {reject("YOU DIDN'T CLEAN THE KITCHEN");}
        }, 2500);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            const trashTakenOut = true;
            if(trashTakenOut){
                resolve("You took out the trash ♻️");
            } else {reject("YOU DIDN'T TAKE THE TRASH OUT");}
        }, 500);
    });
}

// the value are the strings inside resolve function of the three
// the catch error prints the strings in all the reject functions
// if at least one of the const values are changed to false
// then the error would be catched and the other functions wont run 
walkDog().then(value => {console.log(value); return cleanKitchen()})
.then(value => {console.log(value); return takeOutTrash()})
.then(value => {console.log(value); console.log("You finished all the chores")})
.catch(error => console.error(error));