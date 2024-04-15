// Adiciona o carrosel de imagens na página.
let slideIndex = 0;
function carrosel() {
    let i;
    let x = document.getElementsByClassName("slide") ;

    // Coloca todas as imagens da classe "slide" como "display:none"
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    // Contador para controle
    slideIndex++;
    
    // Reseta o contador quando ele alcança o tamanho total do array de imagens
    if (slideIndex > x.length){
        slideIndex = 1
    }
    
    // Coloca a imagens selecionada como "displau:block"
    x[slideIndex-1].style.display = "block";

    // Troca a imagem a cada 5 Segundos
    setTimeout(carrosel, 5000); 
}

carrosel();

// Adiciona a função "Ver Mais" e " Ver Menos" na section "porque_vermais"

let button = document.getElementById('btnVerMais');

// Adiciona o evento de click ao botão que vai chamar a função
button.addEventListener('click', function(){

    // Faz com que a DIV "porque" receba ou perca o atributo ".active" quando o botão é clicado.
    let porque = document.querySelector('.porque');
    porque.classList.toggle('active');

    // Altera o texto do botão com base no atributo da DIV
    if(porque.classList.contains('active')){
        return button.textContent = "Ver Menos";
    }else{
        return button.textContent = "Ver Mais";
    }
})