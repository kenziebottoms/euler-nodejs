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

module.exports.prime = x => {
  for (let i=parseInt(x/2); i>1; i--) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
};

module.exports.primeFactors = x => {
  let factors = [];
  for (let i=2; i<=x; i++) {
    if (x % i == 0) {
      factors.push(i);
      while (x % i == 0) {
        x /= i;
      }
    }
  }
  return factors;
};

module.exports.palindrome = x => {
  let letters = x.toString().split("");
  let rev = letters.slice().reverse();
  for (let i=0; i<parseInt(letters.length/2); i++) {
    if (letters[i] != rev[i]) {
      return false;
    }
  }
  return true;
};

module.exports.factorial = x => {
  if (x == 1) {
    return 1;
  } else {
    return x*module.exports.factorial(x-1);
  }
};

module.exports.sumOfSquares = (min, max) => {
  let sum = 0;
  for (let i=min; i<=max; i++) {
    sum += i * i;
  }
  return sum;
};

module.exports.squareOfSums = (min, max) => {
  let sum = 0;
  for (let i=min; i<=max; i++) {
    sum += i;
  }
  return sum * sum;
};