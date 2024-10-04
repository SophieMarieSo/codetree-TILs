const fs = require("fs");
let input = fs.readFileSync(0).toString().split(' ').map(i => +i);

let garo = input[0] + 8
let sero = input[1] * 3

console.log(garo)
 console.log(sero)
console.log(garo * sero)