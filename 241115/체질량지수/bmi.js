const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');
const h = Number(input[0])
const w = Number(input[1])
const bmi = Math.floor((10000 * w) / h**2)

console.log(bmi)
console.log(bmi > 25 && 'Obesity')