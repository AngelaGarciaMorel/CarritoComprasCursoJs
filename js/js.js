//valor de 1 peso en guaranies
let pesoGuarani = 45;
//valor de 1 peso en reales
let pesoReal = 0.055;
//valor de 1 peso en dolares
let pesoDolar = 0.010;

//función que muestra el precio total de la compra dependiendo el tipo de moneda
function calculaPrecio(cantidad, precio, moneda){
    let precioTotal = 0;
    switch(moneda){
        case 'PESO':
            precioTotal = precio * cantidad;
            return 'El Precio total es de: $' + precioTotal;
            break;
        case 'GUARANI':
            precioTotal = precio * cantidad * pesoGuarani;
            return 'El Precio total es de: ₲' + precioTotal;
            break;
        case 'REAL':
            precioTotal = precio * cantidad * pesoReal;
            return 'El Precio total es de: R$' + precioTotal;
            break;            
        case 'DOLAR':
            precioTotal = precio * cantidad * pesoDolar;
            return 'El Precio total es de: US$' + precioTotal;
            break;
        default:
            return 'No se reconoce la moneda';
            break;            
    }
}



//define la clase Producto
class producto {
    constructor(nombre, cantidad, precio, moneda) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.moneda = moneda;
    }
    mostrarPrecioTotal() {
        let precioTotal = calculaPrecio(this.cantidad, this.precio, this.moneda);
        return precioTotal;

    }
}
//realiza el cálculo de los totales generales y los muestra
function mostrarTotales(listaProductos) {
    let sumaCantidad = 0;
    let sumaPrecio = 0;
    let moneda = "";
    for (const p of listaProductos) {
        if(moneda == "") {
            moneda = p.moneda;
        }

        //muestra el precio total de un producto
        alert("Producto: " + p.nombre + ", Cantidad: " + p.cantidad + ", Precio unitario: " + p.precio +
        ", Tipo de Moneda: " + p.moneda + ", " + p.mostrarPrecioTotal());

        //Suma los precios de los productos
        sumaPrecio += p.precio * p.cantidad;
        //Suma las cantidades de los productos
        sumaCantidad += p.cantidad;
    }

    //muestra los totales generales
    alert("La cantidad total es de: " + sumaCantidad + ", El precio total es de : " + sumaPrecio + ", la moneda en la que se debe abonar es: " + moneda)
}

let quieroSeguirCargando = 'SI';
let listaProductos = [];
let moneda =  prompt('Ingresa el tipo de moneda (Peso, Guarani, Real, Dolar)').toUpperCase();
do {
    //datos a ingresar: producto, cantidad y precio
    let nombre = prompt('Ingresa el nombre del producto: ');
    let cantidad = parseInt(prompt('Ingresa la cantidad: '));
    let precio = parseFloat(prompt('Ingresa el precio en pesos: '));

    let prod = new producto(nombre, cantidad, precio, moneda);


    listaProductos.push(prod);
    quieroSeguirCargando =prompt('si Desea seguir cargando productos al carrito ingrese SI');
} while(quieroSeguirCargando.toUpperCase() == 'SI')

mostrarTotales(listaProductos);





