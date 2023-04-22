// para inicio de sesión y manejo del usuario

//                      puedo llamar un elemento por id (#), clase (.), o etiqueta (div)
const mail = document.querySelector("#mail");
const password = document.querySelector("#password");
const btnLogin = document.getElementById("login");
const btnClose = document.getElementById("close");
const btnLogout = document.querySelector("#logout");
const btnLoginPage = document.getElementById("login-page");
const administrar = document.getElementById("administrar");

let email = "";
let pass = ""; // para poder almacenar los datos de abajo en una variable es que hago estas variables (valga la redundancia)

const key = "sesion";

const sesion = JSON.parse(localStorage.getItem(key));
if (sesion) {
  btnLoginPage.style.display = "none";
  btnLogout.style.display = "block";
  administrar.style.display = "block"; 
}

//como se rompió éste de abajo (no andaba el window.onload porque ya lo tengo en index.js, y tengo los dos scripts incrustado en el html, y el window.onload sólamente puede escuchar un evento (y éstos ya iban a ser dos)), hicimos el de arriba
// window.onload = function () {
//   const sesion = JSON.parse(localStorage.getItem(key));
//   //   este "sesion" es el resumen de la lógica if(sesion !== null && sesion !== undefined) -> es decir, "si "sesion" existe" ...
//   if (sesion) {
//     btnLoginPage.style.display = "none";
//     btnLogout.style.display = "block";
//     administrar.style.display = "block";
//   }
// };

mail.addEventListener("change", function (e) {
  email = e.target.value; // acá estoy almacenando los datos
});

password.addEventListener("change", function (e) {
  pass = e.target.value; // capturando los valores y guardándolos en una variable
});

btnLogin.addEventListener("click", function () {
  if (email === "admin" && pass === "admin") {
    const usuario = new Usuario(email, pass, "admin", true);
    localStorage.setItem(key, JSON.stringify(usuario));
    btnClose.click();
    btnLoginPage.style.display = "none";
    btnLogout.style.display = "block";
    administrar.style.display = "block";
  } else {
    console.error("Usuario o contraseña incorrectos");
  }
});

class Usuario {
  mail = "";
  password = "";
  rol = "";
  isLogged = false;

  constructor(mail, password, rol, isLogged) {
    this.mail = mail;
    this.password = password;
    this.rol = rol;
    this.isLogged = isLogged;
  }
}
