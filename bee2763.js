const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input;

//Separando quando tiver ponto '.' ou traço '-'
lines.split(/[.-]/g).forEach(num => console.log(num));
