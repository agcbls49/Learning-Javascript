// .map() - accepts a callback and applies that function to each 
// element of an array, then return a new array

const numbers = [1, 2, 3, 4, 5];

// similar to foreach but returns an array
const squares = numbers.map(square);

console.log(squares);

function square(element){
    return Math.pow(element, 2);
}

const students = ["Songebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);
console.log(studentsUpper);

function upperCase(element){
    return element.toUpperCase();
}

// rearrange the order of the dates using map
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(element){
    // split the dates at each dash
    const parts = element.split("-");
    // 1 is the month or index
    // index 2 is the day and index 0 is the year
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}