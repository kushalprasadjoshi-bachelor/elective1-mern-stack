let info = ["Nitan", 65, false]
console.log(info)
// This array defines data but has no information
// Object solves the problem
let infoObject = {
    name: "Nitan",
    weight: 65,
    isMarried: false,
}

/*
Objects don't have concept of index like in arrays.
Values are accessed using key.
        key: value
Combination of key and value together is known as property
*/

// Accessing object properties
console.log(infoObject) // Prints the object
console.log(infoObject.name) // Prints name of object

// Manipulating the object
infoObject.name = "Sudeep"
console.log(infoObject)

// Adding new properties
infoObject.address = "Kathmandu"
console.log(infoObject)

// Removing the properties
delete infoObject.name
console.log(infoObject)

// Duplicate keys in objects are not allowed. 
// If we define duplicate keys, the last key will overwrite the previous key.
let person = {
    name: "Nitan",
    age: 30,
    name: "Sudeep" // This will overwrite the previous name property
}
console.log(person) // This will print the object with name as Sudeep