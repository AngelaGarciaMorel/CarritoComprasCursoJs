function mostrarProdEnCarrito() {

    $("#tablaCarrito").html("");
    let total = 0;
    //recorre localstorage en busca de productos agregados
    for(var i = 0; i < localStorage.length; i++){
      let clave = localStorage.key(i);
      //declara el total
      
      let subtotal = 0;  
      //recorrer el json y cargar tabla de carrito
      const URLJSON = "../data/productos.json"
        $.getJSON(URLJSON, function (respuesta, estado) {
            if(estado === "success"){
                let productosEnStock = respuesta;
                for(const producto of productosEnStock){                
                    if(producto.id == clave){                            
                        let cantPedido = localStorage.getItem(clave);
                        //Calcula subtotal
                        subtotal = cantPedido * producto.precio;
                        $("#tablaCarrito").append(`
                                                <tr id="tabCar">
                                                    <td><img class="card-img-top img-Prods" src="${producto.imagen}" alt="Card image cap"></img></td>
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
                $("#total").fadeOut("slow", function(){
                    //Cuando termina de ocultarse el elemento lo mostramos nuevamente
                    $("#total").fadeIn(1000);
                });
                $("#total").html(total);
        });
  }
}

  //vacia carrito
  $("#btnVaciar").on('click', function () {
          localStorage.clear();   
          $("#tablaCarrito").html(""); 
          $("#total").html("0");
       
  });
 
  //finaliza compra
  $("#btnComprar").on('click', function () {
    if (parseInt($("#total").text()) ==0){
      alert('No hay productos en el carrito');
    }
    else{
      localStorage.clear(); 
      $("#tablaCarrito").html(""); 
      $("#total").html("0");
      alert('Compra realizada con Éxito');
    }
  });
  
  //Carga los productos
  cargarProductos();
  // Muestra los productos del carrito
  mostrarProdEnCarrito();