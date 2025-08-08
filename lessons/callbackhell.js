// Callback Hell = situation in Javascript where callbacks are nested within other
// callbacks to the degree where the code is difficult to read. Old pattern to 
// handle asynchrounous functions. Use Promises + asnyc/await to avoid callback hell.
// asynchronous functions can complete execution at any time. To execute the
// functions in order then add in a call back parameter.

// these functions work synchrounously and all in order and run at the same time
// function synctask1() {
//     console.log("Task 1 Complete");
// }

// function synctask2() {
//     console.log("Task 2 Complete");
// }

// function synctask3() {
//     console.log("Task 3 Complete");
// }

// function synctask4() {
//     console.log("Task 4 Complete");
// }

// asynchronous function without callback
// function task1() {
//     setTimeout(() => {
//         console.log("Task 1 Complete");
//     }, 2000);
// }

// function task2() {
//     setTimeout(() => {
//         console.log("Task 2 Complete");
//     }, 1000);
// }

// function task3() {
//     setTimeout(() => {
//         console.log("Task 3 Complete");
//     }, 3000);
// }

// function task4() {
//     setTimeout(() => {
//         console.log("Task 4 Complete");
//     }, 1500);
// }

// says that all the tasks are complete first then prints
// task 2, task 4, task 1, and task 3 respectively
// task1();
// task2();
// task3();
// task4();
// console.log("All asynchronous tasks with callbacks are complete");

// asynchronous functions with callback
// to run functions in order add in callback which
// ensures that a function is not going to run before the task is complete
function task1(callback) {
    // add this to make the function asynchronous
    // say the task is complete after 2000 ms
    setTimeout(() => {
        console.log("Task 1 Complete");
        callback();
    }, 2000);
}

function task2(callback) {
    // say the task is complete after 1000 ms
    setTimeout(() => {
        console.log("Task 2 Complete");
        callback();
    }, 1000);
}

function task3(callback) {
    // say the task is complete after 3000 ms
    setTimeout(() => {
        console.log("Task 3 Complete");
        callback();
    }, 3000);
}

function task4(callback) {
    // say the task is complete after 1500 ms
    setTimeout(() => {
        console.log("Task 4 Complete");
        callback();
    }, 1500);
}

// callback so when task 1 is finished call task 2 and then so on
// this is called callback hell where callbacks are nested with each other
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => console.log("All asynchronous tasks with callbacks are complete"));
        });
    });
});