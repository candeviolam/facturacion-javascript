// para inicio de sesión y manejo del usuario

//                      puedo llamar un elemento por id (#), clase (.), o etiqueta (div)
const mail = document.querySelector("#mail");
const password = document.querySelector("#password");

let email = "";
let pass = ""; // para poder almacenar los datos de abajo en una variable es que hago estas variables (valga la redundancia)

mail.addEventListener("change", function (e) {
  email = e.target.value; // acá estoy almacenando los datos
});

password.addEventListener("change", function (e) {
  pass = e.target.value;
});

