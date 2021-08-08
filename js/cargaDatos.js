const productosEnStock = [
    {
      id: 1,
      nombre: 'Manzana', 
      precio: 3000, 
      cantidad: 3,
      imagen : '../img/manzana.jpg'
    },
    {
      id: 2,
      nombre: 'Pera', 
      precio: 5000, 
      cantidad: 100,
      imagen : '../img/pera.jpg'
    },
    {
      id: 3,
      nombre: 'Melón', 
      precio: 200, 
      cantidad: 20,
      imagen : '../img/melon.jpg'
    },
    {
      id: 4,
      nombre: 'Choclo', 
      precio: 50, 
      cantidad: 10,
      imagen : '../img/choclo.jpg'
    },
    {
      id: 5,
      nombre: 'Sandía', 
      precio: 450, 
      cantidad: 15,
      imagen : '../img/sandia.jpg'
    },
    {
      id: 6,
      nombre: 'Anana', 
      precio: 435, 
      cantidad: 45,
      imagen : '../img/anana.jpg'
    },
    {
      id: 7,
      nombre: 'Uva', 
      precio: 100, 
      cantidad: 5,
      imagen : '../img/uva.jpg'
    },
    {
      id: 9,
      nombre: 'Carbón', 
      precio: 234, 
      cantidad: 15,
      imagen : '../img/carbon.jpg'
    },
    {
      id: 10,
      nombre: 'arandanos', 
      precio: 100, 
      cantidad: 5,
      imagen : '../img/arandanos.jpg'
    },
    {
      id: 11,
      nombre: 'Zanahoria', 
      precio: 65, 
      cantidad: 55,
      imagen : '../img/zanahoria.jpg'
    },
    {
      id: 12,
      nombre: 'Cable USB', 
      precio: 150, 
      cantidad: 7,
      imagen : '../img/cableusb.jpg'
    },
    {
      id: 13,
      nombre: 'Agua mineral', 
      precio: 120, 
      cantidad: 30,
      imagen : '../img/aguamineral.jpg'
    },
    {
      id: 14,
      nombre: 'Papel Higienico', 
      precio: 212, 
      cantidad: 9,
      imagen : '../img/papelhigienico.jpg'
    },
    {
      id: 15,
      nombre: 'Anillo de oro', 
      precio: 55000, 
      cantidad: 5,
      imagen : '../img/anillodeoro.jpg'
    },
    {
      id: 16,
      nombre: 'Algodón', 
      precio: 56, 
      cantidad: 5,
      imagen : '../img/algodon.jpg'
    },
    {
      id: 17,
      nombre: 'Cuaderno', 
      precio: 130, 
      cantidad: 10,
      imagen : '../img/cuaderno.jpg'
    },
    {
      id: 18,
      nombre: 'Crema facial', 
      precio: 500, 
      cantidad: 12,
      imagen : '../img/cremafacial.jpg'
    }
  ];

let carrito = [];
let total = 0;

function cargarProductos(){
    //obtiene la seccion de productos
    let seccionProd = document.getElementById('secProducts');
    //recorre el json
    for (prod of productosEnStock) {

        let card = document.createElement('div');
        card.className = 'card card text-white bg-secondary mb-3';
        card.innerHTML = `<img class="card-img-top" src="${prod.imagen}" alt="Card image cap">
                            <div class="card-body">
                              <h5 class="card-title">${prod.nombre}</h5>
                              <p class="card-text">Precio: ${prod.precio} </p>
                              <p class="card-text">Cantidad Disponible: ${prod.cantidad} </p>
                              <button id = 'btnComprar' class="btn btn-warning">Comprar</button>
                            </div>
                          </div>`
    seccionProd.appendChild(card);
    
    let boton = document.getElementById('btnComprar');
    boton.setAttribute('marcador', prod.id);
    boton.addEventListener('click', agregarProductoAlCarrito);
    }
}

cargarProductos();




function agregarProductoAlCarrito(e){
  console.log(e.target.value);
  //  carrito.push(e.target.getAttribute('marcador'));
}
