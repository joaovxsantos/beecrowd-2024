const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.trim().split('\n').map(l => l.replace('\r', ''));


//Desestruturando
let [, ...alunosEntrada] = lines;


//Loopando enquanto houver elementos no array
while (alunosEntrada.length > 0) {

    //Desestruturando entrada
    let [, alunos, frequencias] = alunosEntrada.splice(0, 3)

    //Declarando variável
    let resultado = [];

    //Redefinindo variáveis
    alunos = alunos.split(' ')
    frequencias = frequencias.split(' ')

    //Varrendo de elemento em elemento
    frequencias.forEach((frequencia, index) => {

        //Iniciando objeto que contabiliza as presenças e faltas
        let quantDadosFrequencia = { P: 0, A: 0 };

        //Varrendo o atual elemento letra por letra
        for (let i = 0; i < frequencia.length; i++) {
            quantDadosFrequencia[frequencia[i]]++
        }

        //Calculando o total de aulas
        const total = quantDadosFrequencia.P + quantDadosFrequencia.A

        //Calculando a porcentagem de presença do aluno
        const presenca = Math.floor((quantDadosFrequencia.P / total) * 100);

        //Se for menor que 75, então adiciona o nome dele ao array
        if (presenca < 75) {
            resultado.push(alunos[index])
        }
    })

    //Lendo o array (mesmo vazio é necessário, o problema pede um espaço vazio quando não há alunos com presença menor que 85)
    console.log(resultado.join(' '));
}
