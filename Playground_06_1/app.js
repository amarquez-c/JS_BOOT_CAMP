// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
{
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
},
{
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
},
{
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
},
{
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
},
{
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
},
{
description: "Pizarra blanca",
price: 5.95,
tax: REGULAR_TYPE,
stock: 2,
units: 0,
},
{
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
},
{
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
},
];

// Creación de la página dinámica

var container = document.getElementById("product-list-container");

// Dar formato a los elementos creados.

for (var i = 0; i < products.length; i++)
{
    var span = document.createElement("span");


    var label = document.createElement("label");
    label.setAttribute("class", "label");
    label.innerHTML= products[i].description;
    container.appendChild(label);

    var input = document.createElement("input");
    input.setAttribute("class", "product-unit");
    input.setAttribute("type", "number");
    input.setAttribute("min", 0);
    input.setAttribute("max", products[i].stock);
    input.setAttribute("value", products[i].units);
    input.innerHTML = "Hola";
    container.appendChild(input)
}