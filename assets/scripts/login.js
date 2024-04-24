export default async function validarUsuario(){
    const inputsLogin = document.querySelectorAll(".input-login")

    const nome = inputsLogin[0].value;
    const senha = inputsLogin[1].value;

    try{
    const response = await fetch('http://localhost:3000/usuario', {
        method:'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            nm_usuario: nome,
            sen_usuario:senha
    })
    })
    window.location.href = './tarefas.html';
    } 
    catch(e){
        console.log(e);
    }

}

