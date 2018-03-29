"use strict";

let fib = x => {
  if (x == 0) {
    return 1;
  } else if (x == 1) {
    return 2;
  } else {
    return fib(x-1) + fib(x-2);
  }
}

let fibs = [];
for (let i=0; i<32; i++) {
  fibs.push(fib(i));
}

let evenFibs = fibs.filter(x => x % 2 == 0);
let sum = (a, b) => a + b;
console.log(evenFibs.reduce(sum));