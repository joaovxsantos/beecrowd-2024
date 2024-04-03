const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.trim().split('\n').map(l => l.replace('\r', ''));
// BEE 3166 TERMINAR AMANHA (04/04)


let [iterator, ...nums] = lines

while (nums.length > 0) {
    let num = +nums[0]
    let count = 0;
    nums.splice(0, num + 1).forEach((item, indx) => {
        if (indx > 0) {
            let elementoEntrada = indx - 1

            item.split('').forEach((letter, indx2) => {
                let posicaoElemento = indx2;
                letter = letter.toLowerCase()

                if (/[a-z]/.test(letter)) {
                    letter = letter.charCodeAt(0) - 97
                    count += letter + elementoEntrada + posicaoElemento
                }
            })

        }
    })
    console.log(count);
}