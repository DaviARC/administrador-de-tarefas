export default async function validarUsuario(){
    const inputsLogin = document.querySelectorAll(".input-login")

    const nome = inputsLogin[0].value;
    const senha = inputsLogin[1].value;

    try{
    const response = await fetch('http://localhost:3000/login', {
        method:'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            user: nome,
            password:senha
    })
    })
    const data = await response.json();
    localStorage.setItem("Token", data.token);
    if(data.auth){
        window.location.href = "./tarefas.html";
    }
    } 
    catch(e){
        console.log(e);
    }

}

