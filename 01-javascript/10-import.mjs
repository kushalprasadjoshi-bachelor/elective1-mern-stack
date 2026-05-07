import { name } from "./09-export.mjs";

console.log(name) // This will print the value of name which is exported from 09-export.mjs
// Place the cursor at end of variable name and press Ctrl + Space to see the auto import suggestion

import country from "./09-export.mjs";
console.log(country) // This will print the value of country which is exported as default from 09-export.mjs
// Place the cursor at end of variable country and press Ctrl + Space to see the auto import suggestion