const body = document.body
const slides = document.querySelectorAll('.slide') /* querySelectorAll = seleciona todos os elementos html com o nome slide */
const leftBtn = document.getElementById('left') /* getElementById = seleciona o elemento html através do Id */
const rightBtn = document.getElementById('right')

let activeSlide = 0 /* para usar como contador e trocar a imagem */


rightBtn.addEventListener('click', () =>{
    activeSlide++
    if(activeSlide > slides.length -1){
        activeSlide = 0
    }
    setBgToBody() /*chamando a função*/
    setActiveSlide() /*chamando a função*/   
}) /* o botão vai ficar ouvindo o comando click, com a função de crescer para a direita = ++, se o conjunto de imagens for maior que as imagens (length ele retorna a quantidade de imagens existente - 1) ele volta para a imagem 0*/


leftBtn.addEventListener('click', () =>{
    activeSlide--
    if(activeSlide < 0){
        activeSlide = slides.length -1
    }
    setBgToBody() /*chamando a função*/
    setActiveSlide() /*chamando a função*/
}) /* o botão vai ficar ouvindo o comando click, com a função de diminuir para a esquerda = -- */


setBgToBody()


function setBgToBody(){ /* altera a imagem de fundo */
    body.style.backgroundImage = slides
    [activeSlide].style.backgroundImage
} /* a imagem de fundo recebe o slide que estiver com o slide ativo */

function setActiveSlide(){ /* altera o slide ativo */
    slides.forEach((slide) => slide.classList.remove('active'))
/* remove todos os slides da lista com o 'active', o forEach é para a repetição */

    slides[activeSlide].classList.add('active')
} /* se le: seleciona os slides . seleciona a lista de classes . adiciona o slide ativo */
 