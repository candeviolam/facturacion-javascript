//    nombre que quiera, traemos el div del html para usarlo
const detalle = document.getElementById("detalle_producto");

// estamos pasando el id (lo que uso desde ver detalles para ir de una pág a otra) por url, ahora lo tengo que recuperar

//               El operador new permite a los desarrolladores crear una instancia de un tipo de objeto definido por el usuario o de uno de los tipos de objeto integrados que tiene un función constructora. Una clase o función que especifica el tipo de instancia del objeto -> siempre va con mayúscular la primera letra de lo que le sigue (una función?) al operador "new"
//    nombre que quiera a la variables
//                    objeto de js, que estoy instanciando con "new"
//                                    BOM . me devuelve la info de la url (la de la pág (https://..) que tmb se convierte en un obj de program.) . search es la barra de navegación
const urlParams = new URLSearchParams(window.location.search); // cuando le paso el ".search", dsp puedo obtener los id
// console.log(window.location.search);
//    cualq nombre
//                            le paso lo que quiero recuperar
const paramId = urlParams.get("id"); // para obtener el id. cómo sabe ésto que tiene que traer el id?, porque yo le asigné ese valor (id) cuando estaba creando la url en productos.js `../pages/productos_id.html?id=${id}` (el id post "?"?)

// copiar la constante del index
const local_storage_llaves = {
  PRODUCTOS: "productos",
  USUARIOS: "usuarios",
};

//    viene tmb de index
//    éste es un array
const objeto = JSON.parse(localStorage.getItem(local_storage_llaves.PRODUCTOS));

if (!objeto) {
  // si no existe el objeto, enviar al usuario a la página de error
//  window.history.go(); y le pasamos por parámetros la url a la que quiero que me lleve
//  window.location
//  ect ... muchas formas de forzar una navegación
}

// si el elemento / producto existe, hacemos esto:
//  nombre que quiera
//                     si hago []. -> obtengo los accesos rápidos del array (de los métodos), dsp le cambio los corchetes por el nombre que va
//                                  por () me pide que le indique un predicado, que es lo que quiero filtrar (como que le diga cuál es la condición de la búsqueda)
let elementoFiltrado = objeto.filter(
//           como crear una variable 
// nombre que quiera -> variable que estoy creando yo en este filtrado
// viene a simbolizar cada uno de los elementos del array
//                          si el id del producto es = a paramId -> guardámelo en esta variable (elementoFiltrado)
  (producto) => producto.id === parseInt(paramId) // paramId -> el id que acabamos de obtener
  //               acá está comparando el producto.id que es un número, con el paramId que es un string
//                              en index, estoy declarando el id como un entero (en la descripción de mi producto), pero cuando lo paso por la url es un string -> por eso tranformar a number con parseInt
);

// el .filter me devuelve un array (de un elemento) -> elementoFiltrado es un array
// al elementoFiltrado lo voy a redeclarar ya que es un let (no es lo óptimo) para que sea el array, en posición 0 (pisar el valor del array por el elemento de la posición 0)
// (la posición 0 porque al haber usado el id me va a devolver un solo elemento)

elementoFiltrado = elementoFiltrado[0];

//"detalle" está arriba
detalle.innerHTML = CreateProduct(); // llamamos a la función CreatProduct que desarrollamos abajo

function CreateProduct() { // elementoFiltrado. ... como los tengo en el index
  return `<div class="container parent">
    <h3>${elementoFiltrado.nombre}</h3>
    <img src="${elementoFiltrado.foto_url}"/>
    <p>${elementoFiltrado.descripcion}</p>
    <p>${elementoFiltrado.precio_unitario_str}</p>
    </div>`;
}


// hasta min 1:38