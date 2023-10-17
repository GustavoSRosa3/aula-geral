// let nota1 = parseFloat(prompt("nota1"))
// let nota2 = parseFloat(prompt("nota2"))
// let nota3 = parseFloat(prompt("nota3"))

// let media = (nota1 + nota2 + nota3) / 3

// E = && ; OU = ||

// if(media < 5){

//     console.log(`Aluno(a) reprovado(a) com média ${media}`)

// }

// else if(media >= 5 && media < 7){

//     console.log(`Aluno(a) em recuparação com média ${media}`)

// }

// else{

//     console.log(`Aluno(a) aprovado(a) com média ${media}`)

//-----------------------------------------------------------------------------

// let numero = parseInt(prompt("Digite um número de 1 até 12"))

// if(numero === 1){
//     console.log("O mês digitado foi: Janeiro")
// }
// else if (numero === 2){
//     console.log("O mês digitado foi: Fevereiro")
// }
// else if (numero === 3){
//     console.log("O mês digitado foi: Março")
// }
// else if (numero === 4){
//     console.log("O mês digitado foi: Abril")
// }
// else if (numero === 5){
//     console.log("O mês digitado foi: Maio")
// }
// else if (numero === 6){
//     console.log("O mês digitado foi: Junho")
// }
// else if (numero === 7){
//     console.log("O mês digitado foi: Julho")
// }
// else if (numero === 8){
//     console.log("O mês digitado foi: Agosto")
// }
// else if (numero === 9){
//     console.log("O mês digitado foi: Setembro")
// }
// else if (numero === 10){
//     console.log("O mês digitado foi: Outubro")
// }
// else if (numero === 11){
//     console.log("O mês digitado foi: Novembro")
// }
// else if (numero === 12){
//     console.log("O mês digitado foi: Dezembro")
// }

// --------------------------------------------------------------

let numero = parseInt(prompt("Digite um número de 1 até 12"))

switch(numero){
    case 1:
        console.log("Janeiro")
    break;
    case 2:
        console.log("Fevereiro")
    break;
    case 3:
        console.log("Março")
    break;
    case 4:
        console.log("Abril")
    break;
    case 5:
        console.log("Maio")
    break;
    case 6:
        console.log("junho")
    break;
    case 7:
        console.log("Julho")
    break;
    case 8:
        console.log("Agosto")
    break;
    case 9:
        console.log("Setembro")
    break;
    case 10:
        console.log("Outubro")
    break;
    case 11:
        console.log("Novembro")
    break;
    case 12:
        console.log("Dezembro")
    break;

    default:
        console.log("Mês invalido")

}


