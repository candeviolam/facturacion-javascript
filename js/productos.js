const div_productos = document.querySelector("#lista"); // obtener la referencia del div p/empezar a imprimir los productos
// (div_productos).innerHTMl -> hace referencia al html interno de esa etiqueta (por ej del div), vamos a asignarle todo el html a ese div puntual

const local_storage_llaves = { // copiar esta constante del index
  PRODUCTOS: "productos",
  USUARIOS: "usuarios",
};

//                                   ésto viene del index ObtenerLocalStorage - getItem(key) -> "key" me aparece como undefined en la consola, le pongo "local_storage_llaves.PRODUCTOS" 
const productos = localStorage.getItem(local_storage_llaves.PRODUCTOS);

//  ya en index preguté si no existían para agregarlos, ahora pregunto si existen para dibujarlos en la pantalla
if (productos) {
//      nombre cualq de variable, van a ser los productos que se me van dibujando
  const lista = JSON.parse(productos); // JSON.parse(key) del index (?, pero le pongo el "productos" de la const de arriba
//    nombre que quiera
  let htmlString = ""; // estamos creando una cadena que es html (dsp le concateno con += el CreateCards, y pasa a asignársele ese valor concatenado a htmlString)
//               nombre que quiera (viene con "element")
  lista.forEach((producto) => { // teninendo los objetos (los productos), ya los puedo recorre en un for each, (se va a ejecutar una vez cada elemento)
//            el operador de asignación abreviada += también se puede utilizar para concatenar cadenas
    htmlString += CreateCards( // concatenar todas las strings (cada div) que me devuelva la función CreateCards (abajo está la función), que se va a ejecutar una vez por cada uno de los elementos que tengo en el array con el foreach
      producto.foto_url,
      producto.nombre,
//    ésta es la url a la que vamos a visitar (abajo está la función)
      Url(producto.id), // = `../pages/productos_id.html?id=${producto.id}` -> pero lo pongo en una función que está abajo para que quede mejor
      producto.precio_unitario_str
    );
  });
  div_productos.innerHTML = htmlString; // una vez que se terminó de recorrer el ciclo del foreach, le asignamos el htmlString que acabamos de crear
} else {
  div_productos.innerHTML = "<h1>NO HAY PRODUCTOS CARGADOS</h1>";
}


//usar esta función para dibujar mi html, recuperamos los productos del local storage (los objetos de productos que están en el index) y los dibujamos con este método en el html
//                   vamos a recibir esto, con el nombre que yo quiera
function CreateCards(image, title, url) { // función a la que yo llamo CreateCards
//return -> retorna las tarjetas
// en "image" por ej le voy a pasar la url de la imagen que ya tengo como foto_url en el index.js (src/href="${}" va entre comillas a diferencia del titulo por ej (?)
  return `<div class="card" style="width: 18rem;"> 
    <img src="${image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <a href="${url}" class="btn btn-dark">Detalle</a>
    </div>
  </div>`;
}

//       nombre que quiera a la función
//           con el id hacemos la navegación hacia la siguiente url (viene de las propiedades que yo le puse a mi objeto de producto cuando los cree en el index)
function Url(id) {
//        le paso la dirección para que vaya a ése archivo html
//                                       en lugar de producto.id , le paso el id que estamos usando por parámetro, arriba en (htmlString +=)CreateCards le paso por parámetro la función Url(producto.id)
  return `../pages/productos_id.html?id=${id}`; // para filtrar por id, voy a traer ése producto
}

//                                       ? + nombre de la variable que voy a usar + = + el valor (que le estoy pasando por parámetro)
//                                       con & (and) puedo concatenar query strings
//                                  ? -> query string. con este query string le estamos asignando valores de variables que nosotros podemos traer desde la url para utilizarlas
//                                  en éste caso, estoy usando el query string y le estoy creando una variable id
//                                  ?nombre
//                                  ?dni
//                                  ?fechadenacimiento
//                                  ?etc

//                    uso el id para hacer una búsqueda dentro de la lista "if(productos) .. lista.foreach .. etc"  y que la búsqueda se exacta
