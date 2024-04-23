document.querySelector('.botao-header').addEventListener('click', function() {
    // Alterna a visibilidade do menu de navegação ao clicar no botão
    var menu = document.querySelector('.menu-navegacao');
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
 });