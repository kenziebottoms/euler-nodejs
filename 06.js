"use strict";

let { sumOfSquares, squareOfSums } = require("./math");

const diff = (min, max) => {
  return squareOfSums(min, max) - sumOfSquares(min, max);
};

console.log(diff(1,100));