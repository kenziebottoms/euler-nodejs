"use strict";

let { fib } = require("./math");

let fibs = [];
for (let i=0; i<32; i++) {
  fibs.push(fib(i));
}

let evenFibs = fibs.filter(x => x % 2 == 0);
let sum = (a, b) => a + b;
console.log(evenFibs.reduce(sum));