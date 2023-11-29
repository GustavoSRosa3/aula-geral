let header = document.querySelector("header");

let menu = document.querySelector("#menu-icon");

let navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    navbar.classList.remove("active");
};

let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
    if(darkmode.classList.contains("bx-moon")){
        darkmode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("active");
    } else {
        darkmode.classList.replace("bx-sun", "bx-moon");
        document.body.classList.remove("active");
    }
};





document.addEventListener('DOMContentLoaded', function () {
    // Seletor do botão do WhatsApp
    var whatsappButton = document.getElementById('whatsapp-button');

    // Evento de clique no botão do WhatsApp
    whatsappButton.addEventListener('click', function () {
        var whatsappNumber = '95997-1380';

        // Monta o link do WhatsApp
        var whatsappLink = 'https://wa.me/5511959971380?text=Ol%C3%A1%2C+se+interessou+pelo+portif%C3%B3lio%3F+Para+mais+informa%C3%A7%C3%B5es+entrem+em+contato+no+meu+whatsapp%21' + whatsappNumber;

        // Abre a página do WhatsApp em uma nova janela
        window.open(whatsappLink, '_blank');
    });
});


