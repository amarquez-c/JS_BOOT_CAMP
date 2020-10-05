var resultado = 0;
var operador = 0;
var init = true;
var oper = 0;

document.getElementById('result').innerHTML = resultado;

const suma = () => {

    oper = 1;
}

const resta = () => {
    oper = 2
}

const mult = () => {
    oper = 3;
}

const div = () => {
    oper = 4;
}

var muestraResultado = () => {
    document.getElementById('result').innerHTML = resultado;
    init = true;
}