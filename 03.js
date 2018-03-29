"use strict";

const { primeFactors, prime } = require("./math");

let factors = primeFactors(600851475143);
console.log(Math.max(...factors));