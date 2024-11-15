const fs = require("fs");
const input = fs.readFileSync(0).toString().trim()
const score = Number(input);

console.log(score === 100 ? 'pass' : 'failure');
