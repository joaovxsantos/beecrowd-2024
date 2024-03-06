const input = require('fs').readFileSync('stdin', 'utf8')
const lines = +input;


//Formula
console.log(((lines + 1) * (lines + 2)) / 2)