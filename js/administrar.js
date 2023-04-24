//#region HTMLS
const tabla = document.getElementById("tabla");
const nombre = document.getElementById("nombre_administrar");
const foto = document.getElementById("foto_administrar");
const descripcion = document.getElementById("descripcion_administrar");
const precio = document.getElementById("precio_administrar");
const stock = document.getElementById("stock_administrar");
const stocknegativo = document.getElementById("stocknegativo_administrar");
const guardar = document.getElementById("save_administrar");
//#endregion

//#region Variables
let vnombre = "";
let vfoto = "";
let vdescripcion = "";
let vprecio = 0;
let vstock = 0;
let vstocknegativo = false;
//#endregion

//#region Event Listeners
nombre.addEventListener("change", function (e) {
  vnombre = e.target.value;
});
foto.addEventListener("change", function (e) {
  vfoto = e.target.value;
});
descripcion.addEventListener("change", function (e) {
  vdescripcion = e.target.value;
});
precio.addEventListener("change", function (e) {
  vprecio = +e.target.value; // el "+" ese es para convertir el number (en un entero(?)
});
stock.addEventListener("change", function (e) {
  vstock = +e.target.value;
});
stocknegativo.addEventListener("change", function (e) {
  vstocknegativo = stocknegativo.checked;
});

guardar.addEventListener("click", function (e) {
  e.preventDefault();
  //verificar que todos los datos estén correctos
  if (vdescripcion === "") {
    alert("Llenar el campo de descripción");
    return; // para evitar que se siga ejecutando el código (no se sigan guardando productos vacíos)
  }
  const producto = {
    id: 4, // el id más alto
    descripcion: vdescripcion,
    precio_unitario: vprecio,
    precio_unitario_str: vprecio.toString(),
    nombre: vnombre,
    fecha_de_creacion: Date.now(),
    stock: vstock,
    permite_stock_negativo: vstocknegativo,
    foto_url: vfoto,
  };

  //                                    traigo la key/clave del local storage
  const productos = localStorage.getItem(productos_key);
  const productosObjeto = JSON.parse(productos); // convirtiéndolo en un obj de JS
  productosObjeto.push(producto); // como es un array puedo hacerle push, y ya le pusheo "productos" -> guardar el producto en un array, que ya es un obj de JS
  // volver a almacenarlo en el local storage, sobreescribiendo el anterior
  localStorage.setItem(productos_key, JSON.stringify(productosObjeto)); // tengo que volver a convertir
});
//#endregion

const productos_key = "productos";
const productos = JSON.parse(localStorage.getItem(productos_key));
let htmlString = `<table class="table-light">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Precio Unitario</th>
        <th scope="col">Stock</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
    `;

//                      el elemento sobre el cual nosotros estamos trabajando
productos.forEach((producto) => {
  htmlString += CreateItem(producto);
}); // acá como dice "producto" podría decir "element", etc

htmlString += "</tbody></table>";
tabla.innerHTML = htmlString;

//                           el "querySelectorAll" me va a traer todos los botones cuyos id sean "btn-eliminar", porque si pongo el getelementbyid, busca entre todos los botones y sólo me devuelve el primero
const btnsEliminar = document.querySelectorAll("#btn-eliminar"); // lo tengo que poner abajo del innerHTML (o del html) para que se ejecute, porque si va arriba, no va a existir el botón (ya que lo estoy creando acá con código) porque el código se ejecuta dsp

//                    haciendo que ésto funcione para todos los botones (hago un evento para los botones pero cada botón se adjunta el evento por separado(?)
btnsEliminar.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    //              convierto ese "name" (el id que abajo dice que lo busque como "name") en un número con el +
    console.log(+e.target.name);
    // ya puedo eliminar el producto del local storage
    const lista = localStorage.getItem(productos_key);
    const listaObjecto = JSON.parse(lista); // convirtiendo a JSON
    //                 (este listaObjeto es un array = [])
    const nuevaLista = listaObjecto.filter(
      (producto) => producto.id != +e.target.name
    ); // estamos filtrando la lista, que me traiga todos los elementos que no tengan ese id
    localStorage.setItem(productos_key, JSON.stringify(nuevaLista)); // le vamos a pasar la nueva lista con el producto que ya no existe
  });
});

// el id jamás se muestra al usuario, ahora solo de prueba para nos
function CreateItem(producto) {
  return `<tr>
        <th scope="row">${producto.id}</th>
        <td>${producto.nombre}</td>
        <td>${producto.precio_unitario_str}</td>
        <td>${producto.stock}</td>
        <td><button class="btn btn-danger" id="btn-eliminar" name=${producto.id}>Eliminar</button></td>
      </tr>`;
  //                      pongo el name=${producto.id} para que cuando apriete "eliminar" me borre el producto con ese id
}
