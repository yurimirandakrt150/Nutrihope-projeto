// selecionei o elemento footer para inserir a div antes dele
var footerElement = document.querySelector('footer');

// criação da div adicionei flex box e fiz os procedimentos com align e justify center para centralizar os elementos
var novaDiv = document.createElement('div');
novaDiv.classList.add('segunda-sessao');
novaDiv.style.backgroundColor = '#lightgray';
novaDiv.style.color = 'black';
novaDiv.style.textAlign = 'center';
novaDiv.style.padding = '10px';
novaDiv.style.display = 'flex'; 
novaDiv.style.alignItems = 'center';
novaDiv.style.justifyContent = 'center'; 

// criei uma div pro texto pra colocar ele no centro e adicionei uma margem para dar um espaço das laterais
var textoDiv = document.createElement('div');
textoDiv.style.textAlign = 'center'; 
textoDiv.style.marginRight = '25px';

// adicionei titulo e paragrafo
var titulo = document.createElement('h2');
titulo.textContent = "Por que escolher a NutriHope como parceira ?";
textoDiv.appendChild(titulo);
var texto = document.createElement('p');
texto.textContent = "Nós da NutriHope estamos comprometidos em fornecer soluções nutricionais de alta qualidade, com preços acessíveis e atendimento personalizado. Nossa equipe de nutricionistas qualificados está aqui para ajudar você a alcançar seus objetivos de saúde e bem-estar. Conte conosco para orientá-lo em sua jornada para uma vida mais saudável e equilibrada.";
textoDiv.appendChild(texto);
novaDiv.appendChild(textoDiv);

// img
var imagem = document.createElement('img');
imagem.src = './images/Team spirit-pana.png';
imagem.style.maxWidth = '550px';
imagem.style.maxHeight = '550px';
novaDiv.appendChild(imagem);

// usei para inserir a div antes do footer
footerElement.parentNode.insertBefore(novaDiv, footerElement);