const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.replace('\r', ''));


let [, nums] = lines;

//Pegando o maior número e somando com 1
nums = nums.split(' ').map(Number).sort((a, b) => b - a)[0]; 
console.log(nums + 1);