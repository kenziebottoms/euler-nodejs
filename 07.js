"use strict";

let { prime } = require("./math");

let primes = [2];
let i = 3;

while (primes.length <= 10001) {
  if (prime(i)) primes.push(i);
  i++;
}

primes.reverse();
console.log(primes[0]);