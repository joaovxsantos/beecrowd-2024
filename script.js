const input = require('fs').readFileSync('stdin', 'utf8');
let arr = input.split(' ').map(Number).sort((a, b) => a - b);

