// Switch Statements

// let grade = "A";
// let grade = "Pizza";
let grade = 95;

switch (grade) {
    case "A": console.log("You did great!"); break;
    case "B": console.log("You did good!"); break;
    case "C": console.log("You did okay!"); break;
    case "D": console.log("You passed ... barely"); break;
    case "F": console.log("You FAILED!"); break;
    default: console.log(grade + " is not a letter grade!");
}

switch (true) {
    case grade >= 90: 
        console.log("You did great!"); 
        break;
    case grade >= 80 && grade < 90: 
        console.log("You did good!"); 
        break;
    case grade >= 70 && grade < 80: 
        console.log("You did okay!"); 
        break;
    case grade >= 60 && grade < 70: 
        console.log("You passed ... barely"); 
        break;
    case grade < 60: 
        console.log("You FAILED!"); 
        break;
    default: 
        console.log(grade + " is not a number grade!");
}