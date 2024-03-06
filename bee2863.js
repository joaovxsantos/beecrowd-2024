const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number).filter(el => el)


//Loop enquanto o array estiver preenchido
while (lines.length > 0) {
    let iteratorInc = lines.splice(0, 1)
    console.log(lines.splice(0, iteratorInc).sort((a, b) => a - b)[0])
}