// Date objects - objects that contain values that represent dates and time.
// these can be changed or formatted.

// const date = new Date();
// console.log(date);

// Date(year, month, day, hour, minute, second, ms)
// uses military time by default
// let date = new Date(2025, 8, 10, 1, 2, 3, 4);
// date = new Date("2025-08-10T12:00:00Z");
// console.log(date);

// january is 0 and december is 11
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const second = date.getSeconds();


// get day of the week
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(second);

// sunday is 0 
console.log(dayOfWeek);

// set date
date.setFullYear(2024);
date.setMonth(0);
// set day - January
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);

console.log(date);

// compare dates
const date1 = new Date("2024-12-31");
const date2 = new Date("2025-1-1");

console.log(date2 > date1 ? "HAPPY NEW YEAR!": "NOT YET"); 