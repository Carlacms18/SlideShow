// Define a variável que armazena o índice do slide atual
let slideIndex = 0;

// Chama a função para mostrar o slide atual ao carregar a página
showSlides(slideIndex);

// Função para avançar ou retroceder nos slides
function passarSlides(n) {
    // Atualiza o índice do slide e chama a função para mostrar o slide correspondente
    showSlides(slideIndex += n);
}

// Função para mostrar o slide baseado no índice passado como argumento
function showSlides(n) {
    //  todos os elementos com a classe "slide-img"
    let slides = document.getElementsByClassName("slide-img");

    // Se o índice é maior ou igual ao número de slides, volta ao primeiro slide
    if (n >= slides.length) {
        slideIndex = 0;
    }

    // Se o índice é menor que zero, vai para o último slide
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Esconde todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Mostra o slide correspondente ao índice atual
    slides[slideIndex].style.display = "block";
}

// Inicializa o slideshow exibindo a primeira imagem quando o documento é totalmente carregado
document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);
});


//Atividade 2
// let slide2Index = 0;
// show2Slides(slide2Index);

// function passar2Slides(a) {
//     show2Slides(slideIndex += a);
// }

// function show2Slides(a) {
//     let slides2 = document.getElementsByClassName("slide2-img");
//     if (a >= slides2.length) { slide2Index = 0 }
//     if (a < 0) { slide2Index = slides2.length - 1 }
//     for (let i = 0; i < slides2.length; i++) {
//         slides2[i].style.display = "none";
//     }
//     slides2[slide2Index].style.display = "block";
// }

// // Inicializa o slideshow exibindo a primeira imagem
// document.addEventListener("DOMContentLoaded", function() {
//     show2Slides(slide2Index);
// });

let slide2Index = 0;

function passar2Slides(a) {
    slide2Index += a;
    show2Slides(slide2Index);
}

function show2Slides(a) {
    let slides2 = document.getElementsByClassName("slide2-img");
    let totalSlides2 = Math.ceil(slides2.length / 3);

    if (a >= totalSlides2) {
        slide2Index = 0;
    }

    if (a < 0) {
        slide2Index = totalSlides2 - 1;
    }

    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }

    for (let i = 0; i < 3; i++) {
        let slideToShow = slide2Index * 3 + i;
        if (slideToShow < slides2.length) {
            slides2[slideToShow].style.display = "block";
        }
    }
}
document.addEventListener("DOMContentLoaded", function() {
    show2Slides(slide2Index);
});
