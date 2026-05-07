//////////////// SPREAD OPERATOR IN ARRAYS ////////////////////////
let ar1 = [9, 10, 11, 12]
let ar2 = [12, 14]

let ar3 = [ar1, 13, ar2]
console.log(ar3) // This will create a nested array

// We can merge two arrays using spread operator
let mergedArray = [...ar1, 13, ...ar2] // ... is the spread operator also known as wrapper operator
console.log(mergedArray)

///////////// SPREAD OPERATOR IN OBJECTS ////////////////////////
let info1 = {
    name: "Nitan",
    age: 30
}
let info2 = {
    city: "Kathmandu"
}

// We can merge two objects using spread operator
let info = { ...info1, ...info2 }
console.log(info)