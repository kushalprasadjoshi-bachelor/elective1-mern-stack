// Strings can be defined using single quotes, double quotes, or backticks (template literals)
let name = "Nitan"
let city = 'Kathmandu'
let country = `Nepal`

console.log(name)
console.log(city)
console.log(country)

// Backticks (template literals) allow us to embed expressions and create multi-line strings
let age = 30
let info = `My name is ${name} and I am ${age} years old. I live in ${city}, ${country}.`
console.log(info)

// Others than backticks, we cannot embed expressions in strings. We have to concatenate the strings using + operator
let info1 = "My name is " + name + " and I am " + age + " years old. I live in " + city + ", " + country + "."
console.log(info1)