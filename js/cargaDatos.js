
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



//Carga los productos en las cards
function cargarProductos(){
    //obtiene la seccion de productos
    //recorre el json
    for (prod of productosEnStock) {
      //obtiene la seccion de productos y agrega las cards
      $("#secProducts").append(`
                                <div class="card text-white bg-secondary mb-3">
                                  <img src="${prod.imagen}" class= "card-img-top" alt="">
                                  <div class="card-body">
                                    <h5 class="card-title">${prod.nombre}</h5>
                                    <p class="card-text">$ ${prod.precio}</p>
                                    <button class="btn btn-warning" id="btn${prod.id}"marcador="${prod.id}">Agregar al Carrito</button>
                                  </div>
                                </div>
                              `);

            //Asociamos el evento a botón creado.
        $(`#btn${prod.id}`).on('click', function (e) {
          let idProd = e.target.getAttribute('marcador');
          if(localStorage.getItem(idProd) != undefined && localStorage.getItem(idProd) != null){
            localStorage.setItem(idProd, parseInt(localStorage.getItem(idProd)) +1);
          }
          else{
            localStorage.setItem(idProd, 1);
        
          }
        
          mostrarProdEnCarrito();
        });

    }

}

function mostrarProdEnCarrito() {

  $("#tablaCarrito").html("");

  let total = 0;
  //recorre localstorage en busca de productos agregados
  for(var i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    //declara el total
    
    let subtotal = 0;  
    //recorrer el json y cargar tabla de carrito
    for(const producto of productosEnStock){
        
        if(producto.id == clave){
               
          let cantPedido = localStorage.getItem(clave);
          //Calcula subtotal
          subtotal = cantPedido * producto.precio;
          $("#tablaCarrito").append(`
                                    <tr>
                                      <td><img class="card-img-top img-Carrito" src="${producto.imagen}" alt="Card image cap"></img></td>
                                      <td>${producto.nombre}</td>
                                      <td>${cantPedido}</td>
                                      <td>$${producto.precio}</td>
                                      <td>$${subtotal}</td>
                                    </tr>
                                  `);  
              
        }
    }
    total += subtotal;
    subtotal = 0;
  }
  $("#total").html(total);
}
//vacia carrito
$("#btnVaciar").on('click', function () {
        localStorage.clear();   
        $("#tablaCarrito").html(""); 
        $("#total").html("");
});


//finaliza compra
$("#btnComprar").on('click', function () {
  if (parseInt($("#total").text()) ==0){
    alert('No hay productos en el carrito');
  }
  else{
    localStorage.clear(); 
    $("#tablaCarrito").html(""); 
    $("#total").html("");
    alert('Compra realizada con Éxito');
  }
});

//Carga los productos
cargarProductos();
// Muestra los productos del carrito
mostrarProdEnCarrito();
