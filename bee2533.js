const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.replace('\r', ''));




//Enquanto há elementos no array
while (lines.length > 0) {

    //Declarando variáveis
    let totalNotas = 0;
    let totalcargaHoraria = 0;

    //Pegando o primeiro valor do array que será o iterator
    const iterador = parseInt(lines.shift());


    //Loopando para pegar os valores de acordo com o iterator
    for (let i = 0; i < iterador; i++) {
        const [nota, cargaHoraria] = lines[i].split(' ').map(Number);
        totalNotas += nota * cargaHoraria
        totalcargaHoraria += cargaHoraria * 100
    }

    let result = (totalNotas / totalcargaHoraria).toFixed(4)

    //Lendo o resultado se for válido
    if (!isNaN(result)) {
        console.log(result)
    }
    //Removendo os elementos do array para que dê continuidade ao programa e tenha um novo iterador 
    lines.splice(0, iterador)
}