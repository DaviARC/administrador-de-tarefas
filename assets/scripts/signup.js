export default async function cadastrarUsuario(){
    const inputsSignup = document.querySelectorAll(".input")

    const login = inputsSignup[0].value;
    const nome = inputsSignup[1].value;
    const senha = inputsSignup[2].value;

    console.log(JSON.stringify({nm_usuario: nome, log_usuario:login, sen_usuario:senha}))
    try{
    const response = await fetch('http://localhost:3000/usuario', {
        method:'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            nm_usuario: nome,
            log_usuario:login,
            sen_usuario:senha
    })
    })
    window.location.href = './tarefas.html';
    } 
    catch(e){
        console.log(e);
    }

}

