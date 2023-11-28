//Mostra tela modal
function iniciaModal(modalId) {
  const modalConte = document.getElementById(modalId);
  modalConte.classList.add("mostrar");
  modalConte.addEventListener("click", (e) => {
    if (e.target.className == "btn-1") {
      modalConte.classList.remove("mostrar");
    }
  });
}
setTimeout(() => {
  iniciaModal("modal-content");
}, 500);

//Mostra tela login
const main_log = document.querySelector(".main-login");
btnMostrarLogin.addEventListener("click", mostarLogin);

function mostarLogin() {
  const main_log = document.querySelector(".main-login");
  main_log.classList.add("mostrar-login");
}
const btnMostrarLogin = document.querySelector(".btn");
btnMostrarLogin.addEventListener("click", mostarLogin);
