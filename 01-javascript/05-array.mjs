let name = "Nitan" // Save a name
// To save multiple names, we use array
let names = ["Nitan", "Sworup", "Sudeep", "Kushal"]

//////////////////// Example Array //////////////////
let info = ["Nitan", "Thapa", 30, false]
// index       0        1      2     3

// Printing an array
console.log(info) // Prints full array
console.log(info[1]) // Prints the element at index

// Manipulating an array
info[1] = "Bist" // Change element at index
console.log(info)

// Adding an elements to an array at end
info.push("a") 
info.push("b")
console.log(info)

// Removing an element from end of the array
let poppedElement = info.pop() // Delete and return last element
console.log(poppedElement, "pooped successfully.")
console.log(info)

// Adding an element at the begining of array
info.unshift("First Element")
console.log(info)

// Removing an element from the begining of the array
let removed = info.shift() // Delete and return first element
console.log(removed, "removed successfully.")
console.log(info)