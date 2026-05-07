/////////////////// MAP ///////////////////
/* 
In JavaScript, the map() method is used to loop through an array and create a new array by applying a function to each element.
It does not modify the original array. 
*/
let ar1 = [10, 20, 30, 40, 50]

// We can use map loop to iterate over the array and perform some operation on each element of the array
// Map loop returns a new array with the results of calling a provided function on every element in the calling array
let arr1 = ar1.map((item, i) => {
    return 4
})
console.log(arr1)

// Another example
let arr = ar1.map((item, i) => {
    return item * i
})
console.log(arr)

/*
NOTE:
    - Generally, map() is used to create a new array by applying a function to each element of the original array.
    - It is also used to extract specific properties from an array of objects and return a new array with the extracted properties.

    - Input: an array
    - Output: a new array with the results of calling a provided function on every element in the calling array
    - Both input and output must have same length
*/


////////////////// EXERCISE ///////////////////////////
/*
Question 1:
Input: [10, 20, 30, 40, 50]
Output: [20, 40, 60, 80, 100]
*/
let ar2 = [10, 20, 30, 40, 50]
let arr2 = ar2.map((item) => {
    return item * 2
})
console.log(arr2)

/*
Question 2:
Input: [20, 30, 10 ,5]
Output: If item is greater than 18 multiply by 2 else multiply by 0
*/
let ar3 = [20, 30, 10, 5]
console.log("Original arrray: ", ar3)

let arr3 = ar3.map((item, i) => {
    if (item > 18) return item * 2
    return item * 0
})
console.log("Mapped array: ", arr3)

/*
Question 3:
Input:
[
    { name: "Nitan", age: 31 },
    { name: "Sudeep", age: 30 },
    { name: "Alok", age: 24 }
]

Output: ["Nitan", "Sudeep", "Alok"]
*/
let users = [
    { name: "Nitan", age: 31 },
    { name: "Sudeep", age: 30 },
    { name: "Alok", age: 24 }
]
console.log("Users: ", users)

let names = users.map((user) => {
    return user.name
})
console.log("Names: ", names)

// Output: [ 31, 30, 24 ]
let ages = users.map((user) => {
    return user.age
})
console.log("Ages: ", ages)