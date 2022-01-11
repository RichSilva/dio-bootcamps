var tarefa = document.getElementById("tarefa");
var lista = document.getElementById("lista");

function adicionar() {
    var atividade = document.createElement('div');
    var checkboxAtividade = document.createElement('input');
    var labelAtividade = document.createElement('label');
    var labelConteudo = document.createTextNode(tarefa.value);

    checkboxAtividade.setAttribute('type', 'checkbox');
    checkboxAtividade.setAttribute('id', tarefa.value);

    labelAtividade.setAttribute('for', tarefa.value);
    labelAtividade.appendChild(labelConteudo);

    atividade.classList.add('item');
    atividade.appendChild(checkboxAtividade);
    atividade.appendChild(labelAtividade);
    lista.appendChild(atividade);
}
