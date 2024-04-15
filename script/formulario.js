document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const inputs = document.querySelectorAll('.inputUser');
    const radios = document.querySelectorAll('input[type="radio"][name="Sexo"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        inputs.forEach(function(input) {
            if (input.value.trim() === '') {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        let radioChecked = false;
        radios.forEach(function(radio) {
            if (radio.checked) {
                radioChecked = true;
            }
        });

        if (!radioChecked) {
            isValid = false;
            alert('Por favor, selecione uma opção de Sexo.');
        }

        if (isValid) {
            alert('Formulário enviado com sucesso!');
            form.reset();
        }
    });
});

