const fs = require("fs");
let input = fs.readFileSync(0).toString().split(' ').map(i => +i);

console.log(input[0] + input[1])
console.log(input[0] - input[1])
console.log(parseInt(input[0] / input[1]))
console.log(input[0] % input[1])