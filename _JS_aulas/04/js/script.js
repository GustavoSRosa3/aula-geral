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

// let numero = parseInt(prompt("Digite um número de 1 até 12"))

// switch(numero){
//     case 1:
//         console.log("Janeiro")
//     break;
//     case 2:
//         console.log("Fevereiro")
//     break;
//     case 3:
//         console.log("Março")
//     break;
//     case 4:
//         console.log("Abril")
//     break;
//     case 5:
//         console.log("Maio")
//     break;
//     case 6:
//         console.log("junho")
//     break;
//     case 7:
//         console.log("Julho")
//     break;
//     case 8:
//         console.log("Agosto")
//     break;
//     case 9:
//         console.log("Setembro")
//     break;
//     case 10:
//         console.log("Outubro")
//     break;
//     case 11:
//         console.log("Novembro")
//     break;
//     case 12:
//         console.log("Dezembro")
//     break;

//     default:
//         console.log("Mês invalido")

// }


// Desafio -------------------------------------------------------------------------

// let prof = String(prompt("Digite sua profissão abaixo:"))

// if(prof == 'Programador'){
//     console.log("Você é um programador");
//     document.write("Você é um programador");
// }
// else if (prof == 'Advogado'){
//     console.log("Você é um Advogado");
//     document.write("Você é um Advogado");
// }
// else if (prof == 'Engenheiro'){
//     console.log("Você é um Engenheiro");
//     document.write("Você é um Engenheiro");
// }
// else{
//     console.log("Profissão não identificada");
//     document.write("Profissão não identificada");
// }

// -----------------------------------------------------------------------------------

//  estruturas de contador: contador++
//  ou
//  contador = contador + 1
// ou
// number += 5

// let contador = 1

// while (contador <= 5){
//     console.log(contador);
//     // contador++;
//     contador = contador + 1
// }

// ------------------------------------------------------------------------------------

// Desafio

// utilizando a estrutura while, solicite ao usuário que escolha um número de 0 a 10
// apresente a partir do número escolhido o somatório até 100 no console

// let number = Number(prompt("Dígite um número de 1 até 10"))

// while(number <=100){
//     console.log(number);
//     // number = number + 5;
//     number += 5;
// }


// let number = Number(prompt("Dígite um número de 1 até 10"))

// while(number >=0){
//     console.log(number);
//     // number = number + 5;
//     number -= 1;
// }



// ------------------------------------------------------------------------------------

//  Forma mais antiga de fazer um contador

// let contador = 5;

// do{
//     console.log(contador)
//     contador--
// } while (contador >0)

// -------------------------------------------------------------------------------------

// contador com uma estrutura mais atual

// for (let i = 0; i<=5; i++){   // valor  do for - valor 1 = valor da variavel; valor 2 = limite da repetição; valor 3 = como vai ser o laço, no caso para + (++) ou para menos (--)
//    console.log(i)
// } 

// ------------------------------------------------------------------------------------

// Desafio

// for (let i = 20; i <= 100; i++){
//     console.log(i)
//     document.write(i)
// }

// --------------------------------------------------------------------------------------

// Desafio 

// let numero = Number(prompt("Digite um número: "));

// console.log("Números ímpares entre 1 e " + numero + ":")
// % = significa "resto da divisão" ou seja, "o resto da dívisão do número declarado na variável i por 2 for diferente de zero" então o console.log mostra o i
// for (let i = 1; i <= numero; i += 2) {
//     if(i % 2 !== 0){       
//         console.log(i);
//     }
    
// }

// -----------------------------------------------------------------------------------------

// Desafio - minha solução

// fazer igual o modelo acima, porem, com números pares

// let numero = Number(prompt("Digite um número: "));

// console.log("Números pares entre 0 e " + numero + ":")

// for (let i = 0; i <= numero; i += 2) {
//     if(i % 2 == 0){       
//         console.log(i);
//     }
    
// }


// solução thayane

let numero = Number(prompt("Digite um número: "));

console.log("Números ímpares entre 1 e " + numero + ":")
// % = significa "resto da divisão" ou seja, "o resto da dívisão do número declarado na variável i por 2 for diferente de zero" então o console.log mostra o i
for (let i = 0; i <= numero; i += 2) {

    if(i % 2 !== 0){       
        console.log(i);
    }
    else{
        console.log(`O número ${i} é par`)
    }
    
}