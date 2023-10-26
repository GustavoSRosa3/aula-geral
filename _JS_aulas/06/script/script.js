const lista = [1, 2, 3, 4, 5]
 
console.log(lista);
console.log(typeof lista);
 
const itens = [`aluno`, true, 2, 4.75];
console.log(itens);
 
const arr = [`a`, `b`, `c`, `d`];
 
console.log(arr);
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[10]);
 
 
const numbers = [5, 12, 4, 22];
 
// Propriedades do array
 
console.log(numbers.length) //Ira retornar o tamanho do array ( 4 )
 
const myName = `Nicolas`
console.log(myName.length); // ".length" irá contar a quantidade de letras.
 
 
// Métodos com arrays
const otherNumbers = [1, 2, 3];
 
const allNumbers = numbers.concat(otherNumbers); //".concat" irá concatenar os numeros presentes dentro do Array(numbers) com o a nova Array(otherNumbers).
console.log(allNumbers);
 
 
// Propriedades de Strings:
 
const text = `algum texto`;
console.log(text.toUpperCase()); //"toUpperCase()" transfora a string toda em letra maiúscula.
console.log(typeof text.toUpperCase());
 
 
console.log(text.indexOf(`g`)) //"indexOf" irá retornar a posição onde está a letra "g" em forma de números.
 
console.log(text.indexOf(`t`))
 
 
 
// OBJETOS:
const person = {
    name: `Nicolas`,
    age: 37,
    job: `Programador`
}

console.log(person)

console.log(person.name)
console.log(person.age)
console.log(person.job)

console.log(typeof person.name)
console.log(typeof person.age)
console.log(typeof person.job)

const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 2000,
}

console.log(car)
car.doors = 4; //acrescentei mais uma variável ao combo declarado em Const car

console.log(car)

delete car.km // deletou o KM do car
console.log(car)


const obj ={
    a: "teste",
    b: true,
}


console.log(obj instanceof Object)


const obj2 ={
    c: [], // [] = arrey
}


console.log(obj2 instanceof Object)

Object.assign(obj2, obj)

console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(person))

const users = ["Rodox", "Pedro", "Miguel", "Gustavo", "Fernanda"]

// for(let i = 0; i<users.length; i++){
//     console.log(`Listando usuários ${users[i]}`)
// }

const array = ["a", "b", "c"]
array.push("d")

console.log(array)
console.log(array.length)

array.pop()
const itemRemovido = array.pop()

console.log(itemRemovido)
console.log(array)
console.log(array.length)

array.push("Dá", "para", "inserir", "vários")

console.log(array)

const letters = ["a", "b", "c", "d"]
const letter = letters.shift()

console.log(letter)
console.log(letters)

letters.unshift("b", "c")
letters.unshift("p")
console.log(letters)

const myElements = ["morango", "maça", "abacate", "pera", "abacate"]
console.log(myElements.indexOf("maça"))
console.log(myElements.indexOf("abacate"))
console.log(myElements[2])

console.log(myElements[myElements.indexOf("abacate")]) // não retorna pois tem dois elementos iguais, ele diferencia miúsculo de minúsculo

console.log(myElements.lastIndexOf("abacate"))









// ismael

// const lista = [1, 2, 3, 4, 5]
 
// console.log(lista);
// console.log(typeof lista);
 
// const itens = [`aluno`, true, 2, 4.75];
// console.log(itens);
 
// const arr = [`a`, `b`, `c`, `d`];
 
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[3]);
// console.log(arr[10]);
 
 
// const numbers = [5, 12, 4, 22];
 
// // Propriedades do array
 
// console.log(numbers.length) //Ira retornar o tamanho do array ( 4 )
 
// const myName = `Nicolas`
// console.log(myName.length); // ".length" irá contar a quantidade de letras.
 
 
// // Métodos com arrays
// const otherNumbers = [1, 2, 3];
 
// const allNumbers = numbers.concat(otherNumbers); //".concat" irá concatenar os numeros presentes dentro do Array(numbers) com o a nova Array(otherNumbers).
// console.log(allNumbers);
 
 
// // Propriedades de Strings:
 
