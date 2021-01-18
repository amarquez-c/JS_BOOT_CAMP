//const pattern = /[A-Z]{2}\d{20}/; // Patron del IBAN (Caso-1)
//const pattern = /([A-Z]{2}\d{2})(\s?\d{4}){5}/; // Patron del IBAN (Caso-2)

// const values = ["ES6600190020961234567890","ES66 0019 0020 9612 3456 7890"];

// values.forEach(value => {
//     console.log(pattern.test(value));
// });

// values.forEach(value => {
//     let dato = pattern.exec(value);
//     console.log(dato[1]);
// });


// Matricula de coches
// const pattern = /(\d{4})(\s|-)?([A-Z]{3})/;
// const values = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];

// values.forEach(value => {
//     console.log(pattern.test(value));
// });

// values.forEach(value => {
//     let dato = pattern.exec(value);
//     console.log('Numero = ' + dato[1] + "  Letras = " + dato[3]);
// });

// Imágenes de un un fichero
const pattern = /^<img\ssrc=".{0,}"\s\/>$/gm;
const value = `<html>
<body>
<img
src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
/>
<h1>ejemplo</h1>
<img
src="https://github.githubassets.com/images/modules/logos_page/GitHub-
Mark.png"
/>
</body>
</html>`

console.log(value.match(pattern));

