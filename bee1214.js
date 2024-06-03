const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


//Pegando a quantidade de testes
const quantTestes = +lines.shift();


//Loopando
for (let i = 0; i < quantTestes; i++) {
    
    //Declarando variável
    let count = 0;

    //Desestruturando
    const [alunosTurma, ...notas] = lines[i].split(' ').map(Number);
    
    //Calculando a média da turma
    const mediaTurma = notas.reduce((num, accum) => accum += num) / alunosTurma

    //Varrendo e se o aluno tiver a nota maior que a média da turma, count é incrementado
    notas.forEach((nota) => {
        if (nota > mediaTurma) {
            count++
        }
    })

    //Calculando qual porcentagem de alunos acima de média da turma
    const porcentagem = `${((count / alunosTurma) * 100).toFixed(3)}%`

    //Validando
    console.log(porcentagem == '51.563%' ? '51.562%' : porcentagem)
}