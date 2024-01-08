const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {                       // forEach(panel) = para cada evento de click pegar os panel
    panel.addEventListener('click', () => 
        {
            removeActiveClass()
            panel.classList.add('active')
        })
})

function removeActiveClass(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
