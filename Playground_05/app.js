const carrito = [
    {
        id: 198752,
        name: "Tinta D327 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];

var imprimir = function(carrito) {
    console.log("Id: " + carrito.id);
    console.log("Name: "+ carrito.name);
    console.log("Price: " + carrito.price);
    console.log("Count: " + carrito.count);
    console.log("premium: "+ carrito.premium);
    console.log("----------------------------");
}

for (i=0; i<carrito.length; i++) {imprimir(carrito[i]);}


// Eliminamos el producto con id = 54657

for (i=0; i<carrito.length; i++)
{
    if (carrito[i].id == "54657") {
        carrito.splice(i,1);
        console.log("Elemento eliminado (id=54657)");
        break;
    }
}

// Calcular el total del carrito de la compra

var total = 0.0;

for (var item of carrito) {
    total += item.price * item.count;
}

console.log("El valor total del carrito es: " + total);

// Imprimir elementos premium 

for (var item of carrito) {
    if (item.premium) imprimir(item);
}

// ****************
// *** OPCIONAL ***
// ****************

var isPremium = true;

for (var item of carrito) {
   if(item.premium != true) {
       isPremium = false;
       break;
   }
}
if (isPremium) console.log("Pedido sin gastos de envío");
else console.log("Este pedido tiene gastos de envío");


// Calcular el total del carrito de la compra

var total = 0.0;

for (var item of carrito) {
    total += item.price * item.count;
}

if (total > 100) {
    total = 0.95 * total;
    console.log("Aplicamos un 5% de descuento.");
}
else console.log("No se aplica descuento.")
console.log("El valor total del carrito es: " + total);

// Imprimir en HTML

var htmlId = document.getElementById('container');

for (var item of carrito)
{
    htmlId.innerHTML += "<h3>" + item.id + "-----" + item.name + "-----" + item.price + "-----" + item.count + "-----" + item.premium +"</h3>";
}