/*
Exporting techniques in JavaScript:
1. Export by name
    - Prefix by export keyword
    - Can export multiple variables, functions, classes from a single file
    - Imported using curly braces in other files

2. Export defaul
    - Prefix by export default keyword
    - Can export only one variable, function, class from a single file
    - Imported without using curly braces in other files
*/

////////////////// 1. EXPORT BY NAME ////////////////////////
// We can export multiple variables, functions, classes using export by name
export let name = "Nitan" // This will export the variable name which can be imported in other files using import statement

////////////////// 2. EXPORT DEFAULT ////////////////////////
// We can export only one variable, function, class using export default
let country = "Nepal"
export default country // This will export the variable country as default export which can be imported in other files using import statement without using curly braces