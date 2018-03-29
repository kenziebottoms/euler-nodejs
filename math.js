"use strict";

module.exports.fib = x => {
  if (x == 0) {
    return 1;
  } else if (x == 1) {
    return 2;
  } else {
    return module.exports.fib(x-1) + module.exports.fib(x-2);
  }
};

let primes = [];
module.exports.prime = x => {
  if (primes.indexOf(x)) return true;
  for (let i=parseInt(x/2); i>1; i--) {
    if (x % i == 0) {
      return false;
    }
  }
  primes.push(x);
  return true;
};