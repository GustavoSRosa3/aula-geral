const chalk = require('chalk');
 
const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o nome do aluno?", (nomeAluno) =>{
    rl.question("Digite a primeira nota:", (nota1) => {
         rl.question("Digite a segunda nota:", (nota2) => {
                const media = (Number(nota1) + Number(nota2)) /2;
 
                console.log(chalk.bold(`Aluno(a): ${nomeAluno} teve a media Média: ${media.toFixed(2)}`));
 
            if(media < 5){
                console.log(chalk.red.bold(`👎 Reprovado!`));
            }else if (media > 5, media < 7){
                console.log(chalk.yellow.bold(`🤞 Rcuperação!`));
            } else{
            console.log(chalk.green.bold(`🤞 Aprovado!`));            
            };
            rl.close();
        });
    });
});