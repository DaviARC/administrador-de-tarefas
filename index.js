import requestTarefas from "./assets/scripts/requestTarefas.js";
import criaTarefa from "./assets/scripts/criaTarefa.js";
import cadastrarTarefas from "./assets/scripts/cadastrarTarefa.js";
const containerTarefas = document.querySelector(".container-tarefas");
const containerTarefasConcluidas = document.querySelector(".container-tarefas-concluidas")
const formCadastrarTarefa = document.querySelector(".cadastrar-tarefas")
const sombra = document.querySelector('.sombra');
const inputsCadastrarTarefa = document.querySelectorAll(".input-cadastrar-tarefa");

sombra.addEventListener('click', ()=>{
    formCadastrarTarefa.style.display = "none"
    sombra.style.display = "none"
})
formCadastrarTarefa.addEventListener('submit', e=>{
    e.preventDefault();

    cadastrarTarefas(inputsCadastrarTarefa[1].value, inputsCadastrarTarefa[0].value);

    inputsCadastrarTarefa.forEach(input=>input.value="")
    exibeTarefas();
})

document.addEventListener('DOMContentLoaded', ()=> {
    exibeTarefas();
});

async function exibeTarefas(){
    containerTarefas.innerHTML = `<div class="tarefa">
    <div class="adiciona-nova-tarefa">+</div>
        </div>`

    containerTarefasConcluidas.innerHTML = ""

    adicionarEventoNovaTarefa();

    const tarefas = await requestTarefas();
    

    tarefas.forEach((tarefa) => {
        let tarefaElemento = criaTarefa(tarefa)
        if(tarefa.con_tarefa)
        {   
            containerTarefasConcluidas.append(tarefaElemento);
        } else 
        {
            containerTarefas.append(tarefaElemento); 
        }  
    })

    const apagarTarefaBotao = document.querySelectorAll('.apagar-tarefa');
    const concluirTarefaBotaoChecked = document.querySelectorAll('.icone-checked');
    const concluirTarefaBotaoNoChecked = document.querySelectorAll('.icone-no-checked');

    adicionaEventoDeApagarTarefas(apagarTarefaBotao, tarefas);
    adicionaEventoDeConcluirTarefas(concluirTarefaBotaoChecked, tarefas, false);
    adicionaEventoDeConcluirTarefas(concluirTarefaBotaoNoChecked, tarefas, true);
}

function adicionaEventoDeApagarTarefas(botoes, tarefas){
    let tarefaSelecionada;
    botoes.forEach((botao) => {
        tarefas.forEach(tarefa =>{
            if(tarefa.tit_tarefa === botao.parentNode.parentNode.textContent){
                tarefaSelecionada = tarefa
            }
        })
        botao.addEventListener('click',async ()=>{
            let aux = confirm("Deseja apagar a tarefa?")
            if(aux){
                const response = await fetch(`http://localhost:3000/tarefa/` + tarefaSelecionada.cd_tarefa, {
                    method: 'DELETE',
                    headers: {'authorization': localStorage.getItem("Token")}
                })  

                exibeTarefas();
            } else {
                return
            }  
        })
    })
}
function adicionaEventoDeConcluirTarefas(botoes, tarefas, aux){
    var tarefaSelecionada
    let titulo;
    botoes.forEach((botao, i)=>{
        const tituloHTML = botao.parentNode.parentNode.textContent.trim();
        botao.onclick = async ()=>{
            for(let i = 0; i < tarefas.length; i++){
                titulo = tarefas[i].tit_tarefa.trim()
                if(titulo === tituloHTML){
                    tarefaSelecionada = tarefas[i];
                    break;
                }
            }
            const response = await fetch(`http://localhost:3000/tarefa/` + tarefaSelecionada.cd_tarefa, {
                method: 'PUT',
                headers: {'authorization': localStorage.getItem("Token"),
                'Content-Type': 'application/json'},
                body: JSON.stringify({con_tarefa: aux})
            })
            exibeTarefas();
        }
    })
}
function adicionarEventoNovaTarefa(){
    const botaoAdicionaNovaTarefa = document.querySelector(".adiciona-nova-tarefa");

    botaoAdicionaNovaTarefa.addEventListener('click', ()=>{
    formCadastrarTarefa.style.display = "flex"
    sombra.style.display = "block"
    })
}
