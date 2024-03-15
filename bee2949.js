const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n').map(el => el.replace('\r', ''));


//Pegando a quantidade de entradas
let iterator = +lines.splice(0, 1)

let results = {}

//Loop que pega as entradas 
for (let i = 0; i < iterator; i++) {
    let [, type] = lines[i].split(' ');

    //Curto circuito, se der soma +1 a propriedade, se não der cria a mesma e define como 1
    results[type] = ++results[type] || 1
}

//Função que verifica se a propriedade existe, se não existir então retorna 0
function verification(x) {
    if (!x) {
        return 0
    }
    return x
}

//Leitura
console.log(`${verification(results.X)} Hobbit(s)`)
console.log(`${verification(results.H)} Humano(s)`)
console.log(`${verification(results.E)} Elfo(s)`)
console.log(`${verification(results.A)} Anao(oes)`)
console.log(`${verification(results.M)} Mago(s)`)