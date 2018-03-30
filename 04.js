"use strict";

const { palindrome } = require("./math");

let products = [];
for (let i=100; i<1000; i++) {
  for (let j=100; j<1000; j++) {
    products.push(i*j);
  }
}
console.log(Math.max(...products.filter(p => palindrome(p))));