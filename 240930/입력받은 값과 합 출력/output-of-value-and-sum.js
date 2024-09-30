const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");
const [a, b] = input.map(i => +i)

console.log(a, b, a+b)