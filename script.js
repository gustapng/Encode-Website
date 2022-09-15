const inputs = document.querySelectorAll('.input');
var carrosel = document.querySelectorAll('.crs-3')
var size = screen.width;

// adiciona a classe .span-active quando o input estiver em focus //
const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

// remove a classe .span-active quando o input estiver em focus para ficar com o span na estilização normal //
const handleFocusout = ({ target }) => {
    if(target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

// Quando o input estiver com o atributo 'focus' realizar essa função handleFocus //
inputs.forEach((input) => input.addEventListener('focus', handleFocus));

// Quando o input estiver com o atributo 'focusout' realizar essa função handleFocusout //
inputs.forEach((input) => input.addEventListener('focusout', handleFocusout));