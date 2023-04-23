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
  const producto = {
    id: 1, 
    descripcion:
      vdescripcion,
    precio_unitario: vprecio, 
    precio_unitario_str: vprecio.toString(), 
    nombre: vnombre,
    fecha_de_creacion: Date.now(),
    stock: vstock,
    permite_stock_negativo: vstocknegativo,
    foto_url:
      vfoto,
  };
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

// el id jamás se muestra al usuario, ahora solo de prueba para nos
function CreateItem(producto) {
  return `<tr>
        <th scope="row">${producto.id}</th>
        <td>${producto.nombre}</td>
        <td>${producto.precio_unitario_str}</td>
        <td>${producto.stock}</td>
      </tr>`;
}
