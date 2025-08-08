// forEach - method used to iterate over the elements of an array and apply a specified function (callback)
// to each element. 
// ex. array.foEach(callback)
// element, index, array are provided

let numbers = [1, 2, 3, 4, 5];

// double the values inside the array
// numbers.forEach(double);

// square the elements inside the array
numbers.forEach(square);

// use foreach to display all the elements of the array
numbers.forEach(display);

function double(element, index, array) {
    array[index]  = element * 2;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function display (element){
    console.log(element);
}