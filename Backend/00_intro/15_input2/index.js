const inquirer = require("inquirer")

const questions = [
    {
        type: 'list',
        name: 'animal',
        message: 'qual é o seu animal favorito?',
        choices: ['cachorro','gato','coelho', 'peixe', 'pássaro'],
    }
]

inquirer
    .prompt(questions)
    .then(answers => {
        console.log('Seu animal favorito é: ', answers.animal)
        }
    )
    .catch(error => {
        console.error('Ocorreu um erro:', error);
        }
    )