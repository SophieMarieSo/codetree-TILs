const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');
const a = Number(input[0])
const b = Number(input[1])

console.log(a - b < 0 ? b - a : a - b)