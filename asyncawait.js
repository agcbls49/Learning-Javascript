// Async/Await
// Async - makes a function return a promise
// Await - makes an async function wait for a promise
// Allows you write asynchronouse code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue

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

// async/await works alongside promises
async function doChores() {
    // await makes a promise before continuing the function execution
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores");
    }
    catch(error) {
        console.error(error);
    }
}

doChores();