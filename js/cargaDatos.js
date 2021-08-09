
// JSON
const productosEnStock = [
    {
      id: 1,
      nombre: 'Manzana', 
      precio: 3000, 
      imagen : '../img/manzana.jpg'
    },
    {
      id: 2,
      nombre: 'Pera', 
      precio: 5000, 
      imagen : '../img/pera.jpg'
    },
    {
      id: 3,
      nombre: 'Melón', 
      precio: 200, 
      imagen : '../img/melon.jpg'
    },
    {
      id: 4,
      nombre: 'Choclo', 
      precio: 50, 
      imagen : '../img/choclo.jpg'
    },
    {
      id: 5,
      nombre: 'Sandía', 
      precio: 450, 
      imagen : '../img/sandia.jpg'
    },
    {
      id: 6,
      nombre: 'Anana', 
      precio: 435, 
      imagen : '../img/anana.jpg'
    },
    {
      id: 7,
      nombre: 'Uva', 
      precio: 100, 
      imagen : '../img/uva.jpg'
    },
    {
      id: 9,
      nombre: 'Carbón', 
      precio: 234, 
      imagen : '../img/carbon.jpg'
    },
    {
      id: 10,
      nombre: 'arandanos', 
      precio: 100, 
      imagen : '../img/arandanos.jpg'
    },
    {
      id: 11,
      nombre: 'Zanahoria', 
      precio: 65, 
      imagen : '../img/zanahoria.jpg'
    },
    {
      id: 12,
      nombre: 'Cable USB', 
      precio: 150, 
      imagen : '../img/cableusb.jpg'
    },
    {
      id: 13,
      nombre: 'Agua mineral', 
      precio: 120, 
      imagen : '../img/aguamineral.jpg'
    },
    {
      id: 14,
      nombre: 'Papel Higienico', 
      precio: 212, 
      imagen : '../img/papelhigienico.jpg'
    },
    {
      id: 15,
      nombre: 'Anillo de oro', 
      precio: 55000, 
      imagen : '../img/anillodeoro.jpg'
    },
    {
      id: 16,
      nombre: 'Algodón', 
      precio: 56, 
      imagen : '../img/algodon.jpg'
    }
  ];

let total = 0;

//Carga los productos en las cards
function cargarProductos(){
    //obtiene la seccion de productos
    let seccionProd = document.getElementById('secProducts');
    //recorre el json
    for (prod of productosEnStock) {
        let card = document.createElement('div');
        // Estructura
        const miCard = document.createElement('div');
        miCard.classList.add('card', 'text-white', 'bg-secondary','mb-3');
        // Imagen
        const miImagen = document.createElement('img');
        miImagen.classList.add('card-img-top');
        miImagen.setAttribute('src', prod.imagen);
        // Body
        const miCardBody = document.createElement('div');
        miCardBody.classList.add('card-body');
        // Titulo
        const miCardTitle = document.createElement('h5');
        miCardTitle.classList.add('card-title');
        miCardTitle.textContent = prod.nombre;   
        // Precio
        const miCardPrecio = document.createElement('p');
        miCardPrecio.classList.add('card-text');
        miCardPrecio.textContent = '$' + prod.precio;          
        // Boton Agregar 
        let miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-warning');
        miBoton.textContent = 'Agregar al Carrito';
        miBoton.setAttribute('marcador', prod.id);
        miBoton.addEventListener('click', agregarProductoAlCarrito);
        // Agrega elementos a cardBody
        miCardBody.appendChild(miCardTitle);
        miCardBody.appendChild(miCardPrecio);
        miCardBody.appendChild(miBoton);
        miCard.appendChild(miImagen);
        miCard.appendChild(miCardBody);
        seccionProd.appendChild(miCard);
    }

}
//Agrega un producto al localStorage
function agregarProductoAlCarrito(e){ 

  let idProd = e.target.getAttribute('marcador');
  if(localStorage.getItem(idProd) != undefined && localStorage.getItem(idProd) != null){
    localStorage.setItem(idProd, parseInt(localStorage.getItem(idProd)) +1);
  }
  else{
    localStorage.setItem(idProd, 1);

  }

  mostrarProdEnCarrito();
}

function mostrarProdEnCarrito() {
  let cuerpoCarrito = document.getElementById('tablaCarrito'); 
  cuerpoCarrito.innerHTML =  ``;
  //recorre localstorage en busca de productos agregados
  for(var i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    //recorrer el json y cargar tabla de carrito
    for(const producto of productosEnStock){
        if(producto.id == clave){

          let subtotal = 0;         
          let cantPedido = localStorage.getItem(clave);
          //Calcula subtotal
          subtotal = cantPedido * producto.precio;
          let regProd = document.createElement('tr');
          regProd.innerHTML = `<td><img class="card-img-top img-Carrito" src="${producto.imagen}" alt="Card image cap"></img></td>
                              <td>${producto.nombre}</td>
                              <td>${cantPedido}</td>
                              <td>$${producto.precio}</td>
                              <td>$${subtotal}</td>`

          cuerpoCarrito.appendChild(regProd);
          //calcula total
          total += subtotal;
        }
    }
  }
  let textTotal = document.getElementById('total'); 
  textTotal.textContent = total;
}
//vacia carrito
let btnVacia = document.getElementById('btnVaciar'); 
btnVacia.addEventListener('click', vaciarCarrito);
function vaciarCarrito(){
  localStorage.clear();   
  let cuerpoCarrito = document.getElementById('tablaCarrito'); 
  cuerpoCarrito.innerHTML =  ``;
  total = 0;
  let textTotal = document.getElementById('total'); 
  textTotal.textContent = 0;
}
//finaliza compra
let btnCompra = document.getElementById('btnComprar'); 
btnCompra.addEventListener('click', finalizaCompra);
function finalizaCompra(){
  localStorage.clear();   
  let cuerpoCarrito = document.getElementById('tablaCarrito'); 
  cuerpoCarrito.innerHTML =  ``;
  total = 0;
  let textTotal = document.getElementById('total'); 
  textTotal.textContent = 0;
  alert('Compra realizada con Éxito');
}

//Carga los productos
cargarProductos();
// Muestra los productos del carrito
mostrarProdEnCarrito();
