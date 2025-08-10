// ES6 Modules - An external file that contains reusable code that can be imported
// into other JS files. Write reusable code for many different apps. Can contain
// variables, classes, functions and more.

// use object destructuring to import the math util file
// these variable and functions can now be used in this file
import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);

const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

// round to 2 decimal places using to fixed
// just using toFixed() would make the number into a whole number instead
console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);