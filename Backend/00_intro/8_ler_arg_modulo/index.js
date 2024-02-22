// comando usado para esse exemplo no terminal do node: node .\index.js --nome=Gustavo --idade=26 => utilizando a biblioteca externa com o npm (site do node)
// para aparecer no minimist tem q colocar -- no arqumento do terminal

const minimist = require("minimist")

const args = minimist(process.argv.slice(2))
console.log(args)

const nome = args["nome"]
console.log(`Meu nome é: ${nome}`)
const idade = args["idade"]
console.log(`Tenho: ${idade}`)