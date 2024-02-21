
const fs = require('fs')

/*
fs = constante, readfile = ler a pasta, arquivo.txt = 'seleciona o arquivo', utf8 = padrão da linguagem, (err = erro, data = retorno do erro), 
console.log(data) = mostrar na tela o arquivo ou a data. 
*/
fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    console.log(data)
})