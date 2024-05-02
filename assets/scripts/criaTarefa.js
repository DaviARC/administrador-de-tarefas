export default function criaTarefa(tarefa){
    const divCont = document.createElement('div');
    divCont.classList.add('tarefa');

    const div = document.createElement('div');
    div.innerHTML = tarefa.tit_tarefa;
    div.classList.add('titulo-tarefa');

    const divContIcons = document.createElement('div')
    divContIcons.classList.add('cont-icons');

    const imgApagar = document.createElement('img');
    imgApagar.src = "../assets/imgs/icons8-lixo-30.png";
    imgApagar.classList.add('apagar-tarefa');

    const imgConcluir = document.createElement('img');

    if(tarefa.con_tarefa){
        imgConcluir.src = "../assets/imgs/icons8-caixa-de-selecção-checked.png"
        imgConcluir.classList.add('icone-checked')
        divCont.style.backgroundColor = "#97E6BC";
    } else {
        imgConcluir.src = "../assets/imgs/icons8-caixa-de-selecção-no-checked.png"
        imgConcluir.classList.add('icone-no-checked')
    }
    

    divContIcons.append(imgConcluir);
    divContIcons.append(imgApagar);
    
    const p = document.createElement('p');
    p.innerHTML = tarefa.des_tarefa;
    p.classList.add('descricao-tarefa');

    div.append(divContIcons);
    divCont.append(div);
    divCont.append(p);

    return divCont
}