const _ = require("lodash");

/**
 * Currying is the process of transforming a function that takes multiple arguments in a tuple as its argument, 
 * into a function that takes just a single argument and returns another function which accepts further arguments, one by one, 
 * that the original function would receive in the rest of that tuple.
 * @param {string} param1 
 */

let nonCurryingFunction = (param1, param2, param3) => `param1: ${param1}, param2: ${param2}, param3: ${param3}`;

// convert it into currying function
let f1 =
    (param1) =>
        param2 =>
            param3 =>
                `param1: ${param1}, param2: ${param2}, param3: ${param3}`;

console.log(nonCurryingFunction("Faiz", "Ahmed", "BD"))
console.log(f1("Faiz")("Ahmed")("BD"));

// We can use lodash to convert to currying function



nonCurryingFunction = _.curry(nonCurryingFunction);

console.log(nonCurryingFunction("Faiz", "Ahmed", "BD"))