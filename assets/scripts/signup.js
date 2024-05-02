import validarUsuario from "./validarUsuario.js";

export default async function cadastrarUsuario(){
    const inputsSignup = document.querySelectorAll(".input")

    const login = inputsSignup[1].value;
    const nome = inputsSignup[0].value;
    const senha = inputsSignup[2].value;

    console.log(JSON.stringify({nm_usuario: nome, log_usuario:login, sen_usuario:senha}))
    try{
    await fetch('http://localhost:3000/usuario', {
        method:'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            nm_usuario: nome,
            log_usuario:login,
            sen_usuario:senha
    })
    })
    validarUsuario(login, senha)
    } 
    catch(e){
        console.log(e);
    }

}

