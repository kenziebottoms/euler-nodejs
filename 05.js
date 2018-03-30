"use strict";

const { factorial } = require("./math");

// returns whether x is divisible by all integers under limit
const divisibleByAll = (x, limit) => {
  for (let i=limit; i>parseInt(limit/2); i--) {
    if (x % i != 0) {
      return false;
    }
  }
  return true;
};

// HACK: start at 2 million
for (let i=200000000; i<factorial(20); i+= 20) {
  console.log(i);
  if (divisibleByAll(i,19)) {
    console.log(i);
    break;
  }
}