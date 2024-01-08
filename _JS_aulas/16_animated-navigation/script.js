const nav =document.getElementById('nav')
const toggle =document.getElementById('toggle')

toggle.addEventListener('click', () =>
    nav.classList.toggle('active'))

// desativa a nav e ativa o toggle e ao clicar de novo faz o movimento reverso