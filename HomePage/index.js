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
