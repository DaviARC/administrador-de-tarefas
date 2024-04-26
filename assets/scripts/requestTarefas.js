export default async function requestTarefas(){
    if(localStorage.getItem("Token")){
        const response = await fetch("http://localhost:3000/tarefas", {
            method: 'GET',
            headers: {'x-acess-token': localStorage.getItem("Token")}
        })
        const data = await response.json();
        
        const tarefas = data.rows.map(row=>{
            return {tit_tarefa: row.tit_tarefa, des_tarefa: row.des_tarefa}
        })
        return tarefas;
    }
}