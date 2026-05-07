//////////////////// ARRAY DESCTRUCTOR ///////////////////////////
let array = [10, 11, 12] // This assigns all the values to single array
// We can also assign the values to individual variables using destructuring assignment
let [a, b, c] = [10, 11, 12]
console.log(a)
console.log(b)
console.log(c)

////////////////// OBJECT DESTRUCTOR ///////////////////////////
let person = {
    name: "John",
    age: 30,
    city: "New York"
}
// We can also assign the values to individual variables using destructuring assignment
let { name, age, city } = {
    name: "Alok",
    age: 24,
    city: "Janakpur"
}
console.log(name)
console.log(age)
console.log(city)
// In object destructor order of the properties does not matter