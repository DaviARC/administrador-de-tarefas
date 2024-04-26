export default function criaTarefa(tarefa){
    const divCont = document.createElement('div');
    divCont.classList.add('tarefa');
    const div = document.createElement('div');
    div.innerHTML = tarefa.tit_tarefa;
    div.classList.add('titulo-tarefa');
    const p = document.createElement('p');
    p.innerHTML = tarefa.des_tarefa;
    p.classList.add('descricao-tarefa');

    divCont.append(div);
    divCont.append(p);

    return divCont
}