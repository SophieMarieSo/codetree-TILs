const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");
let arr = input.map(i => +i)

console.log(arr[0] * arr[1]);