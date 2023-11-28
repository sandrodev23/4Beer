const p = document.querySelector(".pesquisar");
const pesquisa = document.querySelector(".pesquisa");

p.addEventListener("click", mostarPesquisa);

function mostarPesquisa() {
  pesquisa.classList.toggle("mostrar");
}

const login1 = document.querySelector(".link-6");
login1.addEventListener("click", mostarLogin);

let Login = document.querySelector(".main-login");
let btn_usuario = document.querySelector(".usuario");
btn_usuario.addEventListener("click", mostarLogin);
function mostarLogin() {
  Login.classList.add("mostrar-login");
}

let btnFechaLogin = document.querySelector(".fecha");
let login = document.querySelector(".main-login");
let error = document.querySelector(".erro-usuario");
btnFechaLogin.addEventListener("click", fechaLogin);
function fechaLogin() {
  login.classList.remove("mostrar-login");
  error.style.opacity = 0;
}

const mostra_erro_usuario = document.querySelector(".erro-usuario");

function logar() {
  let nome_usuario = document.getElementById("usuario").value;
  let senha_usuario = document.getElementById("senha").value;
  let btn_login = document.querySelector(".btn");

  if (nome_usuario == "sandro@gmail.com" && senha_usuario == "Cavalo23021820") {
    location.href = "paginaInicial.html";
  } else {
    mostra_erro_usuario.classList.add("mostrar_erro");
  }
}

const mostraErroUsuario = document.querySelector(".erro-usuario");

function logar() {
  let nome_usuario = document.getElementById("usuario").value;
  let senha_usuario = document.getElementById("senha").value;
  let btn_login = document.querySelector(".btn");

  if (nome_usuario == "sandro@gmail.com" && senha_usuario == "Cavalo23021820") {
    location.href = "paginaInicial.html";
  } else {
    mostra_erro_usuario.classList.add("mostrar_erro");
  }
}
