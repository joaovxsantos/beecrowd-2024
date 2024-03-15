const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n').map(el => el.replace('\r', ''));


let indexs = []


//Filtrando o array
lines.filter((html, indx) => {
    //Se for a tag for a abertura ou fechando do body, então pega o index
    if (html.includes('<body>') || html.includes('</body>')) {
        indexs.push(indx)
    }
});

//Pegando os elementos de acordo com os index obtidos no filter
let res = lines.slice(indexs[0] + 1, indexs[1])

//Varrendo o array de elementos
for (let tag of res) {
    console.log(tag)
}