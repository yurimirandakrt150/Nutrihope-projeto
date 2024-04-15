function getColorForIMC(imc) {
if (imc < 18.5) {
   return "red"; // Baixo peso
} else if (imc >= 18.5 && imc < 25) {
   return "green"; 
} else if (imc >= 25 && imc < 30) {
   return "orange"; // Sobrepeso
} else if (imc >= 30 && imc < 35) {
   return "red"; // Obesidade grau 1
} else if (imc >= 35 && imc < 40) {
   return "red"; // Obesidade grau 2
} else {
   return "red"; // Obesidade extrema
}
}
document.addEventListener("DOMContentLoaded", function() {
// Selecione os elementos do DOM
const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const calcularBtn = document.getElementById("calcular");
const resultadoDiv = document.createElement("div");

// Adicione um evento de clique ao botão de calcular
calcularBtn.addEventListener("click", function() {
// Remova o resultado anterior, se houver
if (resultadoDiv.parentNode) {
resultadoDiv.parentNode.removeChild(resultadoDiv);
}

// Crie um novo elemento para exibir o resultado
resultadoDiv.id = "resultado";
resultadoDiv.style.marginTop = "10px";

// Obtenha os valores de peso e altura dos campos de entrada
const peso = parseFloat(pesoInput.value);
const altura = parseFloat(alturaInput.value);

// Verifique se os valores inseridos são válidos
if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
resultadoDiv.textContent = "Por favor, insira valores válidos para peso e altura.";
} else {
// Calcule o IMC
const imc = peso / (altura * altura);

// Determine a classificação do IMC de acordo com a OMS
let classificacao;
if (imc < 18.5) {
   classificacao = "Baixo peso";
} else if (imc >= 18.5 && imc < 25) {
   classificacao = "Eutrofia (peso adequado)";
} else if (imc >= 25 && imc < 30) {
   classificacao = "Sobrepeso";
} else if (imc >= 30 && imc < 35) {
   classificacao = "Obesidade grau 1";
} else if (imc >= 35 && imc < 40) {
   classificacao = "Obesidade grau 2";
} else {
   classificacao = "Obesidade extrema";
}

// Adicione a cor de acordo com o resultado do IMC
const color = getColorForIMC(imc);

// Exiba o resultado
resultadoDiv.innerHTML = `<p>Seu IMC é: <span class="${color}">${imc.toFixed(2)}</span>. Classificação: ${classificacao}.</p>`;

// Calcule o intervalo de peso adequado com base na altura
const pesoMinimo = 18.5 * (altura * altura);
const pesoMaximo = 24.9 * (altura * altura);

// Adicione o peso ideal com a mesma cor
resultadoDiv.innerHTML += `<p>Peso ideal: ${pesoMinimo.toFixed(1)}kg - ${pesoMaximo.toFixed(1)}kg</p>`;
}

// Adicione o resultado à calculadora de IMC
const calculadoraImc = document.querySelector(".calculadora_imc");
calculadoraImc.appendChild(resultadoDiv);
});
});