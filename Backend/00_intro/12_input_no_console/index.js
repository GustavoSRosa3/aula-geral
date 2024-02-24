const chalk = require("chalk")
const readline = require("readline").Interface({
    input: process.stdin,
    output: process.stdout,
})

readline.question(`Qual a sua linguagem de programação preferida?` ,(language) =>{
    if (language === "JavaScript"){
        console.log(chalk.bgGreen.black("😍 ótima escolha!!!"))
        } else {
            console.log(chalk.bgRed.black("🙄 Desculpa, mas eu prefiro JavaScript!!!"))
        }
    readline.close()
})