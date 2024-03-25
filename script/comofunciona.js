let slideIndex = 0;
function carrosel() {
    let i;
    let x = document.getElementsByClassName("slide") ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length){
        slideIndex = 1
    }
    x[slideIndex-1].style.display = "block";
    setTimeout(carrosel, 5000); //Troca a imagem a cada 5 Segundos
}

carrosel();