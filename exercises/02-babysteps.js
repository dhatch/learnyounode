// David Hatch
// 1/24/15
//
// learnyounode - Exercise 2 - BABY STEPS
//
// Write a program that accepts one or more numbers as command-line
// arguments and prints the sum of those numbers to the console (stdout).

console.log(process.argv.slice(2).reduce(function (acc, value) {
    return acc + (+value);
}, 0));
