const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n').map(el => el.replace('\r', ''));


//Função que formata as horas e os minutos
const format = (num) => {
    if (num < 10) {
        return '0' + num
    }
    return num
}

//Varrendo o array
lines.forEach((nums) => {

    //Desestruturando os números
    let [h, m] = nums.split(' ').map(Number)

    //Reatribuindo com a conta necessária
    h = h / 30;
    m = m / 6

    //Lendo
    console.log(`${format(h)}:${format(m)}`)
})