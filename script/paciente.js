document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const inputs = document.querySelectorAll('.inputUser');
    const radios = document.querySelectorAll('input[type="radio"][name="Renda"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        // Validação dos campos de entrada
        inputs.forEach(function(input) {
            if (input.value.trim() === '') {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        // Validação dos botões de rádio de "Renda"
        let radioChecked = false;
        radios.forEach(function(radio) {
            if (radio.checked) {
                radioChecked = true;
            }
        });

        if (!radioChecked) {
            isValid = false;
            alert('Por favor, selecione uma opção de Renda.');
        }

        if (isValid) {
            alert('Formulário enviado com sucesso!');
            form.reset(); // Limpa os campos do formulário
        }
    });
});

