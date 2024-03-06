const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(element => element.replace('\r', ''));

//Enquanto lines ainda tiver elementos, então loopa
while (lines.length > 0) {
    let record = 0;

    //Pegando os elementos de acordo com o solicitado em lines[0]
    //Se 3, então pego os proximos 3, se 2 então pego os proximos 2 e assim por diante
    let arr = lines.splice(0, parseFloat(lines[0]) + 1);

    //Loop para iterar sob o novo array
    for (let i = 1; i < arr.length; i++) {
        //Fazendo a média com diversos metodos de array
        let media = arr[i].split(' ').map(element => Number(element)).reduce((accum, element, indx) => {
            indx === 1 ? accum = (element / accum) : accum = element
            return accum
        }, 0)

        //Se a media for maior que o record, então record recebe media e lê o i (dia)
        if (media > record) {
            record = media
            console.log(i)
        }
    }
}