// ***********************
// *** EJERCICIO EXTRA ***
// ***********************

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
}

var retencion = 0;
var ret_anual = 0;
var neto_anual = 0;
var neto_mensual = 0;

if (empleado.bruto < 12000) retentencion = 0;
else if (empleado.bruto < 24000) retencion = 8;
else if (empleado.bruto < 34000) retencion = 16;
else retencion = 30;

if (empleado.hijos > 0) retencion = retencion -2;
//empleado.hijos >0 ? retencion = retencion - 2 : retencion = retencion;

ret_anual = retencion * empleado.bruto;
neto_anual = empleado.bruto - ret_anual;
neto_mensual = neto_anual / empleado.pagas;

console.log("% de retención: " + retencion);
console.log("Retención anual: " + ret_anual);
console.log("Neto anual: " + neto_anual);
console.log("Neto mensual: " + neto_mensual);


// ************************
// *** EJERCICIO BÁSICO ***
// ************************

// const product = {
//     count: 16, 
//     price: 12.55, 
//     type: "libros"};

// var importe = 0;
// var iva = 0;
// var imp_total = 0;

// if (product.count <= 0) product.count = 0;
// importe = product.count * product.price;

// //product.count <= 0 ? product.count = 0 : product.count;

// switch (product.type) {
//     case "libros":
//         iva = 0.04 * importe;
//         break;
//     case "alimentacion":
//         iva = 0.04 * importe;
//         break;
//     default:
//         iva = 0.21 * importe;
// }

// imp_total = importe + iva;

// console.log("Precio sin IVA: " + importe);
// console.log("IVA: " + iva);
// console.log("Precio con iva: " + imp_total);