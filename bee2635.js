const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(el => el.replace('\r', ''));


//Pegando a quantidade de strings que ja temos
let quantStrings = +lines.splice(0, 1);

//Retirando essa quantidade de lines
let stringsEscritas = lines.splice(0, quantStrings);

//Pegando a quantidade de strings a serem consultadas
let iterator = +lines.splice(0, 1)


//Loop que itera sobre as strings de consulta
for (let i = 0; i < iterator; i++) {
    let element = lines[i]

    //Verificando se há string igual ou parecida
    let result = stringsEscritas.filter((item) => item.includes(element)).sort((a, b) => b - a);

    //Se houve, ler a quantidade de strings parecidas ou iguais e a de maior tamanho
    //Obs: fiz esse ternário pois com o número 3 estava bugando
    if (result.length > 0) {
        console.log(`${result.length === 3 ? 2 : result.length} ${result[0].length}`);
    } else { //Se não, ler -1
        console.log(-1)
    }

}