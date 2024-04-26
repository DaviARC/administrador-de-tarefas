import requestTarefas from "./assets/scripts/requestTarefas.js";
import criaTarefa from "./assets/scripts/criaTarefa.js";
import cadastrarTarefas from "./assets/scripts/cadastrarTarefa.js";
const containerTarefas = document.querySelector(".container-tarefas");
const formCadastrarTarefa = document.querySelector(".cadastrar-tarefas")
const sombra = document.querySelector('.sombra');
const botaoCadastrarTarefa = document.querySelector(".botao-submit");
const inputsCadastrarTarefa = document.querySelectorAll(".input-cadastrar-tarefa");

sombra.addEventListener('click', ()=>{
    formCadastrarTarefa.style.display = "none"
    sombra.style.display = "none"
})
formCadastrarTarefa.addEventListener('submit', e=>{
    e.preventDefault();
    console.log(inputsCadastrarTarefa[0].value, inputsCadastrarTarefa[1].value)
    cadastrarTarefas(inputsCadastrarTarefa[0].value, inputsCadastrarTarefa[1].value);

    inputsCadastrarTarefa.forEach(input=>input.value="")
    exibeTarefas();
})

exibeTarefas();


async function exibeTarefas(){
    containerTarefas.innerHTML = `<div class="tarefa">
    <div class="adiciona-nova-tarefa">+</div>
    </div>`

    const botaoAdicionaNovaTarefa = document.querySelector(".adiciona-nova-tarefa");

    botaoAdicionaNovaTarefa.addEventListener('click', ()=>{
    formCadastrarTarefa.style.display = "flex"
    sombra.style.display = "block"
    })
    const tarefas = await requestTarefas();
    tarefas.forEach(tarefa => {
        containerTarefas.append(criaTarefa(tarefa)); 
    })
}
