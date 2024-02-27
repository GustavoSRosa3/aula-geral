const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
    .prompt([
        { name: 'p1', message: 'Qual o seu Nome?' },
        { name: 'p2', message: 'Qual a sua idade?' },
    ])
    .then((answers) => {
        console.log(answers);
        const nome = answers.p1;
        const idade = answers.p2;

        console.log(chalk.bgYellow.black(`o usuário ${nome} tem ${idade} anos`));
    })
    .catch((err) => {
        console.log(err);
    });