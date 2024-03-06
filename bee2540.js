const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(el => el.replace('\r', '').split(' ').map(Number));

//Salvando o tamanho do array
let length = lines.length

//Função que faz a conta de 2/3
const partMember = (membros) => {
    return (membros / 3) * 2
}

//Loop que itera sob os elementos e verifica se há 2/3 dos votos de membros para 'impeachment'
for (let i = 0; i < lines.length / 2; i++) {
    let [membros, votos] = lines.splice(0, 2);

    if (membros && votos) {
        let totalVotos = votos.reduce((accum, element) => accum += element);

        totalVotos >= partMember(membros) ? console.log('impeachment') : console.log('acusacao arquivada')
    }
}