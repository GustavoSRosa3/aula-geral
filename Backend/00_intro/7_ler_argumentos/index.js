// comando usado para esse exemplo no terminal do node: node .\index.js nome=Gustavo idade=26


const { argv } = require("process");

console.log(process.argv)

const args = process.argv.slice(2); // slice = fatiar/cortar/dividir

console.log(args)

const nome = args[0].split("=")[1]; // de args eu vou querer o primeiro elemento e tudo depois do igual eu quero a primeira coisa que aparecer
const idade = args[1].split("=")[1];

console.log(nome)
console.log(idade)

console.log(`o usuário ${nome} tem ${idade} anos`)