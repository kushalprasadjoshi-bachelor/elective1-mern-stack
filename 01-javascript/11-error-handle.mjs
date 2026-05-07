// console.log(name) // This will crash the program because name is not defined

// We can handle the error using try catch block
try {
    console.log("I am try")
    console.log(name)
} catch (error) {
    console.log("I am catch")
    console.log(error.message) // This will print the error message
}
/*
NOTE:
At first the try block will be executed and if there is any error in the try block, 
the catch block will be executed and the error message will be printed. 
If there is no error in the try block, the catch block will be skipped. 
*/