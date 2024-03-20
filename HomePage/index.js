$(document).ready(function(){
    if (window.matchMedia("(max-width: 768px)").matches) { 
        $("#textoContainerElaboracion, #textoContainerElaboracion2").on("touchstart", function(){
            if ($(this).hasClass("expanded")) {
                $(this).removeClass("expanded");
            } else {
                $(this).addClass("expanded");
            }
        });
    }
});

var audio = document.getElementById('audio');
var cuerno = document.getElementById('cuerno');
var accordion = document.getElementById('accordion');

function playAudio() {
    audio.volume = 0.5; // Establece el volumen al 50%
    audio.play();
    cuerno.classList.add('shake'); // Inicia la animación
    accordion.style.display = 'block'; // Muestra el acordeón
}

audio.addEventListener('play', function() {
    cuerno.classList.add('shake'); // Inicia la animación
});

audio.addEventListener('ended', function() {
    cuerno.classList.remove('shake'); // Detiene la animación
});