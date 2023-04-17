const detalle = document.getElementById("detalle_producto");

const urlParams = new URLSearchParams(window.location.search);
const paramId = urlParams.get("id");

const local_storage_llaves = {
  PRODUCTOS: "productos",
  USUARIOS: "usuarios",
};

const objeto = JSON.parse(localStorage.getItem(local_storage_llaves.PRODUCTOS));

if (!objeto) {
  // si no existe el objeto, enviar al usuario a la página de error
}

let elementoFiltrado = objeto.filter(
  (producto) => producto.id === parseInt(paramId)
);

elementoFiltrado = elementoFiltrado[0];

detalle.innerHTML = CreateProduct();

function CreateProduct() {
  return `<div class="container parent">
    <h3>${elementoFiltrado.nombre}</h3>
    <img src="${elementoFiltrado.foto_url}"/>
    <p>${elementoFiltrado.descripcion}</p>
    </div>`;
}
