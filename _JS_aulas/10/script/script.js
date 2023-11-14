console.log(document.body);

console.log(document.body.childNodes);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes[1]);

console.log(document.body.childNodes[1].childNodes[1].textContent);
// ------------------------------------------------------------------------
// tag
const listItens = document.getElementsByTagName("li");

console.log(listItens);
// ------------------------------------------------------------------------
// class
const products = document.getElementsByClassName("product");

console.log(products);
// ------------------------------------------------------------------------
// id
const title = document.getElementById("title");

console.log(title);
// ------------------------------------------------------------------------
// selecionar elementos css
const productQuery = document.querySelectorAll(".product");

console.log(productQuery);

// const mainContainer = document.querySelectorAll("#main-container");

// console.log(mainContainer);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// ----------------------------------------------------------------------
// criação de elemento no html
const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);