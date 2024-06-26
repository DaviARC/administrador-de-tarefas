export default async function validarUsuario(nome,senha){

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

