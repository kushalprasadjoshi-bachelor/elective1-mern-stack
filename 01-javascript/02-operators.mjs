/*
1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
*/

///////////// 1. Arithmetic Operators ////////////
console.log(2 + 3) // Addition
console.log(2 - 3) // Subtraction
console.log(2 * 3) // Multiplication
console.log(2 / 3) // Division
console.log(2 % 3) // Modulus

////////////// 2. Assignment Operators ///////////////
let a = 10 // It assign the value 10 to variable a

////////////// 3. Comparison Operators ///////////////
console.log(3 > 2) // true
console.log(3 >= 3) // true
console.log(3 < 2) // false
console.log(3 <= 3) // true
console.log(3 === 3) // true
console.log(3 !== 3) // false

////////////// 4. Logical Operators ///////////////
//! => Invert the value
console.log(!true) // false
console.log(!false) // true

// && => Output will be true if all are true
console.log(true && true && false && true) // false
console.log(true && true && true && true) // true

// || => Output will be true if at least one is true
console.log(false || false || false || true) // true
console.log(false || false || false || false) // false
