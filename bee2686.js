const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(Number);


//Loop para varrer o array e testar as condições
for (i = 0; i < lines.length - 1; i++) {
    if (lines[i] >= 0 && lines[i]) {
        if (lines[i] < 90 || lines[i] === 360) {
            console.log('Bom Dia!!')
        } else if (lines[i] >= 90 && lines[i] < 180) {
            console.log('Boa Tarde!!')
        } else if (lines[i] >= 180 && lines[i] < 270) {
            console.log('Boa Noite!!')
        } else if (lines[i] >= 270 && lines[i] < 360) {
            console.log('De Madrugada!!')
        }
    }
}