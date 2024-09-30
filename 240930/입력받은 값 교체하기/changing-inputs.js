const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");
const arr = input.map(i => +i)
let a = arr[0];
let b = arr[1];

[a, b] = [b, a]
console.log(a, b);