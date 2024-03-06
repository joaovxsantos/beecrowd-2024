var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input;

//Verificando o length e imprimindo de acordo com o solicitado
lines.length <= 9? console.log('palavrinha') : console.log('palavrao')