const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n").map(i => (+i).toFixed(3));

const [a, b, c] = input

console.log(a)
console.log(b)
console.log(c)