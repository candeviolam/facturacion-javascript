// Carga Inicial de Datos - Semilla
// crear los datos que voy a querer almacenar en el local storage
const productos_base = [
  {
    id: 1, // reconocer el elemento de la lista sin equivocarnos
    descripcion: // adentro podría tener un array, con distintos objs. por ej "título: " "," , "cuerpo: " "," etc! así puedp resaltar el título en negrita, bla bla bla
      "Consigue lo que te propongas. Lleva a cabo tus tareas de la oficina con eficiencia. Mantiene tus negocios productivos y tus datos, seguros. Diseño más delgado y pequeño con marcos laterales más estrechos. Pantalla de 15.6 pulgadas para que no te pierdas de ningún detalle.",
    precio_unitario: 144999, // valor que uso para calcular el carrito de compras
    precio_unitario_str: "144.999", // representación en string del precio unitario, el que uso para mostrar (sino muchi quilombo usar el de arriba)
    nombre: "Notebook Lenovo Intel Pentium Dual Core 4gb 1tb 15,6 PuLG",
    fecha_de_creacion: Date.now(), //no fecha de creación del producto, sino del registro para que sepamos cuando se creó
    stock: 5,
    permite_stock_negativo: false,
    foto_url:
      "https://http2.mlstatic.com/D_NQ_NP_772820-MLA52042080048_102022-O.webp",
  },
  {
    id: 2, 
    descripcion: 
      "PlayStation renovó las expectativas del mundo virtual con esta nueva consola y su gran rendimiento. Cuenta con una interfaz de usuario más rápida y fácil de navegar que en anteriores modelos. Además, podrás jugar durante horas desafiando a millones de contrincantes alrededor del mundo que esperan nuevos retos.",
    precio_unitario: 469999,
    precio_unitario_str: "469.999",
    nombre:
      "Sony PlayStation 5 Digital 825GB Horizon Forbidden West Bundle color blanco y negro",
    fecha_de_creacion: Date.now(),
    stock: 2,
    permite_stock_negativo: false,
    foto_url:
      "https://http2.mlstatic.com/D_NQ_NP_695244-MLA50816001774_072022-O.webp",
  },
  {
    id: 3,
    descripcion:
      "Este teclado HyperX de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel.",
    precio_unitario: 37999,
    precio_unitario_str: "37.999",
    nombre:
      "Teclado gamer HyperX Alloy Origins 65 QWERTY HyperX Linear Red inglés US color negro con luz RGB",
    fecha_de_creacion: Date.now(),
    stock: 7,
    permite_stock_negativo: true,
    foto_url:
      "https://http2.mlstatic.com/D_NQ_NP_775176-MLA50158986097_062022-O.webp",
  },
];

const local_storage_llaves = { // creo el objeto (para controlar si ya están los datos en el local storage) al cual le asigno las constantes que vamos a usar en el sistema (PORDUCTOS, USUARIOS, (por más de que sean propiedades (?))
  PRODUCTOS: "productos", // la creo para que yo pueda usar esta variable, y si cambio dps "productos", va a impactar en todos lados donde esté usando la propiedad "PRODUCTOS"
  USUARIOS: "usuarios",
};

//BOM (browser object model) , nos da el obj. window para manejar la ventana del navegador
window.onload = function () { // la func. ".onload" dispara una función anónima cuando recién se esté cargando la pantalla
  const productos = ObtenerLocalStorage(local_storage_llaves.PRODUCTOS); // la lógica del window.onload va a verificar en el localstorage si hay elementos, verificar si llegan los productos ; y si no hay, agregarlos como dice abajo

//    (productos === null || productos == undefined)
  if (!productos) { // si lo que está arriba no exite (const productos = ObtenerLocalStorage(local_)..), agregarlo al local storage
    AgregarLocalStorage(local_storage_llaves.PRODUCTOS, productos_base); // lo llamo acá, ya está hecho el stringify y eso me ahorra todo el tiempo hacer JSON. ...
  } else { // borrar ésto dsp para no dejar el console.log
    console.log("El local storage posee datos"); // si ya tiene elems., no almacenar nada (para no sobreescribir lo que ya está)
  }
};


function ObtenerLocalStorage(key) { //para obtener los items
//      voy a guardar en una variable la respuesta de ese localStorage.getItem(key)
  const res = localStorage.getItem(key); //localStorage.getItem para obtener el producto usa la key que nos le vamos a pasar
  return JSON.parse(res); // voy a retornar la respuesta del local stor. dsp de convertirlo en un objeto de js para poder usarlo
}

// los saco en una función porque me sirve para reutilizar dsp en todos los casos (para eso necesito la key y el objeto)

//                           le pasamos key y el objeto que vamos a almacenar
function AgregarLocalStorage(key, objeto) { // si no existen productos (el if de arriba), agregamos al local storage
//                          = const string = JSON.stringify(objeto); y dps pasarle "string" como parám. abajo al lado de key
  localStorage.setItem(key, JSON.stringify(objeto));
}
