const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

const a = Number(input[0])
const b = Number(input[1])
const plus = a + b
const minus = a - b

console.log((plus / minus).toFixed(2))