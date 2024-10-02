const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input
console.log(a)
console.log((+b).toFixed(2))
console.log((+c).toFixed(2))