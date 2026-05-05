/*
NOTE:
    () -> Parenthesis
    {} -> Block
    [] -> Array
*/

/////////// Two Conditions ////////////////////
/*
age >= 18 => Can vote
age < 18 => Can't vote
*/

let age = 20;

if (age >= 18) {
    console.log("Can vote")
} else {
    console.log("Can't vote")
}

////////////// Multiple Conditions /////////////////
/*
male => he 
female => she
others => they
*/

let gender = "others"

if (gender === "male") {
    console.log("he")
} else if (gender === "female") {
    console.log("she")
} else {
    console.log("they")
}
