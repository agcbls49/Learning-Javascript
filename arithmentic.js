/* 
Arithmetic Expressions is a combination of:
1. Operands (values, variables, etc.)
2. Operators (+, -, *, /, % 

that can be evaluated to a value
ex. y = x + 5;
*/

let students = 20;

students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;

// Augmented Assignment Operator or shortcut for the code above
students += 1;
students -= 1;
students *= 2;
students /= 2;

// Remainder or Modulo Operator is useful for finding even or odd numbers
let extraStudents = students % 3;
let extraStudents = students % 2;

console.log(students);
console.log(extraStudents);

/* 
Operator Precedence (PEMDAS):
1. Parenthesis ()
2. Exponents
3. Multiplication & Division
4. Addition and Subtraction
*/

let result = 1 + 2 * (3 + 4); // outputs 15
let result = (1 + 2) * (3 + 4); // outputs 21

console.log(result);