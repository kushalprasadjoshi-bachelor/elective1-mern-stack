////////// Arrow Function ////////////
// Define arrow function
let fun1 = () => {
    console.log("I am a function")
}
// fun1 variable stores the function

// Semi-colon can also be used as follows:
/* let fun1 = () => {
    console.log("I am a function");
}; */

// Call function
console.log("a") // Executes first
fun1()
console.log("b")
fun1()
console.log("c") 
fun1 // Not a right way to call function (Nothing happens)
// Functions are always called using parenthesis

//////////// Passing Arguments ////////////////
let info = (name, surname, ward) => {
    console.log(name, surname, ward)
}

info("Nitan", "Thapa", 1)
info("Roshan", "Thapa", 2)

/////////////// Default Values ///////////////////
info("Sworup") // Give the undefined values because the arguments are missing
// Default values prevents undefined values in functions
// undefined -> A variable is declared but value is not assigned
let information = (name = "Ram", surname = "Shrestha", ward = 3) => {
    console.log(name, surname, ward)
}

information("Sworup")

////////////////// Return Statement ////////////////
let fun2 = () => {
    console.log("a")
    return "String returned from function"
    console.log("b") // This is never executed because function has already returned
}

let returnedValue = fun2() // Store the values returned by function to a variable
console.log(returnedValue)
console.log("c")

/*
How to call functions?
1. Function without return => fun()
2. Function with return => let f = fun()
*/

////////////////////// Exercise ////////////////////////
/*
Question 1:
Make a function named canVote.
Pass one input.
If the input is >= 18 return "Can vote".
Else return "Can't vote"
*/
let canVote = (age) => {
    if (age >= 18) {
        return "Can vote"
    } else {
        return "Can't vote"
    }
}

let _canVote = canVote(17)
console.log(_canVote)

/*
Question 2:
Make a function named prepo.
It takes one input.
If input is male => return "he"
If input is female => return "she"
else => return "they"
*/
let prepo = (gender) => {
    if (gender === "male") {
        return "he"
    } else if (gender === "female") {
        return "she"
    }
    return "they"
}

/*
For a single line statement under conditional statement no need of block {}
Example:
    if (gender === "male")
        return "he"
*/

let _prepo = prepo("male")
console.log(_prepo)
