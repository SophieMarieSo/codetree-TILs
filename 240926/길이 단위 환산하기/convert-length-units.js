const fs = require('fs')

const input = +(fs.readFileSync(0).toString());

console.log((input*30.48).toFixed(1))