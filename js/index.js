// Carga Inicial de Datos - Semilla
const productos_base = [
  {
    id: 1, // reconocer el elemento de la lista sin equivocarnos
    descripcion:
      "Consigue lo que te propongas. Lleva a cabo tus tareas de la oficina con eficiencia. Mantiene tus negocios productivos y tus datos, seguros. Diseño más delgado y pequeño con marcos laterales más estrechos. Pantalla de 15.6 pulgadas para que no te pierdas de ningún detalle.",
    precio_unitario: 144999,
    nombre: "Notebook Lenovo Intel Pentium Dual Core 4gb 1tb 15,6 PuLG",
    fecha_de_creacion: Date.now(),
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
    nombre:
      "Teclado gamer HyperX Alloy Origins 65 QWERTY HyperX Linear Red inglés US color negro con luz RGB",
    fecha_de_creacion: Date.now(),
    stock: 7,
    permite_stock_negativo: true,
    foto_url:
      "https://http2.mlstatic.com/D_NQ_NP_775176-MLA50158986097_062022-O.webp",
  },
];

const local_storage_llaves = {
  PRODUCTOS: "productos",
  USUARIOS: "usuarios",
};

window.onload = function () {
  const productos = ObtenerLocalStorage(local_storage_llaves.PRODUCTOS);

  if (!productos) {
    AgregarLocalStorage(local_storage_llaves.PRODUCTOS, productos_base);
  } else {
    console.log("El local storage posee datos");
  }
};

function ObtenerLocalStorage(key) {
  const res = localStorage.getItem(key);
  return JSON.parse(res);
}

function AgregarLocalStorage(key, objeto) {
  localStorage.setItem(key, JSON.stringify(objeto));
}
