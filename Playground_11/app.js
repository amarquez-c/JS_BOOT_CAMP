// Definiendo una clase con JS

class PreciosAPI {
    constructor() {
        this.descuento = 0.8;
    };

    cargaPrecioDeServidor() {
        const self = this;
        setTimeout( function() {
            const precio = 2;
            console.log(precio * self.descuento);
        },1000);
    }
};

const preciosAPI = new PreciosAPI();
preciosAPI.cargaPrecioDeServidor();




