import cadastrarUsuario from "./assets/scripts/signup.js";
import validarUsuario from "./assets/scripts/login.js";

const mudarParaLogin = document.querySelector("#mudar-login");
const mudarParaSignup = document.querySelector("#mudar-signup");
const botaoCadastrarUsuario = document.querySelector(".button-signup")
const botaoValidarUsuario = document.querySelector("#button-login")

const telas = document.querySelectorAll(".tela");

mudarParaLogin.addEventListener('click', ()=>{
    telas[0].style.display = 'none';
    telas[1].style.display = 'flex';
})

mudarParaSignup.addEventListener('click', ()=>{
    telas[1].style.display = 'none';
    telas[0].style.display = 'flex';
})

botaoCadastrarUsuario.addEventListener('click', cadastrarUsuario);
botaoValidarUsuario.addEventListener('click', validarUsuario)

