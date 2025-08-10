// Synchronous - executes line by line consecutively in a sequential manner. code
// that waits for an operation to complete.

// Aynchronous - allows multiple operations to be performed concurrently without
// waiting. doesn't block the execution flow and allows the program to continue
// (I/O operations, network requests, fetching data). Handled with: Callbacks, 
// Promises, Async/Await

// Example 1
// wait for 3 seconds before executing
// setTimeout(() => {
//     console.log("Task 1");
// }, 3000);

// these are all synchronous and will finish before task 1
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");

// Example 2 using a Callback
// asynchronous
function function1(Callback) {
    setTimeout(() => {
        console.log("Task 1"); Callback()}, 3000);
}

//synchronous code to execute after task 1 is complete
function function2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
};

// after 3 seconds both will execute
function1(function2);