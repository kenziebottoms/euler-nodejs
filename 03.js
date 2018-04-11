"use strict";

const { primeFactors } = require("./math");

let factors = primeFactors(600851475143);
console.log(Math.max(...factors));