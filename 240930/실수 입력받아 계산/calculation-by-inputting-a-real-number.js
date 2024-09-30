const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n").map(i => +i);

const [a, b] = input

console.log((a+b).toFixed(2))