// const text = `algum texto`;
// console.log(text.toUpperCase()); //"toUpperCase()" transfora a string toda em letra maiúscula.
// console.log(typeof text.toUpperCase());
 
 
// console.log(text.indexOf(`g`)) //"indexOf" irá retornar a posição onde está a letra "g" em forma de números.
 
// console.log(text.indexOf(`t`))
 
 
 
// // OBJETOS:
// const person = {
//     name: `Nicolas`,
//     age: 21,
//     job: `Programador`,
// }
// console.log(person);
 
// console.log(person.name); //"person.name" irá filtrar e retornar apenas a tag "name" que está armazenado dentro do objeto.
 
// console.log(person.age);
// console.log(person.job);
 
// console.log(typeof person.name);
// console.log(typeof person.age);
// console.log(typeof person.job);
 
// console.log(`-----------------------------------------------------------------------------`);
 
 
 
// const car = {
//     engine: 2.0,
//     brand: `VW`,
//     model: `Tiguan`,
//     km: 2000,
// }
 
// console.log(car);
 
// car.doors = 4; //Armazenando um novo elemento dentro do objeto
// console.log(car);
 
// delete car.km //Deletando um elemento de dentro do objeto
// console.log(car);
 
 
 
// console.log(`-----------------------------------------------------------------------------`);
 
 
// const obj = {
//     a: `teste`,
//     b: true,
// }
// console.log(obj);
 
// console.log(obj instanceof Object); // "instanceof" Obj está instaciado como objeto ? (Utilizado para identificar se ele é válido ou não) Resp: true.
 
// const obj2 = {
//     c: [],
// }
// console.log(obj2);
// console.log(obj2 instanceof Object);
 
 
// console.log(`-----------------------------------------------------------------------------`);
 
 
// Object.assign(obj2, obj); //"Object.assign" atribui o mesmo valor para os objetos (obj2 e obj)
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(person));
 
// console.log(`-----------------------------------------------------------------------------`);
 
 
// // Escrever um algoritmo que imprime na tela todos os usuários que contém um array:
 
// const users = [`Nicolas`, `Pedro`, `Miguel`,`Solange`,`Episcopaulo`];
 
// for(let i = 0; i < users.length; i++){
//     console.log(`Listando usuários ${users[i]}`);
   
// }
 
 
// console.log(`-----------------------------------------------------------------------------`);
 
 
// /* Desafio: Escreva um Array que contenha 10 números.
// Uma estrutura de repetição (for) percorra cada um desses elementos armazenados no array */
 
 
// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
// for(let s = 0; s < myArray.length; s++){
//     console.log(`Lista de números: ${myArray[s]}`);
   
// }
 
 
// console.log(`-----------------------------------------------------------------------------`);
 
// const array = [`a`, `b`, `c`];
 
// array.push(`d`); // "push('d') " Irá empurrar a letra D para dentro do array.
 
// console.log(array)
// console.log(array.length);
 
// array.pop(); // "pop()" irá deletar o último elemento do array.
// const itemRemovido = array.pop();
 
// console.log(itemRemovido);
// console.log(array);
// console.log(array.length);
 
 
// array.push(`Dá`, `para`, `inserir`, `vários`); // Inserindo mais de um elemento dentro do array.
 
// console.log(array);
 
 
 
// console.log(`-----------------------------------------------------------------------------`);
 
// const letters = [`a`, `b`, `c`];
// const letter = letters.shift(); //Ira remover o primeiro elemento do array e armazenar na outra constante (letter);
 
// console.log(letters);
// console.log(letter);
 
// // ".unshift()" Acrecenta elementos sempre à frente dos elementos presentes dentro do array.
// letters.unshift(`z`,`x`,`y`); // Acrescentando as letras z, x, y à frente dos outros elementos;
// letters.unshift(`p`);
// console.log(letters);
 
 
// console.log(`-----------------------------------------------------------------------------`);
 
 
// const myElements = [`morango`, `maçã`, `abacate`, `pêra`, `abacate`];
 
// console.log(myElements.indexOf(`maçã`));
// console.log(myElements.indexOf(`abacate`));
// console.log(myElements[2]);
 
// console.log(myElements[myElements.indexOf(`abacate`)]);
 
// console.log(myElements.lastIndexOf(`abacate`)); // Irá retornar último valor repetido.