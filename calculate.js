//variáveis
const display = document.getElementById('display')

function clearDisplay() {
    display.value = '';
}

function escreverDisplay(valor) {
    display.value += valor;
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = 'ERROR';
        console.log('<ERROR>: Final inválido')
    }
}

















