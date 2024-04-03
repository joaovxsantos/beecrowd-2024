const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split(' ');

console.log((lines[1] / (+lines[0] + 2)).toFixed(2))