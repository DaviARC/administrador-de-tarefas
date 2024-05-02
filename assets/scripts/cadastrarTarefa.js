export default async function cadastrarTarefas(titulo, descricao){
    const response = await fetch('http://localhost:3000/tarefa', {
        method: 'POST',
        headers: {'authorization': localStorage.getItem("Token"),
        'Content-Type': 'application/json'},
        body: JSON.stringify({
            tit_tarefa: titulo,
            des_tarefa: descricao,
    })})

    console.log(response.status);
}