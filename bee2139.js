const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split(' ').map(Number);


//Declarando variáveis
const totalDias = 360
const [mes, dia] = lines;
let cont = 0;


const diasRestantes = () => {
    
    //Se o mes for janeiro, então o cont é o dia 
    if (mes === 1) {
        cont = dia
    } else {
        //Se não, será adicionado a cont 30 dias de acordo com a quantidade de meses + os dias restantes
        for (i = 0; i < mes - 1; i++) {
            cont += 30

            if (i === mes - 2) {
                cont += dia
            }
        }
    }
    lerResultado()
}


const lerResultado = () => {

    //Diminuindo o total de dias do atual
    let dias = totalDias - cont

    //Condições para leitura
    if (dias <= 4) {
        console.log('Ja passou!')
    } else if (dias === 5) {
        console.log('E natal!')
    } else if (dias === 6) {
        console.log('E vespera de natal!')
    } else {
        //Fiz essas condições pois estava com números a mais dependendo da data
        if (mes >= 2 && mes <= 3) {
            dias -= 1
        } else if (mes >= 4 && mes <= 5) {
            dias -= 2
        } else if (mes >= 6 && mes <= 7) {
            dias -= 3
        } else if (mes === 8) {
            dias -= 4
        } else if (mes >= 9) {
            dias -= 5
        }
        console.log(`Faltam ${dias} dias para o natal!`)
    }
}

diasRestantes()



//2 resolução, gerada pelo chat GPT
// const [mes, dia] = lines;


// function calcularDiasAteNatal(mes, dia) {
        //Declarando as datas
//     const natal = new Date(2016, 11, 25);  
//     const dataAtual = new Date(2016, mes - 1, dia);  
  
       //Pegando um dia em milissegundo para transformar a diferença de natal - dataAtual em dias 
//     const umDiaEmMilissegundos = 24 * 60 * 60 * 1000;
//     const diferencaEmDias = Math.floor(parseFloat((natal - dataAtual) / umDiaEmMilissegundos));
       //Condiçoes de leitura
//     if (diferencaEmDias === 0) {
//         return "E natal!";
//     } else if (diferencaEmDias === 1) {
//         return "E vespera de natal!";
//     } else if (diferencaEmDias < 0) {
//         return "Ja passou!";
//     } else {
//         return `Faltam ${diferencaEmDias} dias para o natal!`;
//         }
// }



// console.log(calcularDiasAteNatal(mes, dia))