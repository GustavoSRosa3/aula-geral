// Exercício 1:
// const inquirer = require("inquirer")

// const questions = [
//     {
//         type: 'list',
//         name: 'cor',
//         message: 'qual é a sua cor preferida?',
//         choices: ['Vermelho','Verde','Azul'],
//     }
// ]

// inquirer
//     .prompt(questions)
//     .then(answers => {console.log('Sua cor favorita é: ', answers.cor)})
//     .catch(error => {console.error('Ocorreu um erro:', error)})

// Exercício 2:
// const inquirer = require("inquirer")
// const chalk = require("chalk");

// const questions = [
//     {
//         type: 'input', 
//         name: 'name', 
//         message: 'Informe seu nome por favor...',
//         validate: function (value){
//         if (value.trim().length >= 4){
//             return true;
//            } else {
//                 return 'Preenchimento obrigatório, no mínimo 4 caracteres...'
//             }
//         }
//     } 
// ]

// inquirer
//     .prompt(questions)
//     .then(answers => {
//         console.log(chalk.bold("Saudação, " + answers.name + ", seja bem vindo ao sistema!"))
//     })
//     .catch(error => {
//         console.error('Ocorreu um erro:', error);
//         }

//     )

// Exercício 3:
    // const chalk = require("chalk");
    // const inquirer = require("inquirer");
    
    // inquirer
    //     .prompt([
    //         {
    //             type: 'list',
    //             name: 'resposta',
    //             message: 'Você deseja continuar?',
    //             choices: ['SIM', 'Não'],
    //         }
    //     ])
    //     .then(answers => {
    //         const resposta = answers.resposta;
    
    //         if (resposta === "SIM") {
    //             console.log(chalk.bgGreen.bold("Sua resposta foi: SIM"));
    //         } else if (resposta === "Não") {
    //             console.log(chalk.bgRed.bold("Sua resposta foi: NÃO"));
    //         } else {
    //             console.log(chalk.yellow.bold("Opção inválida. Responda com SIM ou Não."));
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Ocorreu um erro:', error);
    //     });
    

// Exercício 4:
// const inquirer = require("inquirer")

// const questions = [
//     {
//         type: 'list',
//         name: 'fruta',
//         message: 'qual é a sua fruta preferida?',
//         choices: ['Laranja','Limão','Tangerina','Morango','Abacaxi','Mirtilo'],
//     }
// ]

// inquirer
//     .prompt(questions)
//     .then(answers => {console.log('Sua fruta favorita é: ', answers.fruta)})
//     .catch(error => {console.error('Ocorreu um erro:', error)})

// Exercício 5:
// const chalk = require("chalk")
// const readline = require("readline").Interface({
//     input: process.stdin,
//     output: process.stdout,
// })

// readline.question(`De 1 a 5, qual a sua avaliação do produto?` ,(language) =>{
//     if (language === "1"){
//         console.log(chalk.bold("⭐ avaliação péssima!!!"))
//         } else if (language === "2") {
//             console.log(chalk.bold("⭐⭐ avaliação ruim!!!"))
//         } else if (language === "3") {
//             console.log(chalk.bold("⭐⭐⭐ avaliação regular!!"))
//         } else if (language === "4") {
//             console.log(chalk.bold("⭐⭐⭐⭐ avaliação boa!!"))
//         } else if (language === "5"){
//             console.log(chalk.bold("⭐⭐⭐⭐⭐ avaliação ótima!!"))
//         }
//     readline.close()
// })