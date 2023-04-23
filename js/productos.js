const div_productos = document.querySelector("#lista");

const local_storage_llaves = {
  PRODUCTOS: "productos",
  USUARIOS: "usuarios",
};

const productos = localStorage.getItem(local_storage_llaves.PRODUCTOS);

if (productos) {
  const lista = JSON.parse(productos);
  let htmlString = "";
  lista.forEach((producto) => {
    htmlString += CreateCards(
      producto.foto_url,
      producto.nombre,
      Url(producto.id),
      producto.precio_unitario_str
    );
  });
  div_productos.innerHTML = htmlString;
} else {
  div_productos.innerHTML = "<h1>NO HAY PRODUCTOS CARGADOS</h1>";
}

//                   vamos a recibir
function CreateCards(image, title, url) {
  return `<div class="card" style="width: 18rem;">
    <img src="${image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <a href="${url}" class="btn btn-dark">Detalle</a>
    </div>
  </div>`;
}

function Url(id) {
  return `../pages/productos_id.html?id=${id}`;
}
