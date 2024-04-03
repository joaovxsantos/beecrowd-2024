const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.trim().split('\n').map(el => el.replace('\r', ''))



//Declarando variáveis
let [gcCasa, gcTrab, extraCasa, extraTrab] = [0, 0, 0, 0];


//Loopando o array
for (let i = 1; i <= +lines[0]; i++) {

    //Desestruturando
    let [casa, trabalho] = lines[i].split(' ')

    //Se saindo de casa tiver chuva, e nao tiver extra em casa, então:
    if (casa === 'chuva' && extraCasa === 0) {
        gcCasa++
        extraTrab++
    }

    //Se saindo de casa tiver mas tiver extra, então:
    else if (casa === 'chuva' && extraCasa > 0) {
        extraCasa--
        extraTrab++
    }


    //Se saindo do trabalho tiver chuva, e não tiver extra no trabalho, então: 
    if (trabalho === 'chuva' && extraTrab === 0) {
        gcTrab++
        extraCasa++
    }
    //Se saindo do trabalho tiver chuva, e tiver extra no trabalho, então:
    else if (trabalho === 'chuva' && extraTrab > 0) {
        extraTrab--
        extraCasa++
    }
}

console.log(gcCasa, gcTrab)