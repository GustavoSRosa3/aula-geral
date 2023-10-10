console.log(2);
console.log(10); 
console.log("Meu nome é Lord Darkus");
console.log(5+1);
console.log(typeof 2);
console.log(typeof 10); 
console.log(typeof "Meu nome é Lord Darkus");
console.log(typeof 5+1);

// typeof = mostra o tipo do campo no F12
// comentário de linha única

/** 
 comentário
 longo
 demais
*/

// Operações matemática

console.log(2+4);
console.log(10-5);
console.log(5*4);
console.log(20/4);

// abre no brownser e aperta F12 e depois em "Console" para ver o resultado das operações

// Texto
console.log("Eu sou um texto");
console.log('Tbm sou um texto');
console.log('Sou um texto mais modero');

console.log(typeof "Eu sou um texto");
console.log(typeof 'Tbm sou um texto');
console.log(typeof 'Sou um texto mais modero');

console.log("Testando \n quebra de linha"); // \n = quebra de linha
console.log("Testando \t espaçamento de tab"); // \t = espaçamento de tab

// o ponto e virgula é opcional

console.log("oi")
console.log("tudo bem")

console.log("oi," + "tudo bem?") // o sinal de mais + é usado para concatenar informações
console.log("A soma é: " + (2+2))

// interpolação

console.log(`A soma é: ${2+2}`) // a crase ` serve para teste lógico com string e numb

// boolean

console.log(5 > 3)
console.log(3 > 5)
console.log(3 >= 5)
console.log(3 < 5)
console.log(3 <= 5)
console.log(3 <= 5)
console.log(3 == 5)
console.log(5 == 5)
console.log(5 != 5)
console.log(5 == 4)

// let ou var = são jeitos de declarar variáveis sendo LET a mais moderna

let nome = "Rodolfo";
console.log(nome);
// para declarar usamos o LET, para alterar basta colocar o nome da variável e seu novo valor
nome = "Scrum Master"
console.log(typeof nome)

let idade = 37
console.log(idade)

idade = idade + 1
console.log(idade)
// isso aq "idade = idade + 1" é a mesma coisa q isso aq "idade += 1" mas o segundo é incremental
idade += 1 //incrementar usar a logica e os recursos lógicos para tornar o código mais limpo
console.log(idade)

idade -= 1;
console.log(idade)


let nome1 = "Alex"
console.log(nome1)

/** alert("Seja bem vindo, jovem!") //cria alertas na página
*/

// alert(`O nome é ${nome1}`)

nome1 = "Toníco"
// alert(`O nome é ${nome1}`)

const nomeCompleto = "Rodolfo G." // const é uma variável constante, ou seja, não importa se tentar declarar outro valor pra ela, ela não aceita pq é constante, o valor declarado inicialmente será mantido até o final
console.log(nomeCompleto)

nomeCompleto = "Gustavo"
console.log(nomeCompleto)

