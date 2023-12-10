let videoCarouselIndex = 0; // Começa no primeiro vídeo

function moveVideoSlide(n) {
    let slides = document.getElementsByClassName("video-slide");
    let totalSlides = slides.length;

    // Remove o vídeo atual
    slides[videoCarouselIndex].style.display = "none";

    // Calcula o próximo índice
    videoCarouselIndex = (videoCarouselIndex + n + totalSlides) % totalSlides;

    // Mostra o próximo vídeo
    slides[videoCarouselIndex].style.display = "flex";
}

// Inicializa o carrossel mostrando o primeiro slide
document.addEventListener("DOMContentLoaded", function() {
    moveVideoSlide(0);
});
