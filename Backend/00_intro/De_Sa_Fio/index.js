const chalk = require("chalk")
const onePiece = require("onePiece").Interface({
    input: process.stdin,
    output: process.stdout,
})

o.question(`Qual a função do personagem de One Piece escolhido?` ,(Language) =>{
    if (Language === "Luffy"){
        console.log(chalk.bgRed.white("Capitão dos Chapeus de palha"))
    } else if  (Language === "Zoro"){
        console.log(chalk.bgGreen.black("Sub capitão dos chapeus de palha"))  
    }else if  (Language === "Sanji"){
        console.log(chalk.bgGreen.black("Cozinheiro dos chapeus de palha"))  
    }else{
        console.log(chalk.red("Não é da tripulação"))
    }
    onePiece.close()
})
